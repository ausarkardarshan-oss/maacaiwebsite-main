import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import useTilt from '../hooks/useTilt';
import RevealWrapper from './RevealWrapper';

/** Individual service card with 3D tilt + shine */
function ServiceCard({ svc, idx }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 10, scale: 1.03, speed: 320 });

  return (
    <div
      ref={ref}
      className={`service-card service-${idx + 1}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Moving shine overlay */}
      <span className="tilt-shine" aria-hidden="true" />

      <Link
        to={`/services/${svc.id}`}
        aria-label={svc.title}
        className="service-card-link"
      >
        <div className="ico" aria-hidden="true">
          <span>{svc.icon}</span>
        </div>
        <div className="service-copy">
          <b>{svc.title}</b>
          <p>{svc.desc}</p>
        </div>
        <span className="service-arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function Services({ isHomePage = false }) {
  return (
    <section id="services" className={`section services ${!isHomePage ? 'about-page' : ''}`} aria-label="What we do">
      {!isHomePage ? (
        <div className="page-hero-banner">
          <RevealWrapper variant="up">
            <img 
              src="/assets/images/services-hero-banner.jpg" 
              alt="Services Hero Banner" 
            />
          </RevealWrapper>
        </div>
      ) : (
        <RevealWrapper variant="up">
          <div className="eyebrow section-pill">WHAT WE DO</div>
          <h2>Transforming Ideas Into <em>Intelligent Solutions</em></h2>
          <p className="lead">
            We combine AI, technology, and creativity to build digital solutions that help
            businesses grow, automate, and lead in the future.
          </p>
        </RevealWrapper>
      )}

      <div className="service-grid">
        {services.map((svc, idx) => (
          <RevealWrapper variant="up" delay={idx * 100} key={idx}>
            <ServiceCard svc={svc} idx={idx} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
