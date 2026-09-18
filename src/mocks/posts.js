/**
 * Realistic WordPress Posts Mock Data
 * Follows exact WordPress REST API v2 response schema (/wp-json/wp/v2/posts?_embed=1)
 */

export const MOCK_POSTS = [
  {
    id: 101,
    date: "2026-09-15T10:30:00",
    slug: "getting-started-with-react-hooks",
    status: "publish",
    type: "post",
    link: "https://example.com/getting-started-with-react-hooks/",
    title: {
      rendered: "Getting Started with React Hooks: A Comprehensive Guide"
    },
    excerpt: {
      rendered: "<p>Learn how React Hooks like useState, useEffect, and useMemo streamline stateful logic and functional component architecture in modern web applications.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>React Hooks revolutionized frontend development by enabling developers to use state and other React features without writing class components. Since their introduction, hooks have become the standard paradigm for managing component life-cycles, side effects, and shared state logic.</p>
        
        <h2>Why React Hooks Matter</h2>
        <p>Before hooks, sharing stateful logic between components required complex patterns like render props or higher-order components (HOCs). Hooks simplify component composition by allowing you to extract stateful logic into clean, reusable functions.</p>
        
        <blockquote>
          "Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share hooks among many components or with the community." — React Documentation
        </blockquote>

        <h3>Core Hooks Every Developer Should Master</h3>
        <ul>
          <li><strong>useState:</strong> Manages local state within functional components.</li>
          <li><strong>useEffect:</strong> Handles side effects like data fetching, subscriptions, and DOM updates.</li>
          <li><strong>useContext:</strong> Accesses context values without nesting consumer components.</li>
          <li><strong>useMemo & useCallback:</strong> Optimizes performance by memoizing complex calculations and callbacks.</li>
        </ul>

        <p>Here is a basic example of fetching data inside a custom hook:</p>
        <pre><code>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}</code></pre>

        <p>By mastering these fundamental hooks, you lay a solid foundation for building modern, scalable React applications.</p>
      `,
      protected: false
    },
    author: 12,
    featured_media: 245,
    categories: [7, 4],
    tags: [21, 22, 23],
    _embedded: {
      author: [
        {
          id: 12,
          name: "Sarah Mitchell",
          slug: "sarah-mitchell",
          description: "Senior Frontend Architect and technical writer specializing in React performance, modern JavaScript, and UI accessibility.",
          avatar_urls: {
            "24": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=48&q=80",
            "48": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
            "96": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 245,
          source_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
          alt_text: "React Hooks Code on Screen",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80" },
              full: { source_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 7, name: "React", slug: "react" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 21, name: "React Hooks", slug: "react-hooks" },
          { id: 22, name: "JavaScript", slug: "javascript" },
          { id: 23, name: "Frontend", slug: "frontend" }
        ]
      ]
    }
  },
  {
    id: 102,
    date: "2026-09-14T14:15:00",
    slug: "10-javascript-features-every-frontend-developer-should-know",
    status: "publish",
    type: "post",
    link: "https://example.com/10-javascript-features-every-frontend-developer-should-know/",
    title: {
      rendered: "10 JavaScript Features Every Frontend Developer Should Know"
    },
    excerpt: {
      rendered: "<p>Explore essential ES6+ JavaScript capabilities including optional chaining, nullish coalescing, destructuring, modules, and async/await.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>JavaScript has evolved rapidly over the past decade. With annual ECMAScript updates, modern JavaScript offers expressive syntax and powerful runtime capabilities that make code cleaner and easier to maintain.</p>
        
        <h2>1. Optional Chaining (?.)</h2>
        <p>Optional chaining allows you to read the value of a property located deep within a chain of connected objects without having to check each reference for validity.</p>
        <pre><code>const userCity = user?.address?.location?.city || 'Unknown';</code></pre>

        <h2>2. Nullish Coalescing (??)</h2>
        <p>Unlike logical OR (||), which returns the right side for falsy values like 0 or empty strings, the nullish coalescing operator only returns the right side when the left side is null or undefined.</p>

        <h2>3. Array Destructuring & Rest Syntax</h2>
        <p>Extract elements effortlessly and collect remaining items in a clean syntax:</p>
        <pre><code>const [primary, secondary, ...others] = ['React', 'Vue', 'Angular', 'Svelte'];</code></pre>

        <p>Mastering these features ensures your codebase remains modern, concise, and robust.</p>
      `,
      protected: false
    },
    author: 14,
    featured_media: 246,
    categories: [2, 4, 9],
    tags: [22, 23, 34, 36],
    _embedded: {
      author: [
        {
          id: 14,
          name: "Alex Rivera",
          slug: "alex-rivera",
          description: "Lead Full-Stack Engineer writing about cloud-native web architectures, Node.js microservices, and GraphQL APIs.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 246,
          source_url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80",
          alt_text: "JavaScript Code Syntax",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 2, name: "JavaScript", slug: "javascript" },
          { id: 4, name: "Web Development", slug: "web-development" },
          { id: 9, name: "Programming", slug: "programming" }
        ],
        [
          { id: 22, name: "JavaScript", slug: "javascript" },
          { id: 23, name: "Frontend", slug: "frontend" },
          { id: 34, name: "Clean Code", slug: "clean-code" }
        ]
      ]
    }
  },
  {
    id: 103,
    date: "2026-09-12T09:15:00",
    slug: "building-a-wordpress-headless-cms-with-react",
    status: "publish",
    type: "post",
    link: "https://example.com/building-a-wordpress-headless-cms-with-react/",
    title: {
      rendered: "Building a WordPress Headless CMS with React & REST API"
    },
    excerpt: {
      rendered: "<p>Discover how to decouple WordPress as a Headless Content Management System and build a fast single-page React frontend consumer.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>Headless CMS architecture is taking web development by storm. By decoupling content storage from frontend rendering, teams get the content management familiarity of WordPress combined with the speed and flexibility of React.</p>
        
        <h2>How Headless WordPress Works</h2>
        <p>In a standard WordPress setup, PHP renders HTML templates on the server. In a headless setup, WordPress acts purely as an API engine. Content managers use the WP Admin dashboard as usual, while React fetches post data asynchronously via <code>/wp-json/wp/v2/posts</code>.</p>
        
        <h3>Key Architectural Benefits</h3>
        <ul>
          <li><strong>Performance:</strong> Client-side routing eliminates full page reloads.</li>
          <li><strong>Security:</strong> The WordPress backend can be protected behind authentication layers while serving public JSON.</li>
          <li><strong>Multi-Channel Distribution:</strong> The same API endpoints can feed web apps, native iOS/Android apps, and digital kiosks.</li>
        </ul>
      `,
      protected: false
    },
    author: 22,
    featured_media: 247,
    categories: [6, 7, 4],
    tags: [24, 25, 31, 23],
    _embedded: {
      author: [
        {
          id: 22,
          name: "David Kim",
          slug: "david-kim",
          description: "Headless WordPress consultant helping media enterprise brands migrate traditional CMS platforms to decoupled JAMstack setups.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 247,
          source_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Headless Architecture Graphic",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 6, name: "WordPress", slug: "wordpress" },
          { id: 7, name: "React", slug: "react" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 24, name: "REST API", slug: "rest-api" },
          { id: 25, name: "WordPress", slug: "wordpress" },
          { id: 31, name: "Headless CMS", slug: "headless-cms" }
        ]
      ]
    }
  },
  {
    id: 104,
    date: "2026-09-10T16:20:00",
    slug: "understanding-rest-apis-for-modern-web-apps",
    status: "publish",
    type: "post",
    link: "https://example.com/understanding-rest-apis-for-modern-web-apps/",
    title: {
      rendered: "Understanding REST APIs & HTTP Protocol Standards"
    },
    excerpt: {
      rendered: "<p>A practical breakdown of RESTful principles, HTTP verbs, status codes, query parameters, header pagination, and payload structures.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>Representational State Transfer (REST) remains the foundational architectural style for web services. Understanding how clients and servers exchange JSON resources over HTTP is a core requirement for frontend engineers.</p>

        <h2>Core Principles of RESTful APIs</h2>
        <p>RESTful APIs organize endpoints around resources rather than actions. Standard HTTP verbs determine the operation:</p>
        <ul>
          <li><code>GET:</code> Retrieve resource data without side effects.</li>
          <li><code>POST:</code> Create a new resource payload.</li>
          <li><code>PUT/PATCH:</code> Update existing resources completely or partially.</li>
          <li><code>DELETE:</code> Remove a resource record.</li>
        </ul>

        <h2>WordPress API Response Headers for Pagination</h2>
        <p>The WordPress REST API passes pagination meta information through custom response headers:</p>
        <pre><code>X-WP-Total: 42
X-WP-TotalPages: 5</code></pre>
        <p>Consuming these headers allows your React frontend to construct true server-side pagination components.</p>
      `,
      protected: false
    },
    author: 14,
    featured_media: 248,
    categories: [4, 9, 2],
    tags: [24, 28, 23],
    _embedded: {
      author: [
        {
          id: 14,
          name: "Alex Rivera",
          slug: "alex-rivera",
          description: "Lead Full-Stack Engineer writing about cloud-native web architectures, Node.js microservices, and GraphQL APIs.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 248,
          source_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          alt_text: "REST API Data Visualization",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 4, name: "Web Development", slug: "web-development" },
          { id: 9, name: "Programming", slug: "programming" }
        ],
        [
          { id: 24, name: "REST API", slug: "rest-api" },
          { id: 28, name: "Node.js", slug: "nodejs" }
        ]
      ]
    }
  },
  {
    id: 105,
    date: "2026-09-08T11:45:00",
    slug: "bootstrap-5-responsive-design-techniques",
    status: "publish",
    type: "post",
    link: "https://example.com/bootstrap-5-responsive-design-techniques/",
    title: {
      rendered: "Bootstrap 5 Responsive Design Techniques & Custom CSS"
    },
    excerpt: {
      rendered: "<p>Master Bootstrap 5 utility classes, flexbox grid breakdowns, card layouts, and custom CSS variables for beautiful editorial news portals.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>Bootstrap 5 provides an enterprise-tested grid system, flexible utility classes, and accessible UI primitives that allow rapid prototyping and production-grade responsive designs without writing bulky custom stylesheets.</p>

        <h2>12-Column Responsive Flexbox Grid</h2>
        <p>By leveraging breakpoint suffixes like <code>col-12 col-md-6 col-lg-4</code>, your layout adapts automatically across small mobile viewports, tablet screen sizes, and wide desktop displays.</p>

        <h3>Combining Bootstrap Utilities with Vanilla CSS Variables</h3>
        <p>Defining custom color tokens in <code>:root</code> keeps your UI design system consistent:</p>
        <pre><code>:root {
  --font-primary: 'Plus Jakarta Sans', sans-serif;
  --bs-primary: #2563eb;
  --bs-dark: #0f172a;
}</code></pre>
      `,
      protected: false
    },
    author: 15,
    featured_media: 249,
    categories: [3, 4],
    tags: [26, 27, 23],
    _embedded: {
      author: [
        {
          id: 15,
          name: "Sophia Chen",
          slug: "sophia-chen",
          description: "UX Researcher and Design System Strategist passionate about CSS Grid, Bootstrap customization, and micro-interactions.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 249,
          source_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Responsive Design Prototype",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 3, name: "Design", slug: "design" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 26, name: "CSS", slug: "css" },
          { id: 27, name: "Bootstrap", slug: "bootstrap" }
        ]
      ]
    }
  },
  {
    id: 106,
    date: "2026-09-05T08:30:00",
    slug: "improving-react-application-performance",
    status: "publish",
    type: "post",
    link: "https://example.com/improving-react-application-performance/",
    title: {
      rendered: "Improving React Application Performance & Core Web Vitals"
    },
    excerpt: {
      rendered: "<p>Actionable techniques to optimize Largest Contentful Paint (LCP), reduce bundle sizes, prevent unnecessary re-renders, and lazy-load image assets.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>User experience and SEO rankings are directly tied to application loading performance. In React applications, unoptimized re-renders and massive JavaScript bundles can lead to high Interaction to Next Paint (INP) latency.</p>

        <h2>Key Optimization Strategies</h2>
        <ul>
          <li><strong>Code Splitting:</strong> Use <code>React.lazy()</code> and dynamic imports to split large page bundles.</li>
          <li><strong>Image Optimization:</strong> Serve modern webp images with explicit <code>width</code> and <code>height</code> attributes to eliminate Cumulative Layout Shift (CLS).</li>
          <li><strong>Memoization:</strong> Wrap expensive calculations in <code>useMemo</code> and functional components in <code>React.memo</code>.</li>
        </ul>
      `,
      protected: false
    },
    author: 12,
    featured_media: 250,
    categories: [7, 4, 1],
    tags: [21, 29, 32, 23],
    _embedded: {
      author: [
        {
          id: 12,
          name: "Sarah Mitchell",
          slug: "sarah-mitchell",
          description: "Senior Frontend Architect and technical writer specializing in React performance, modern JavaScript, and UI accessibility.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 250,
          source_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Web Performance Metrics Dashboard",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 7, name: "React", slug: "react" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 29, name: "Performance", slug: "performance" },
          { id: 32, name: "Web Vitals", slug: "web-vitals" }
        ]
      ]
    }
  },
  {
    id: 107,
    date: "2026-09-02T13:00:00",
    slug: "ai-and-machine-learning-in-modern-web-development",
    status: "publish",
    type: "post",
    link: "https://example.com/ai-and-machine-learning-in-modern-web-development/",
    title: {
      rendered: "AI & Machine Learning Integration in Modern Web Apps"
    },
    excerpt: {
      rendered: "<p>How developers embed AI inference, dynamic semantic search, auto-summarization, and chatbot widgets into React frontends.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>Artificial Intelligence is no longer confined to Python scripts and backend pipelines. Client-side web apps now communicate with LLM endpoints and vector databases to deliver personalized editorial experiences.</p>

        <h2>Use Cases in News & Content Portals</h2>
        <p>Modern publishing platforms use AI APIs for automated content tagging, smart summaries, real-time translations, and interactive Q&A directly on article pages.</p>
      `,
      protected: false
    },
    author: 18,
    featured_media: 251,
    categories: [5, 1, 10],
    tags: [35, 23, 24],
    _embedded: {
      author: [
        {
          id: 18,
          name: "Marcus Vance",
          slug: "marcus-vance",
          description: "Tech Journalist covering artificial intelligence trends, startup ecosystems, and the business of software engineering.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 251,
          source_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
          alt_text: "AI Neural Network Interface",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 5, name: "AI & Machine Learning", slug: "ai-machine-learning" },
          { id: 1, name: "Technology", slug: "technology" }
        ],
        [
          { id: 35, name: "Machine Learning", slug: "machine-learning" }
        ]
      ]
    }
  },
  {
    id: 108,
    date: "2026-08-30T10:10:00",
    slug: "frontend-developer-roadmap-for-2026",
    status: "publish",
    type: "post",
    link: "https://example.com/frontend-developer-roadmap-for-2026/",
    title: {
      rendered: "Frontend Developer Roadmap for 2026: Skills & Technologies"
    },
    excerpt: {
      rendered: "<p>A comprehensive career roadmap outlining core skills: JavaScript ES6+, React ecosystem, CSS frameworks, REST APIs, and testing tools.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>The frontend landscape evolves continuously. To remain competitive as a frontend engineer, focusing on strong computer science fundamentals alongside modern toolchains is key.</p>

        <h2>Essential Technical Milestones</h2>
        <ol>
          <li><strong>Core Web Technologies:</strong> HTML5 semantics, CSS3 layouts (Flexbox/Grid), JavaScript ES6+ modules.</li>
          <li><strong>Component Frameworks:</strong> React.js, state management, client routing (React Router DOM).</li>
          <li><strong>API Integration:</strong> Fetch API, Axios, HTTP headers, DOM sanitization (DOMPurify).</li>
          <li><strong>Build Tools & Styling:</strong> Vite, Bootstrap 5, Webpack, responsive design patterns.</li>
        </ol>
      `,
      protected: false
    },
    author: 12,
    featured_media: 252,
    categories: [8, 4, 9],
    tags: [30, 23, 22, 36],
    _embedded: {
      author: [
        {
          id: 12,
          name: "Sarah Mitchell",
          slug: "sarah-mitchell",
          description: "Senior Frontend Architect and technical writer specializing in React performance, modern JavaScript, and UI accessibility.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 252,
          source_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Developer Roadmap & Setup",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 8, name: "Career", slug: "career" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 30, name: "Career Tips", slug: "career-tips" },
          { id: 23, name: "Frontend", slug: "frontend" }
        ]
      ]
    }
  },
  {
    id: 109,
    date: "2026-08-27T15:40:00",
    slug: "cybersecurity-best-practices-for-web-applications",
    status: "publish",
    type: "post",
    link: "https://example.com/cybersecurity-best-practices-for-web-applications/",
    title: {
      rendered: "Cybersecurity Best Practices & XSS Prevention in React"
    },
    excerpt: {
      rendered: "<p>Learn how to safely render external HTML content using DOMPurify, enforce Content Security Policies, and secure API keys.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>When fetching dynamic HTML content from an external CMS like WordPress, injecting un-sanitized strings into React using <code>dangerouslySetInnerHTML</code> opens severe cross-site scripting (XSS) vulnerabilities.</p>

        <h2>Sanitizing HTML with DOMPurify</h2>
        <p>DOMPurify sanitizes HTML and prevents XSS attacks by stripping executable script tags, inline event listeners, and dangerous protocol handlers while preserving safe layout tags like <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>, and <code>&lt;img&gt;</code>.</p>
      `,
      protected: false
    },
    author: 20,
    featured_media: 253,
    categories: [1, 4, 9],
    tags: [23, 34, 24],
    _embedded: {
      author: [
        {
          id: 20,
          name: "Elena Rostova",
          slug: "elena-rostova",
          description: "Cybersecurity analyst and web application security researcher focusing on XSS prevention and API authentication standards.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 253,
          source_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Cybersecurity Matrix Shield",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 1, name: "Technology", slug: "technology" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 23, name: "Frontend", slug: "frontend" },
          { id: 34, name: "Clean Code", slug: "clean-code" }
        ]
      ]
    }
  },
  {
    id: 110,
    date: "2026-08-24T09:20:00",
    slug: "mastering-react-router-dom-v6",
    status: "publish",
    type: "post",
    link: "https://example.com/mastering-react-router-dom-v6/",
    title: {
      rendered: "Mastering React Router DOM v6 for Single-Page Applications"
    },
    excerpt: {
      rendered: "<p>A guide to declarative routing, dynamic URL parameters, URL search params, 404 fallbacks, and scroll restoration.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>React Router DOM v6 provides a lightweight, declarative routing solution for modern React applications. It allows seamless navigation between views without triggering full browser reloads.</p>

        <h2>Key Concepts Covered</h2>
        <ul>
          <li><code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> matching.</li>
          <li>Dynamic URL parameters like <code>/blog/:slug</code> via <code>useParams()</code>.</li>
          <li>Query parameters like <code>/search?q=react</code> via <code>useSearchParams()</code>.</li>
          <li>Programmatic navigation via <code>useNavigate()</code>.</li>
        </ul>
      `,
      protected: false
    },
    author: 12,
    featured_media: 254,
    categories: [7, 4],
    tags: [21, 23, 22],
    _embedded: {
      author: [
        {
          id: 12,
          name: "Sarah Mitchell",
          slug: "sarah-mitchell",
          description: "Senior Frontend Architect and technical writer specializing in React performance, modern JavaScript, and UI accessibility.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 254,
          source_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Routing Architecture Flowchart",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 7, name: "React", slug: "react" },
          { id: 4, name: "Web Development", slug: "web-development" }
        ],
        [
          { id: 21, name: "React Hooks", slug: "react-hooks" }
        ]
      ]
    }
  },
  {
    id: 111,
    date: "2026-08-20T11:00:00",
    slug: "typescript-best-practices-for-react-developers",
    status: "publish",
    type: "post",
    link: "https://example.com/typescript-best-practices-for-react-developers/",
    title: {
      rendered: "TypeScript Best Practices for Modern React Applications"
    },
    excerpt: {
      rendered: "<p>Strongly typing props, custom hooks, state dispatchers, API response interfaces, and generic component definitions.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>TypeScript adds static type safety to JavaScript, drastically reducing runtime errors and improving IDE autocomplete developer experience in large team codebases.</p>
      `,
      protected: false
    },
    author: 14,
    featured_media: 255,
    categories: [9, 7, 2],
    tags: [36, 22, 34],
    _embedded: {
      author: [
        {
          id: 14,
          name: "Alex Rivera",
          slug: "alex-rivera",
          description: "Lead Full-Stack Engineer writing about cloud-native web architectures, Node.js microservices, and GraphQL APIs.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 255,
          source_url: "https://images.unsplash.com/photo-1516116211223-4258568f104c?auto=format&fit=crop&w=1200&q=80",
          alt_text: "TypeScript Code on Screen",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1516116211223-4258568f104c?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1516116211223-4258568f104c?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 9, name: "Programming", slug: "programming" },
          { id: 7, name: "React", slug: "react" }
        ],
        [
          { id: 36, name: "TypeScript", slug: "typescript" }
        ]
      ]
    }
  },
  {
    id: 112,
    date: "2026-08-16T14:50:00",
    slug: "scaling-tech-startups-with-headless-cms",
    status: "publish",
    type: "post",
    link: "https://example.com/scaling-tech-startups-with-headless-cms/",
    title: {
      rendered: "Scaling Tech Startups with Headless CMS Architectures"
    },
    excerpt: {
      rendered: "<p>Why fast-growing SaaS startups choose Headless WordPress to decouple content marketing from core application code.</p>",
      protected: false
    },
    content: {
      rendered: `
        <p>For early-stage startups, speed to market is everything. Decoupling the marketing blog from the main SaaS app codebase prevents deploy bottlenecks while giving marketing teams total control over publishing.</p>
      `,
      protected: false
    },
    author: 18,
    featured_media: 256,
    categories: [10, 6, 1],
    tags: [31, 25, 30],
    _embedded: {
      author: [
        {
          id: 18,
          name: "Marcus Vance",
          slug: "marcus-vance",
          description: "Tech Journalist covering artificial intelligence trends, startup ecosystems, and the business of software engineering.",
          avatar_urls: {
            "96": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=192&q=80"
          }
        }
      ],
      "wp:featuredmedia": [
        {
          id: 256,
          source_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
          alt_text: "Startup Team Collaboration",
          media_details: {
            sizes: {
              medium: { source_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
              large: { source_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" }
            }
          }
        }
      ],
      "wp:term": [
        [
          { id: 10, name: "Startups", slug: "startups" },
          { id: 6, name: "WordPress", slug: "wordpress" }
        ],
        [
          { id: 31, name: "Headless CMS", slug: "headless-cms" }
        ]
      ]
    }
  }
];
