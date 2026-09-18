import axios from 'axios';
import { WORDPRESS_API_URL, API_TIMEOUT, USE_MOCK_API } from '../config/api';
import { MOCK_POSTS } from '../mocks/posts';
import { MOCK_CATEGORIES } from '../mocks/categories';
import { MOCK_TAGS } from '../mocks/tags';
import { MOCK_AUTHORS } from '../mocks/authors';
import { mapPost, mapCategory, mapAuthor } from '../utils/wordpressMapper';

// Create Axios Instance for live WordPress REST API
const apiClient = axios.create({
  baseURL: WORDPRESS_API_URL,
  timeout: API_TIMEOUT
});

/**
 * Extracts total posts and total pages from WordPress HTTP response headers
 * Headers: X-WP-Total & X-WP-TotalPages
 */
const getHeaderPaginationMeta = (headers) => {
  if (!headers) return { total: 0, totalPages: 1 };
  const total = headers['x-wp-total'] || headers['X-WP-Total'] || null;
  const totalPages = headers['x-wp-totalpages'] || headers['X-WP-TotalPages'] || null;
  return {
    total: total !== null ? parseInt(total, 10) : 0,
    totalPages: totalPages !== null ? parseInt(totalPages, 10) : 1
  };
};

/**
 * Helper to process mock filtering & pagination
 */
const getMockPostsFiltered = ({
  page = 1,
  perPage = 9,
  categoryId = null,
  tagId = null,
  search = '',
  status = 'publish'
}) => {
  let filtered = MOCK_POSTS.filter((p) => p.status === status);

  if (categoryId) {
    const cid = parseInt(categoryId, 10);
    filtered = filtered.filter((p) => p.categories && p.categories.includes(cid));
  }

  if (tagId) {
    const tid = parseInt(tagId, 10);
    filtered = filtered.filter((p) => p.tags && p.tags.includes(tid));
  }

  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter((p) => {
      const title = p.title?.rendered ? p.title.rendered.toLowerCase() : '';
      const excerpt = p.excerpt?.rendered ? p.excerpt.rendered.toLowerCase() : '';
      const content = p.content?.rendered ? p.content.rendered.toLowerCase() : '';
      return title.includes(q) || excerpt.includes(q) || content.includes(q);
    });
  }

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const paginatedRaw = filtered.slice(start, start + perPage);

  return {
    posts: paginatedRaw.map(mapPost),
    totalPosts: total,
    totalPages,
    currentPage: page
  };
};

/**
 * Fetch posts with query parameters (supports pagination, category filter, tag filter, search query)
 */
export const getPosts = async (pageOrOptions = 1, perPage = 9, options = {}) => {
  let params = {
    page: 1,
    perPage: 9,
    categoryId: null,
    tagId: null,
    search: '',
    status: 'publish',
    order: 'desc'
  };

  if (typeof pageOrOptions === 'object' && pageOrOptions !== null) {
    params = { ...params, ...pageOrOptions };
  } else {
    params.page = pageOrOptions;
    params.perPage = perPage;
    params = { ...params, ...options };
  }

  if (USE_MOCK_API) {
    return getMockPostsFiltered(params);
  }

  try {
    const queryParams = {
      _embed: 1,
      page: params.page,
      per_page: params.perPage,
      status: params.status,
      order: params.order
    };

    if (params.categoryId) queryParams.categories = params.categoryId;
    if (params.tagId) queryParams.tags = params.tagId;
    if (params.search) queryParams.search = params.search;

    const response = await apiClient.get('/posts', { params: queryParams });
    const meta = getHeaderPaginationMeta(response.headers);
    const normalizedPosts = (response.data || []).map(mapPost);

    return {
      posts: normalizedPosts,
      totalPosts: meta.total || normalizedPosts.length,
      totalPages: meta.totalPages || 1,
      currentPage: params.page
    };
  } catch (error) {
    console.warn('WordPress Live API call failed or unavailable. Falling back to Mock API:', error.message);
    return getMockPostsFiltered(params);
  }
};

/**
 * Fetch a single post by slug
 */
