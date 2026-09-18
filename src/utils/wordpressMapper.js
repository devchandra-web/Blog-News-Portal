import { formatDate } from './formatDate';
import { stripHtml } from './stripHtml';
import { calculateReadingTime } from './calculateReadingTime';
import { FALLBACK_IMAGES } from '../config/api';

/**
 * Extracts normalized featured image URLs from raw WordPress post object
 */
export const getFeaturedImage = (post) => {
  const fallback = {
    thumbnail: FALLBACK_IMAGES[0],
    medium: FALLBACK_IMAGES[0],
    large: FALLBACK_IMAGES[0],
    full: FALLBACK_IMAGES[0],
    altText: 'Article featured image'
  };

  if (!post) return fallback;

  // Embedded media check
  if (
    post._embedded &&
    post._embedded['wp:featuredmedia'] &&
    post._embedded['wp:featuredmedia'][0]
  ) {
    const media = post._embedded['wp:featuredmedia'][0];
    const altText = media.alt_text || media.title?.rendered || 'Featured image';
    const sizes = media.media_details?.sizes || {};

    const fullUrl = media.source_url || FALLBACK_IMAGES[0];
    const largeUrl = sizes.large?.source_url || sizes.full?.source_url || fullUrl;
    const mediumUrl = sizes.medium?.source_url || sizes.medium_large?.source_url || largeUrl;
    const thumbUrl = sizes.thumbnail?.source_url || mediumUrl;

    return {
      thumbnail: thumbUrl,
      medium: mediumUrl,
      large: largeUrl,
      full: fullUrl,
      altText
    };
  }

  // Fallback to deterministic image from list
  const idx = (post.id || 0) % FALLBACK_IMAGES.length;
  const imgUrl = FALLBACK_IMAGES[idx];
  return {
    thumbnail: imgUrl,
    medium: imgUrl,
    large: imgUrl,
    full: imgUrl,
    altText: post.title?.rendered || 'Featured image'
  };
};

/**
 * Extracts normalized Author details from raw WordPress post object
 */
export const getAuthor = (post) => {
  const defaultAuthor = {
    id: 1,
    name: 'Editorial Team',
    slug: 'editorial-team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    description: 'Senior editors and technical staff covering web development and tech news.'
  };

  if (
    post &&
    post._embedded &&
    post._embedded.author &&
    post._embedded.author[0]
  ) {
    const auth = post._embedded.author[0];
    const avatars = auth.avatar_urls || {};
    return {
      id: auth.id || 1,
      name: auth.name || 'Editorial Team',
      slug: auth.slug || 'editorial-team',
      avatar: avatars['96'] || avatars['48'] || avatars['24'] || defaultAuthor.avatar,
      description: auth.description || defaultAuthor.description
    };
  }

  return defaultAuthor;
};

/**
 * Extracts normalized Categories array from raw WordPress post object
 */
export const getCategories = (post) => {
  if (
    post &&
    post._embedded &&
    post._embedded['wp:term'] &&
    post._embedded['wp:term'][0] &&
    post._embedded['wp:term'][0].length > 0
  ) {
    return post._embedded['wp:term'][0].map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug
    }));
  }
  return [{ id: 1, name: 'Technology', slug: 'technology' }];
};

/**
 * Extracts normalized Tags array from raw WordPress post object
 */
export const getTags = (post) => {
  if (
    post &&
    post._embedded &&
    post._embedded['wp:term'] &&
    post._embedded['wp:term'][1] &&
    post._embedded['wp:term'][1].length > 0
  ) {
    return post._embedded['wp:term'][1].map((tag) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug
    }));
  }
  return [];
};

/**
 * Normalizes a raw WordPress category object into frontend model
 */
export const mapCategory = (cat) => {
  if (!cat) return null;
  return {
    id: cat.id,
    name: cat.name || 'Uncategorized',
    slug: cat.slug || '',
    description: cat.description || '',
    count: cat.count !== undefined ? cat.count : 0,
    link: cat.link || ''
  };
};

/**
 * Normalizes a raw WordPress author object into frontend model
 */
export const mapAuthor = (auth) => {
  if (!auth) return null;
  const avatars = auth.avatar_urls || {};
  return {
    id: auth.id,
    name: auth.name || 'Unknown Author',
    slug: auth.slug || '',
    description: auth.description || '',
    avatar: avatars['96'] || avatars['48'] || avatars['24'] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    link: auth.link || ''
  };
};

/**
 * Normalizes a raw WordPress media object into frontend model
 */
export const mapMedia = (media) => {
  if (!media) return null;
  const sizes = media.media_details?.sizes || {};
  return {
    id: media.id,
    sourceUrl: media.source_url,
    medium: sizes.medium?.source_url || media.source_url,
    large: sizes.large?.source_url || media.source_url,
    altText: media.alt_text || media.title?.rendered || ''
  };
};

/**
 * Transforms a raw WordPress post object into a simplified frontend model for React UI
 */
export const mapPost = (post) => {
  if (!post) return null;

  // Handle already mapped or simplified objects safely
  if (post.__normalized) return post;

  const titleStr = typeof post.title === 'string' ? post.title : (post.title?.rendered || 'Untitled Article');
  const contentStr = typeof post.content === 'string' ? post.content : (post.content?.rendered || '');
  const excerptStr = typeof post.excerpt === 'string' ? post.excerpt : (post.excerpt?.rendered || stripHtml(contentStr, 140));

  return {
    __normalized: true,
    id: post.id,
    date: post.date,
    formattedDate: formatDate(post.date),
    slug: post.slug,
    status: post.status || 'publish',
    type: post.type || 'post',
    link: post.link || '',
    title: titleStr,
    content: contentStr,
    excerpt: stripHtml(excerptStr, 150),
    rawExcerpt: excerptStr,
    readingTime: calculateReadingTime(contentStr),
    author: getAuthor(post),
    featuredImage: getFeaturedImage(post),
    categories: getCategories(post),
    tags: getTags(post),
    raw: post
  };
};
