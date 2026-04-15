/**
 * Structured Logging Utility
 * 
 * Provides consistent, production-ready logging across the application.
 * Supports different log levels with appropriate formatting and timestamps.
 * 
 * Usage:
 *   import { logger } from '@/lib/logger';
 *   logger.info('User logged in', { userId: 123 });
 *   logger.error('Database connection failed', { error: err });
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  error?: Error;
}

/**
 * Logger utility for structured logging
 */
class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  /**
   * Format log entry for console output
   */
  private formatLog(entry: LogEntry): string {
    const prefix = `[${entry.timestamp}] [${entry.level.toUpperCase()}]`;
    const message = `${prefix} ${entry.message}`;
    
    if (entry.context) {
      return `${message} ${JSON.stringify(entry.context)}`;
    }
    
    return message;
  }

  /**
   * Get current ISO timestamp
   */
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  /**
   * Send log to appropriate output
   */
  private output(entry: LogEntry): void {
    const formatted = this.formatLog(entry);

    // In production, you might send logs to an external service
    // For now, use console with appropriate level
    switch (entry.level) {
      case 'debug':
        if (this.isDevelopment) console.debug(formatted);
        break;
      case 'info':
        console.log(formatted);
        break;
      case 'warn':
        console.warn(formatted);
        break;
      case 'error':
        console.error(formatted);
        if (entry.error) {
          console.error(entry.error);
        }
        break;
    }
  }

  /**
   * Log debug message (only in development)
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.output({
      timestamp: this.getTimestamp(),
      level: 'debug',
      message,
      context,
    });
  }

  /**
   * Log info message
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.output({
      timestamp: this.getTimestamp(),
      level: 'info',
      message,
      context,
    });
  }

  /**
   * Log warning message
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.output({
      timestamp: this.getTimestamp(),
      level: 'warn',
      message,
      context,
    });
  }

  /**
   * Log error message
   */
  error(message: string, error?: Error | unknown, context?: Record<string, unknown>): void {
    const err = error instanceof Error ? error : new Error(String(error));
    
    this.output({
      timestamp: this.getTimestamp(),
      level: 'error',
      message,
      context: {
        ...context,
        errorMessage: err.message,
        errorStack: this.isDevelopment ? err.stack : undefined,
      },
      error: err,
    });
  }

  /**
   * Log API call
   */
  logApiCall(method: string, url: string, status?: number, duration?: number): void {
    const context: Record<string, unknown> = { method, url };
    if (status) context.status = status;
    if (duration) context.durationMs = duration;
    
    const level = status && status >= 400 ? 'warn' : 'info';
    this.output({
      timestamp: this.getTimestamp(),
      level,
      message: `API call ${method} ${url}`,
      context,
    });
  }
}

// Export singleton instance
export const logger = new Logger();
