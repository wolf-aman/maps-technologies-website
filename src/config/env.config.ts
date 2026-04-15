/**
 * Environment Configuration Module
 * 
 * Validates and manages all environment variables for production deployment.
 * Ensures all required variables are set and provides fallbacks where applicable.
 * 
 * Usage:
 *   import { env } from '@/config/env.config';
 *   const apiKey = env.RESEND_API_KEY;
 */

/**
 * Validates that a required environment variable exists and is not empty
 * @throws {Error} If variable is missing or empty
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  
  if (!value || value.trim() === '') {
    throw new Error(
      `Missing required environment variable: ${name}\n` +
      `Please set ${name} in your .env.local or .env file.\n` +
      `Refer to .env.example for all required variables.`
    );
  }
  
  return value;
}

/**
 * Gets an optional environment variable with a fallback value
 */
function optionalEnv(name: string, fallback: string = ''): string {
  return process.env[name] || fallback;
}

/**
 * Environment variables with validation
 * All REQUIRED variables should be validated at module load time
 */
export const env = {
  // Node environment
  NODE_ENV: optionalEnv('NODE_ENV', 'development'),
  
  // Email Service (Required for production)
  get RESEND_API_KEY(): string {
    if (process.env.NODE_ENV === 'production') {
      return requireEnv('RESEND_API_KEY');
    }
    return optionalEnv('RESEND_API_KEY', '');
  },
  
  get RESEND_FROM_EMAIL(): string {
    if (process.env.NODE_ENV === 'production') {
      return requireEnv('RESEND_FROM_EMAIL');
    }
    return optionalEnv('RESEND_FROM_EMAIL', 'noreply@mapstech.co.in');
  },
  
  // Contact Emails
  get CONTACT_EMAIL(): string {
    return optionalEnv('NEXT_PUBLIC_CONTACT_EMAIL', 'info@mapstech.co.in');
  },
  
  get SUPPORT_EMAIL(): string {
    return optionalEnv('NEXT_PUBLIC_SUPPORT_EMAIL', 'support@mapstech.co.in');
  },
  
  // Analytics (Optional)
  ANALYTICS_ID: optionalEnv('NEXT_PUBLIC_ANALYTICS_ID', ''),
  
  /**
   * Validates all production-required environment variables
   * Call this on application startup in production
   */
  validateProduction(): void {
    if (process.env.NODE_ENV !== 'production') return;
    
    const required = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL'];
    const missing: string[] = [];
    
    required.forEach((varName) => {
      if (!process.env[varName] || process.env[varName]?.trim() === '') {
        missing.push(varName);
      }
    });
    
    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables for production: ${missing.join(', ')}\n` +
        `Please set these variables before deploying.`
      );
    }
  },
};

// Validate production environment on module import (for API routes)
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
  try {
    env.validateProduction();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Environment validation failed:', error.message);
    }
  }
}
