import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import ArticleSkeleton from './components/common/skeletons/ArticleSkeleton';

// Code Splitting & Lazy Loaded Route Components
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Category = lazy(() => import('./pages/Category'));
const TagArchive = lazy(() => import('./pages/TagArchive'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top component on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1" id="main-content">
            <Suspense
              fallback={
                <div className="py-5 bg-light min-vh-100">
                  <ArticleSkeleton />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/tag/:slug" element={<TagArchive />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
