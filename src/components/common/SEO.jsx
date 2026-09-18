import React, { useEffect } from 'react';

/**
 * Reusable SEO Component
 * Dynamically updates document title, meta tags, canonical link,
 * Open Graph, Twitter card tags, and Schema.org JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  publishedDate,
  authorName,
  schemaData
}) => {
  const siteTitle = 'TechPortal';
  const defaultDescription = 'Learn technology, web development, React, JavaScript, and programming insights with TechPortal.';
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  const pageTitle = title ? `${title}` : `${siteTitle} — Technology, Web Development & Programming`;
  const metaDescription = description || defaultDescription;
  const image = ogImage || `${siteUrl}/favicon.png`;

  useEffect(() => {
    // Update Title
    document.title = pageTitle;

    // Helper to update or set meta tag
    const updateMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tag (canonical)
    const updateCanonicalLink = (url) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // Update standard meta tags
    updateMetaTag('meta[name="description"]', 'name', 'description', metaDescription);
    updateCanonicalLink(currentUrl);

    // Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', siteTitle);

    // Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // Schema.org JSON-LD
    let scriptTag = document.querySelector('script[type="application/ld+json"]#seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'seo-schema');
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = schemaData || {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteTitle,
      url: siteUrl,
      description: defaultDescription,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    scriptTag.textContent = JSON.stringify(defaultSchema);
  }, [pageTitle, metaDescription, currentUrl, image, ogType, schemaData]);

  return null;
};

export default SEO;
