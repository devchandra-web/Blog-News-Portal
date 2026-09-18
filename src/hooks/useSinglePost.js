import { useState, useEffect } from 'react';
import { getPostBySlug, getRelatedPosts } from '../services/wordpressApi';

export const useSinglePost = (slug) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    const fetchPostData = async () => {
      setLoading(true);
      setError(null);
      try {
        const postData = await getPostBySlug(slug);
        if (!isMounted) return;

        if (!postData) {
          setError('Article not found.');
          setPost(null);
          setLoading(false);
          return;
        }

        setPost(postData);

        // Fetch related posts using category id if available
        const catId = postData.categories && postData.categories.length > 0 ? postData.categories[0] : null;
        const related = await getRelatedPosts(catId, postData.id, 3);
        if (isMounted) {
          setRelatedPosts(related || []);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching post details:', err);
          setError('Failed to fetch article details. Please try again.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPostData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { post, relatedPosts, loading, error };
};