export const getPostBySlug = async (slug) => {
  if (!slug) return null;

  if (USE_MOCK_API) {
    const match = MOCK_POSTS.find((p) => p.slug === slug);
    return match ? mapPost(match) : null;
  }

  try {
    const response = await apiClient.get('/posts', {
      params: {
        _embed: 1,
        slug
      }
    });

    if (response.data && response.data.length > 0) {
      return mapPost(response.data[0]);
    }

    const mockMatch = MOCK_POSTS.find((p) => p.slug === slug);
    return mockMatch ? mapPost(mockMatch) : null;
  } catch (error) {
    console.warn(`Error fetching post by slug (${slug}):`, error.message);
    const mockMatch = MOCK_POSTS.find((p) => p.slug === slug);
    return mockMatch ? mapPost(mockMatch) : null;
  }
};

/**
 * Fetch all categories
 */
export const getCategories = async () => {
  if (USE_MOCK_API) {
    return MOCK_CATEGORIES.map(mapCategory);
  }

  try {
    const response = await apiClient.get('/categories', {
      params: {
        per_page: 50,
        hide_empty: false
      }
    });
    return (response.data || []).map(mapCategory);
  } catch (error) {
    console.warn('Error fetching categories from Live API, serving mocks:', error.message);
    return MOCK_CATEGORIES.map(mapCategory);
  }
};

/**
 * Fetch a single category by slug
 */
export const getCategoryBySlug = async (slug) => {
  if (!slug) return null;

  if (USE_MOCK_API) {
    const match = MOCK_CATEGORIES.find((c) => c.slug === slug);
    return match ? mapCategory(match) : null;
  }

  try {
    const response = await apiClient.get('/categories', {
      params: { slug }
    });

    if (response.data && response.data.length > 0) {
      return mapCategory(response.data[0]);
    }

    const mockMatch = MOCK_CATEGORIES.find((c) => c.slug === slug);
    return mockMatch ? mapCategory(mockMatch) : null;
  } catch (error) {
    const mockMatch = MOCK_CATEGORIES.find((c) => c.slug === slug);
    return mockMatch ? mapCategory(mockMatch) : null;
  }
};

/**
 * Fetch posts for a specific category ID
 */
export const getCategoryPosts = async (categoryId, page = 1, perPage = 9) => {
  return getPosts({
    page,
    perPage,
    categoryId
  });
};

/**
 * Fetch all tags
 */
export const getTags = async () => {
  if (USE_MOCK_API) {
    return MOCK_TAGS;
  }

  try {
    const response = await apiClient.get('/tags', {
      params: { per_page: 50 }
    });
    return response.data || [];
  } catch (error) {
    return MOCK_TAGS;
  }
};

/**
 * Fetch single tag by slug
 */
export const getTagBySlug = async (slug) => {
  if (!slug) return null;

  if (USE_MOCK_API) {
    return MOCK_TAGS.find((t) => t.slug === slug) || null;
  }

  try {
    const response = await apiClient.get('/tags', { params: { slug } });
    if (response.data && response.data.length > 0) {
      return response.data[0];
    }
    return MOCK_TAGS.find((t) => t.slug === slug) || null;
  } catch (error) {
    return MOCK_TAGS.find((t) => t.slug === slug) || null;
  }
};

/**
 * Fetch posts for a specific tag ID
 */
export const getPostsByTag = async (tagId, page = 1, perPage = 9) => {
  return getPosts({
    page,
    perPage,
    tagId
  });
};

/**
 * Search posts by query string
 */
export const searchPosts = async (query, page = 1, perPage = 9) => {
  return getPosts({
    page,
    perPage,
    search: query
  });
};

/**
 * Fetch related posts based on current post's category excluding current post ID
 */
export const getRelatedPosts = async (categoryId, currentPostId, limit = 3) => {
  if (USE_MOCK_API) {
    let filtered = MOCK_POSTS.filter((p) => p.id !== currentPostId);
    if (categoryId) {
      const cid = parseInt(categoryId, 10);
      const catMatches = filtered.filter((p) => p.categories && p.categories.includes(cid));
      if (catMatches.length >= limit) {
        filtered = catMatches;
      }
    }
    return filtered.slice(0, limit).map(mapPost);
  }

  try {
    const params = {
      _embed: 1,
      per_page: limit
    };
    if (categoryId) params.categories = categoryId;
    if (currentPostId) params.exclude = currentPostId;

    const response = await apiClient.get('/posts', { params });
    return (response.data || []).map(mapPost);
  } catch (error) {
    const fallback = MOCK_POSTS.filter((p) => p.id !== currentPostId).slice(0, limit);
    return fallback.map(mapPost);
  }
};
