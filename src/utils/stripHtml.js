/**
 * Strips HTML tags from text string and decodes HTML entities
 */
export const stripHtml = (html, maxLength = 160) => {
  if (!html) return '';
  
  // Create temp DOM element to strip tags and decode entities
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  let text = tmp.textContent || tmp.innerText || '';
  
  // Clean up extra whitespace and newlines
  text = text.replace(/\s+/g, ' ').trim();
  
  if (maxLength && text.length > maxLength) {
    return text.substring(0, maxLength).trim() + '...';
  }
  return text;
};
