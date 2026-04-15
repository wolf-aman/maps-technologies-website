'use client';

import React, { ReactNode, ReactElement } from 'react';
import { logger } from '@/lib/logger';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactElement;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

/**
 * Error Boundary Component
 * 
 * Catches errors in child components and displays a fallback UI.
 * Useful for catching rendering errors and preventing full app crashes.
 * 
 * Usage:
 *   <ErrorBoundary>
 *     <SomeComponent />
 *   </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
    logger.error('Error caught by boundary', error, {
      componentStack: errorInfo.componentStack,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 border border-red-200">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-red-600">Oops! Something went wrong</h1>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 mb-2">
                  We encountered an error while rendering this page. Please try refreshing or contact support.
                </p>
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-4 p-3 bg-gray-100 rounded text-sm border border-gray-300">
                    <summary className="cursor-pointer font-semibold text-gray-700">
                      Error Details (Dev Only)
                    </summary>
                    <pre className="mt-2 text-xs overflow-auto bg-white p-2 rounded border border-gray-200">
                      {this.state.error.message}
                      {'\n\n'}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </details>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                >
                  Refresh Page
                </button>
                <button
                  onClick={() => (window.location.href = '/')}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
