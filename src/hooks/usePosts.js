import { useState, useEffect, useCallback } from 'react';
import { getPosts } from '../services/wordpressApi';

export const usePosts = (initialPage = 1, perPage = 9) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async (currentPage = page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPosts(currentPage, perPage);
      setPosts(data.posts || []);
      setTotalPosts(data.totalPosts || 0);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error('Failed to load posts:', err);
      setError('Unable to load articles. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  }, [page, perPage]);

  useEffect(() => {
    fetchPosts(page);
  }, [page, fetchPosts]);

  return {
    posts,
    page,
    setPage,
    totalPosts,
    totalPages,
    loading,
    error,
    refetch: () => fetchPosts(page)
  };
};
