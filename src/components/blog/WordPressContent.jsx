import React from 'react';
import DOMPurify from 'dompurify';

/**
 * Renders HTML post content from WordPress (content.rendered) securely using DOMPurify
 */
const WordPressContent = ({ content, className = 'post-content' }) => {
  if (!content) return null;

  // Configure DOMPurify options to safely render rich WordPress Gutenberg block HTML
  const sanitizedHtml = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe', 'figure', 'figcaption', 'code', 'pre'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'rel', 'class', 'srcset', 'sizes'],
  });

  return (
    <div
      className={`${className} leading-relaxed text-dark`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default WordPressContent;
