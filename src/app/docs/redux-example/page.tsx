'use client';

import React from 'react';
import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { useLoader } from '@/src/core/hooks/useLoader';
import { useLoaderActions } from '@/src/core/hooks/useLoaderActions';

/**
 * Example component demonstrating Redux store usage
 * This shows how to use the production-ready Redux store
 */
export default function ReduxExamplePage() {
  const { isLoading, message, loadingProgress } = useLoader();
  const { showLoader, hideLoader, updateProgress, updateMessage } = useLoaderActions();

  const handleSimpleLoader = () => {
    showLoader();
    setTimeout(() => hideLoader(), 2000);
  };

  const handleLoaderWithMessage = () => {
    showLoader({ message: 'Processing your request...' });
    setTimeout(() => hideLoader(), 3000);
  };

  const handleProgressLoader = async () => {
    showLoader({ message: 'Starting process...', progress: 0 });

    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      updateProgress(i);

      if (i === 30) updateMessage('Validating data...');
      if (i === 60) updateMessage('Processing...');
      if (i === 90) updateMessage('Finalizing...');
    }

    hideLoader();
  };

  const simulateAsyncOperation = async () => {
    try {
      showLoader({ message: 'Fetching data from server...' });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      hideLoader();
      console.log('Operation completed successfully!');
    } catch (error) {
      hideLoader();
      console.error('Operation failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <h1 className="text-2xl font-bold">Redux Store Production Example</h1>
        </CardHeader>
        <CardBody>
          <p className="text-default-600 mb-4">
            This page demonstrates the production-ready Redux store implementation with global loader management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              color="primary"
              onClick={handleSimpleLoader}
              disabled={isLoading}
            >
              Simple Loader (2s)
            </Button>

            <Button
              color="secondary"
              onClick={handleLoaderWithMessage}
              disabled={isLoading}
            >
              Loader with Message (3s)
            </Button>

            <Button
              color="success"
              onClick={handleProgressLoader}
              disabled={isLoading}
            >
              Progress Loader
            </Button>

            <Button
              color="warning"
              onClick={simulateAsyncOperation}
              disabled={isLoading}
            >
              Simulate API Call
            </Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Current Loader State</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-2">
            <div>
              <strong>Is Loading:</strong>
              <span className={`ml-2 px-2 py-1 rounded text-sm ${
                isLoading ? 'bg-danger-100 text-danger-800' : 'bg-success-100 text-success-800'
              }`}>
                {isLoading ? 'True' : 'False'}
              </span>
            </div>

            {message && (
              <div>
                <strong>Message:</strong>
                <span className="ml-2 text-default-600">{message}</span>
              </div>
            )}

            {typeof loadingProgress === 'number' && (
              <div>
                <strong>Progress:</strong>
                <span className="ml-2 text-default-600">{loadingProgress}%</span>
              </div>
            )}
          </div>
        </CardBody>
      </Card>

      <Divider className="my-6" />

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Production Features</h2>
        </CardHeader>
        <CardBody>
          <ul className="list-disc list-inside space-y-2 text-default-600">
            <li>✅ Redux DevTools automatically disabled in production</li>
            <li>✅ Error handling middleware for catching Redux errors</li>
            <li>✅ Performance monitoring for slow actions</li>
            <li>✅ Type-safe hooks (useAppSelector, useAppDispatch)</li>
            <li>✅ Global loader with progress and message support</li>
            <li>✅ Proper provider integration in the app</li>
            <li>✅ Production-optimized middleware configuration</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
