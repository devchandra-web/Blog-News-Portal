import React from 'react';
import WordPressContent from '../blog/WordPressContent';

const SafeHtmlContent = ({ html, className = 'post-content' }) => {
  return <WordPressContent content={html} className={className} />;
};

export default SafeHtmlContent;
