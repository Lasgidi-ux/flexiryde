import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again later.'
  }
});

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Zoho Mail SMTP Configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email templates
const createCustomerEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 12px; 
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #fed801 0%, #f5c842 100%); 
          color: #121212; 
          padding: 30px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 28px; 
          font-weight: 700;
        }
        .content { 
          padding: 30px; 
        }
        .field { 
          margin-bottom: 20px; 
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #fed801;
        }
        .field-label { 
          font-weight: 600; 
          color: #121212; 
          margin-bottom: 5px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value { 
          color: #555; 
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-content {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 15px;
          margin-top: 8px;
          white-space: pre-wrap;
        }
        .footer { 
          background: #121212; 
          color: #f5e8c7; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px;
        }
        .timestamp {
          color: #666;
          font-size: 12px;
          text-align: right;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e9ecef;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>FlexiRyde Contact Form</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">New Customer Inquiry</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.fullName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${data.subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">
              <div class="message-content">${data.message}</div>
            </div>
          </div>
          
          <div class="timestamp">
            Received: ${new Date().toLocaleString('en-US', {
              timeZone: 'Africa/Lagos',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} (Lagos Time)
          </div>
        </div>
        
        <div class="footer">
          <p style="margin: 0;">FlexiRyde - Premium Transportation Services</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">This email was sent from the FlexiRyde contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const createAutoReplyTemplate = (customerName) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 12px; 
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #fed801 0%, #f5c842 100%); 
          color: #121212; 
          padding: 30px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 28px; 
          font-weight: 700;
        }
        .content { 
          padding: 30px; 
        }
        .content h2 {
          color: #121212;
          margin-bottom: 20px;
        }
        .content p {
          margin-bottom: 15px;
          color: #555;
        }
        .highlight {
          background: linear-gradient(135deg, #fed801 0%, #f5c842 100%);
          color: #121212;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          text-align: center;
          font-weight: 600;
        }
        .footer { 
          background: #121212; 
          color: #f5e8c7; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px;
        }
        .contact-info {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .contact-info h3 {
          margin-top: 0;
          color: #121212;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting FlexiRyde</h1>
        </div>
        
        <div class="content">
          <h2>Dear ${customerName},</h2>
          
          <p>Thank you for reaching out to FlexiRyde! We have successfully received your message and our premium customer service team will review your inquiry promptly.</p>
          
          <div class="highlight">
            We typically respond to all inquiries within 24 hours during business days.
          </div>
          
          <p>At FlexiRyde, we're committed to providing you with exceptional luxury transportation services. Whether you're inquiring about our premium ride services, partnership opportunities, or need support, we're here to assist you.</p>
          
          <div class="contact-info">
            <h3>Need Immediate Assistance?</h3>
            <p><strong>Phone:</strong> +234 (0) 800 FLEXIRYDE</p>
            <p><strong>Email:</strong> info@flexiryde.com</p>
            <p><strong>Business Hours:</strong> 24/7 Premium Service</p>
          </div>
          
          <p>We appreciate your interest in FlexiRyde and look forward to serving you soon.</p>
          
          <p>Best regards,<br>
          <strong>The FlexiRyde Team</strong></p>
        </div>
        
        <div class="footer">
          <p style="margin: 0;">FlexiRyde - Premium Transportation Services</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Lagos, Nigeria | www.flexiryde.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Input validation
const validateContactForm = (data) => {
  const errors = [];
  
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
    errors.push('Full name is required and must be at least 2 characters');
  }
  
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }
  }
  
  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 5) {
    errors.push('Subject is required and must be at least 5 characters');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }
  
  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }
  
  return errors;
};

// Sanitize input
const sanitizeData = (data) => ({
  fullName: data.fullName.trim().replace(/[<>]/g, ''),
  email: data.email.trim().toLowerCase(),
  subject: data.subject.trim().replace(/[<>]/g, ''),
  message: data.message.trim().replace(/[<>]/g, '')
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    // Check for honeypot (spam prevention)
    if (req.body.honeypot) {
      return res.status(200).json({
        success: true,
        message: 'Message received successfully!'
      });
    }

    // Validate input
    const errors = validateContactForm(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Validation errors: ${errors.join(', ')}`
      });
    }

    // Sanitize data
    const sanitizedData = sanitizeData(req.body);

    // Check environment variables
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('Missing Zoho SMTP credentials');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please try again later.'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return res.status(500).json({
        success: false,
        message: 'Email service temporarily unavailable. Please try again later.'
      });
    }

    // Email options
    const teamEmailOptions = {
      from: `"FlexiRyde Contact Form" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      subject: `New Contact Form Submission: ${sanitizedData.subject}`,
      html: createCustomerEmailTemplate(sanitizedData),
      replyTo: sanitizedData.email
    };

    const autoReplyOptions = {
      from: `"FlexiRyde Team" <${process.env.ZOHO_EMAIL}>`,
      to: sanitizedData.email,
      subject: 'Thank you for contacting FlexiRyde - We\'ll be in touch soon!',
      html: createAutoReplyTemplate(sanitizedData.fullName)
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(teamEmailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`FlexiRyde Contact API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

export default app;
