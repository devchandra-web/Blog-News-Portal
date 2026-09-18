import { useState, useEffect } from 'react';
import { getCategories } from '../services/wordpressApi';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCats = async () => {
      setLoading(true);
      try {
        const data = await getCategories();
        if (isMounted) {
          setCategories(data || []);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load categories');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCats();
    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, loading, error };
};
