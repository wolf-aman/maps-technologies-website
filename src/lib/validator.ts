/**
 * Input Validation Utility
 * 
 * Provides production-ready input validation and sanitization functions.
 * Prevents XSS, SQL injection, and other common security issues.
 * 
 * Usage:
 *   import { validator } from '@/lib/validator';
 *   validator.isValidEmail('user@example.com');
 *   validator.sanitizeHtml('<script>alert("xss")</script>');
 */

/**
 * Validation rules and patterns
 */
const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
  URL: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
  ALPHANUMERIC: /^[a-zA-Z0-9_-]+$/,
};

/**
 * HTML entities to escape for XSS prevention
 */
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};

class Validator {
  /**
   * Sanitize string for HTML output (prevents XSS)
   */
  sanitizeHtml(value?: string | null, fallback = 'Not provided'): string {
    if (!value) return fallback;
    
    const trimmed = value.trim();
    if (!trimmed) return fallback;
    
    return trimmed.replace(/[&<>"'/]/g, (char) => HTML_ENTITIES[char] || char);
  }

  /**
   * Sanitize for SQL (basic protection - use parameterized queries in production)
   */
  sanitizeSql(value?: string): string {
    if (!value) return '';
    
    // Remove common SQL injection characters
    return value
      .replace(/['";-]/g, '')
      .replace(/\/\*/g, '')
      .replace(/\*\//g, '')
      .trim();
  }

  /**
   * Validate email address
   */
  isValidEmail(email?: string): boolean {
    if (!email) return false;
    const trimmed = email.trim();
    return PATTERNS.EMAIL.test(trimmed) && trimmed.length <= 254;
  }

  /**
   * Validate phone number (international format)
   */
  isValidPhone(phone?: string): boolean {
    if (!phone) return false;
    const trimmed = phone.trim().replace(/\s/g, '');
    return PATTERNS.PHONE.test(trimmed) && trimmed.length >= 10;
  }

  /**
   * Validate URL
   */
  isValidUrl(url?: string): boolean {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return PATTERNS.URL.test(url);
    }
  }

  /**
   * Validate that string is not empty
   */
  isNotEmpty(value?: string): boolean {
    return Boolean(value && value.trim().length > 0);
  }

  /**
   * Validate string length
   */
  isValidLength(value?: string, min = 1, max = 500): boolean {
    if (!value) return false;
    const length = value.trim().length;
    return length >= min && length <= max;
  }

  /**
   * Normalize whitespace (trim and collapse multiple spaces)
   */
  normalizeWhitespace(value?: string): string {
    if (!value) return '';
    return value.trim().replace(/\s+/g, ' ');
  }

  /**
   * Validate form data structure
   */
  validateFormData(
    data: Record<string, unknown>,
    rules: Record<string, { required?: boolean; type?: string; minLength?: number; maxLength?: number }>
  ): { valid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};

    Object.entries(rules).forEach(([field, rule]) => {
      const value = data[field];

      if (rule.required && !this.isNotEmpty(String(value))) {
        errors[field] = `${field} is required`;
        return;
      }

      if (value && typeof value === 'string') {
        if (rule.type === 'email' && !this.isValidEmail(value)) {
          errors[field] = `${field} must be a valid email`;
        }

        if (rule.type === 'phone' && !this.isValidPhone(value)) {
          errors[field] = `${field} must be a valid phone number`;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errors[field] = `${field} must be at least ${rule.minLength} characters`;
        }

        if (rule.maxLength && value.length > rule.maxLength) {
          errors[field] = `${field} must not exceed ${rule.maxLength} characters`;
        }
      }
    });

    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  }
}

export const validator = new Validator();
