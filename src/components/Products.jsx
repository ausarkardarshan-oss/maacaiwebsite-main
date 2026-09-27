import React, { useState } from 'react';
import { products } from '../data/products';
import Button from './Button';
import RevealWrapper from './RevealWrapper';

export default function Products({ isHomePage = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Exclude Mine Healer from the products section
  const displayProducts = products.filter(p => p.name !== 'Mine Healer');
  
  const featuredProduct = displayProducts[activeIndex] || displayProducts[0];
  const allProducts = displayProducts.slice(0, 8); // Show up to 8 products in list

  return (
    <section id="products" className={`section products ${!isHomePage ? 'about-page' : ''}`} aria-label="Featured Products">
      {!isHomePage ? (
        <div className="page-hero-banner">
          <RevealWrapper variant="up">
            <img 
              src="/assets/images/products-hero-banner.png" 
              alt="Products Hero Banner" 
            />
          </RevealWrapper>
        </div>
      ) : (
        <RevealWrapper variant="up">
          <div className="eyebrow section-pill">FEATURED PRODUCTS</div>
          <h2>Our AI-Driven <em>Products</em></h2>
          <p className="lead">
            Innovative products designed to make everyday life and business smarter.
          </p>
        </RevealWrapper>
      )}

      <div className="products-container">
        {/* Left Side: Featured Product */}
        <RevealWrapper variant="left" className="featured-product-card">
          <div className="featured-content" key={`content-${activeIndex}`} style={{ animation: 'fadeSlideUp 0.4s ease-out forwards' }}>
            <div className="tiny">FEATURED PRODUCT</div>
            <h3>
              {featuredProduct.name.split(' ')[0]} <span>{featuredProduct.name.split(' ')[1] || ''}</span>
            </h3>
            <b className="featured-sub">{featuredProduct.sub || featuredProduct.name}</b>
            <p>{featuredProduct.desc}</p>
            <Button variant="accent" showArrow style={{ background: '#ee3b9a', borderColor: '#ee3b9a', cursor: 'pointer' }}>
              Learn More&nbsp;&nbsp;
            </Button>
          </div>
          
          <div className="featured-visual" key={`visual-${activeIndex}`} style={{ animation: 'fadeScaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <b style={{ marginTop: '10px' }}>{featuredProduct.icon} {featuredProduct.name}</b>
              <p>Ready to assist you.</p>
              <div className="phone-card">
                Start your<br /><b>Session</b>
              </div>
              <div className="phone-btn">
                Launch
              </div>
            </div>
            {/* Floating icons around phone */}
            <div className="floating-icon icon-1">✦</div>
            <div className="floating-icon icon-2">✧</div>
            <div className="floating-icon icon-3">●</div>
          </div>
        </RevealWrapper>

        <div className="future-products-section">
          <RevealWrapper variant="right" className="future-header">
            <div className="future-top">
              <span className="eyebrow section-pill" style={{ color: '#4058ff', marginBottom: '20px' }}>OUR AI PRODUCTS</span>
            </div>
          </RevealWrapper>

          <RevealWrapper variant="up" delay={200} className="future-grid os-nav">
            {allProducts.map((prod, i) => (
              <button 
                key={i} 
                className={`future-card os-nav-item ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Select ${prod.name}`}
              >
                <i>{prod.icon}</i>
                <b>{prod.name}</b>
                <span className="arrow">→</span>
              </button>
            ))}
          </RevealWrapper>

          <RevealWrapper variant="up" delay={400} className="future-footer">
            <a href="/products" className="view-all-link">View all products →</a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
