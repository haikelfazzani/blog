import { useState, useEffect } from 'preact/hooks'

const useFetch = (url: string, options?: Record<string, unknown>) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        const json = await res.json();
        console.log(json);
        
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        if (controller.signal.aborted) {
          console.log('The user aborted the request');
        } else {
          console.error('The request failed');
        }

        setError(error);
      }
    })();

    return () => {
      controller.abort();
    }
  }, [url]);
  return { response, error, isLoading };
};

export default useFetch