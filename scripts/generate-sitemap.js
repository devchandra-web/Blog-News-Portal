import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MOCK_POSTS } from '../src/mocks/posts.js';
import { MOCK_CATEGORIES } from '../src/mocks/categories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://example.com';
const currentDate = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/about', priority: '0.5', changefreq: 'monthly' },
  { url: '/contact', priority: '0.5', changefreq: 'monthly' }
];

const categoryUrls = MOCK_CATEGORIES.map((cat) => ({
  url: `/category/${cat.slug}`,
  priority: '0.8',
  changefreq: 'weekly'
}));

const postUrls = MOCK_POSTS.filter((p) => p.status === 'publish').map((post) => ({
  url: `/blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: post.date ? new Date(post.date).toISOString().split('T')[0] : currentDate
}));

const allUrls = [...staticPages, ...categoryUrls, ...postUrls];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${SITE_URL}${item.url}</loc>
    <lastmod>${item.lastmod || currentDate}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf8');
console.log(`✅ Sitemap successfully generated at public/sitemap.xml with ${allUrls.length} indexable URLs.`);
