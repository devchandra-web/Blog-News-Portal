import { useState, useEffect } from 'react';
import { getTags } from '../services/wordpressApi';

export const useTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTagList = async () => {
      setLoading(true);
      try {
        const data = await getTags();
        if (isMounted) setTags(data || []);
      } catch (err) {
        if (isMounted) setError('Failed to fetch tags list');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTagList();
    return () => {
      isMounted = false;
    };
  }, []);

  return { tags, loading, error };
};
