/**
 * Centralized API Configuration for WordPress REST API
 */

export const WORDPRESS_API_URL = 
  import.meta.env.VITE_WORDPRESS_API_URL || 'https://techcrunch.com/wp-json/wp/v2';

export const USE_MOCK_API = 
  import.meta.env.VITE_USE_MOCK_API !== undefined 
    ? import.meta.env.VITE_USE_MOCK_API === 'true'
    : true; // Default to true so app works out of the box with realistic mock layer

export const API_TIMEOUT = 12000;

export const DEFAULT_PER_PAGE = 9;

// Fallback images when a post does not have a featured image in WP
export const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
];
