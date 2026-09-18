import { stripHtml } from './stripHtml';

/**
 * Calculates estimated reading time for an article based on word count.
 * Average reading speed is ~200 words per minute.
 * 
 * @param {string} htmlContent - Raw HTML or text content
 * @returns {string} Estimated reading time string (e.g. "4 min read")
 */
export const calculateReadingTime = (htmlContent) => {
  if (!htmlContent) return '1 min read';
  
  const text = stripHtml(htmlContent, 0); // Strip all HTML without truncating
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  
  return `${minutes} min read`;
};
