# FlexiRyde Contact System Setup Guide

## Overview
The FlexiRyde contact system includes a luxury 2026-style contact page with full Zoho Mail SMTP integration for secure email delivery.

## Features
- ✅ Luxury 2026 UI/UX design with glassmorphism effects
- ✅ Comprehensive form validation and error handling
- ✅ Spam prevention with honeypot fields
- ✅ Rate limiting (5 submissions per 15 minutes per IP)
- ✅ Auto-reply emails to customers
- ✅ Professional email templates
- ✅ Full responsive design
- ✅ Accessibility compliance
- ✅ Security headers and CORS protection

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the example environment file and configure your Zoho Mail credentials:

```bash
cp .env.example .env
```

Edit `.env` file with your actual values:
```env
ZOHO_EMAIL=info@flexiryde.com
ZOHO_PASSWORD=your_zoho_app_password_here
FRONTEND_URL=http://localhost:5173
PORT=3001
```

### 3. Set Up Zoho Mail App Password
1. Go to [Zoho Account Security](https://accounts.zoho.com/home#security/app-passwords)
2. Generate an App-Specific Password for "Mail"
3. Use this app password (not your regular password) in `ZOHO_PASSWORD`
4. Ensure SMTP is enabled in your Zoho Mail settings

### 4. Run the Application
Start both frontend and backend servers:

```bash
# Option 1: Run both servers simultaneously
npm run dev:full

# Option 2: Run servers separately
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run dev:server
```

### 5. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health
- **Contact Form**: Navigate to the Contact section on the website

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about FlexiRyde",
  "message": "I'm interested in your premium transportation services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you within 24 hours."
}
```

### GET /api/health
Check server health status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Email Templates

### Customer Inquiry Email (to FlexiRyde team)
- Professional HTML template with FlexiRyde branding
- Includes all form data in structured format
- Timestamp with Lagos timezone
- Reply-to set to customer's email

### Auto-Reply Email (to customer)
- Branded thank you message
- Contact information for immediate assistance
- Professional tone with luxury feel
- Confirmation of 24-hour response time

## Security Features

### Rate Limiting
- 5 submissions per 15 minutes per IP address
- Prevents spam and abuse

### Input Validation
- Required field validation
- Email format validation
- Message length limits (10-1000 characters)
- HTML tag sanitization

### Spam Prevention
- Honeypot field for bot detection
- Server-side validation
- CORS protection

## Form Validation Rules

| Field | Requirements |
|-------|-------------|
| Full Name | Required, minimum 2 characters |
| Email | Required, valid email format |
| Subject | Required, minimum 5 characters |
| Message | Required, 10-1000 characters |

## Troubleshooting

### Common Issues

**1. SMTP Connection Failed**
- Verify Zoho credentials in `.env`
- Ensure you're using an app-specific password
- Check if SMTP is enabled in Zoho Mail settings

**2. CORS Errors**
- Verify `FRONTEND_URL` in `.env` matches your frontend URL
- Ensure both servers are running

**3. Rate Limit Exceeded**
- Wait 15 minutes before submitting again
- Check if multiple users are testing from the same IP

**4. Email Not Received**
- Check spam/junk folders
- Verify email address is correct
- Check server logs for errors

### Server Logs
Monitor the backend server console for detailed error messages and debugging information.

## Production Deployment

### Environment Variables for Production
```env
ZOHO_EMAIL=info@flexiryde.com
ZOHO_PASSWORD=your_production_app_password
FRONTEND_URL=https://your-domain.com
PORT=3001
NODE_ENV=production
```

### Security Considerations
- Use strong app-specific passwords
- Enable two-factor authentication on Zoho account
- Regularly rotate passwords
- Monitor server logs for suspicious activity
- Consider implementing additional rate limiting for production

## Support
For technical support or questions about the contact system, please refer to the FlexiRyde development team.

---

**FlexiRyde Contact System v1.0**  
*Luxury Transportation Made Simple*
