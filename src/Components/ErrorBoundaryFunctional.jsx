// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback component to show when an error is caught
function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

// Component that fetches data and handles API errors
function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for tracking errors

  useEffect(() => {
    async function fetchData() {
      try {
        // Intentionally use an incorrect endpoint to trigger an error
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/999');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        // console.error('Caught error:', err);
        setError(err); // Set the error state
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // If an error is caught, throw it here so the ErrorBoundary can catch it
  if (error) {
    throw error;
  }

  return (
    <div>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

// Main App component that wraps DataFetchingComponent in an ErrorBoundary
function ErrorBoundaryFunctional() {
  return (
    <div>
      <h1>React Error Boundary Example</h1>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onReset={() => {
          // Optionally handle reset logic (e.g., retry fetching)
          window.location.reload(); // Reload the page as a simple example
        }}
      >
        <DataFetchingComponent />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryFunctional;



/*
The error shown in the console (TypeError: Failed to fetch) indicates that the fetch call failed due to a network error or the endpoint being unreachable. However, the error is not being caught in a way that the ErrorBoundary can handle.

Understanding Why the ErrorBoundary Is Not Triggered:
The ErrorBoundary component only catches errors during rendering, lifecycle methods, and constructor calls of the components it wraps.
Errors occurring in asynchronous code (such as fetch) inside useEffect are not automatically caught by the ErrorBoundary because they happen outside the synchronous React rendering flow.
Solution: Ensure Errors from fetch Are Propagated Properly
You need to make sure that the error thrown by fetch is surfaced up to the component's rendering logic so that the ErrorBoundary can catch it. Here's how to modify the code:

Introduce an error state in DataFetchingComponent that can be set when fetch fails.
Throw the error in the rendering logic if the error state is set.

Explanation of the Changes:
error State: Introduced a state variable error to store any error that occurs during the fetch.
Conditional throw: If error is set, throw error; is placed within the render logic to make sure the ErrorBoundary can catch it.
Catching Network Errors: This ensures that if fetch fails (e.g., network error or unreachable endpoint), the ErrorBoundary displays the fallback UI.
Expected Behavior:
When the fetch call fails due to an invalid endpoint or network issue, setError(err) sets the error state.
On the next render, throw error; triggers the ErrorBoundary, displaying the FallbackComponent.
Try running this code, and it should show the fallback UI when the API call fails.
*/