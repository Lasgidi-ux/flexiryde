import { useEffect, useState, useRef, RefObject } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Hook to detect when an element is in viewport
 * @param threshold - Percentage of element visible to trigger (0-1)
 * @param triggerOnce - Whether to trigger only once
 */
export function useElementInView(threshold = 0.1, triggerOnce = true) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}

/**
 * Hook to track mouse position
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

/**
 * Hook to create parallax effect based on scroll position
 * @param speed - Speed of parallax effect (positive values move down, negative move up)
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = elementTop - windowHeight / 2;
      
      // Apply parallax effect
      setOffset(distanceFromCenter * speed * -0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * Hook to create magnetic effect on elements
 * @param intensity - Intensity of magnetic effect (0-1)
 * @param resetSpeed - Speed at which element returns to original position (0-1)
 */
export function useMagneticEffect(intensity = 0.5, resetSpeed = 0.2) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to center of element
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Apply magnetic effect based on intensity
    setPosition({ 
      x: distanceX * intensity, 
      y: distanceY * intensity 
    });
  };

  const handleMouseLeave = () => {
    // Reset position with animation
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: `transform ${resetSpeed}s cubic-bezier(0.23, 1, 0.32, 1)`,
  };

  return { elementRef, style };
}

/**
 * Hook to create scroll-triggered animations
 * @param threshold - Percentage of element visible to trigger (0-1)
 */
export function useScrollAnimation(threshold = 0.1) {
  const { ref, inView } = useElementInView(threshold);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return { ref, hasAnimated };
}

/**
 * Hook to track scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY: scrollPosition };
}