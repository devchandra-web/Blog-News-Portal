import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce rapid value updates (e.g. search inputs)
 * Delay default: 350ms
 */
export const useDebounce = (value, delay = 350) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
