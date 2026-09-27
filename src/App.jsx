import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetails from './pages/ServiceDetails';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();

  // ── Header scroll shadow ───────────────────────────────────
  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Auto scroll to top on route change ─────────────────────
  useEffect(() => {
    // If not a hash link, scroll to top
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}
