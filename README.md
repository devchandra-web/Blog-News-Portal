# 📰 Chronicle | Modern Blog & News Portal Frontend

A medium-level, professional, and fully responsive **Blog & News Portal** frontend built with **React.js**, **Bootstrap 5**, **React Router DOM v6**, and integrated with the **WordPress REST API**. Designed for production readiness, portfolio showcase, and resume highlights.

---

## 🌟 Key Features

* **Dynamic WordPress Integration**: Decoupled headless frontend fetching Posts, Categories, Authors, Featured Images, Tags, and Published Dates dynamically via REST API.
* **XSS-Safe HTML Content Rendering**: Uses `DOMPurify` to safely render rich WordPress post bodies without security vulnerabilities.
* **Server-Side Pagination**: Implements full API pagination parameters (`page`, `per_page`) and header extraction (`X-WP-Total`, `X-WP-TotalPages`).
* **Real-time Search**: Search input with live API query support (`/wp-json/wp/v2/posts?search=...`) and dedicated results page.
* **Dynamic Routing**: Clean slug-based routing for Articles (`/blog/:slug`), Categories (`/category/:slug`), Search (`/search?q=...`), About, and Contact.
* **Responsive Bootstrap 5 Design**: Adaptive layouts tested for mobile (320px), tablet (768px), laptop (1024px), and desktop (1440px).
* **Fault-Tolerant Fallback Architecture**: Built-in mock dataset fallback ensures smooth demonstration even if remote WordPress APIs suffer network issues or CORS restrictions.
* **Interactive Newsletter & Contact Forms**: Frontend form validation and user feedback toasts.

---

## 🛠️ Tech Stack

* **Frontend Library**: React 18
* **Styling Framework**: Bootstrap 5 + Bootstrap Icons + Custom CSS3
* **Routing**: React Router DOM (v6)
* **HTTP Client**: Axios with header inspection
* **Security**: DOMPurify (XSS Protection)
* **Build Tool**: Vite
* **Deployment Ready**: Vercel SPA rewrites configured (`vercel.json`)

---

## 🚀 Environment Variables Setup

Create a `.env` file in the root directory:

```env
# WordPress REST API Endpoint (Must end with /wp-json/wp/v2)
VITE_WORDPRESS_API_URL=https://techcrunch.com/wp-json/wp/v2
```

To connect your own WordPress instance:
1. Ensure the WordPress REST API is enabled on your WP site (`/wp-json/wp/v2`).
2. Set your domain in `.env`: `VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2`.

---

## 💻 Local Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the repository into your Vercel Dashboard.
3. In Vercel Project Settings, add the Environment Variable:
   - Key: `VITE_WORDPRESS_API_URL`
   - Value: `https://yourwordpresssite.com/wp-json/wp/v2`
4. Deploy! Single-page app routing is handled via `vercel.json`.

---

## 🔮 Future Improvements

- Add Dark/Light Theme toggle mode
- Add bookmarking / saved articles feature using LocalStorage
- Integrate WordPress Comment System via REST API
