import React from 'react';
import { industries } from '../data/industries';
import RevealWrapper from './RevealWrapper';
import useTilt from '../hooks/useTilt';

const INDUSTRY_COLORS = [
  { bg: '#fff0f6', color: '#ee3b9a', border: '#f9e1ed', hover: '#fdf5f9' },
  { bg: '#f5efff', color: '#7437ff', border: '#dce3f5', hover: '#f5f8ff' },
  { bg: '#edfff3', color: '#14b95c', border: '#c9ebd8', hover: '#f2fcf6' },
  { bg: '#fff8ec', color: '#f5a623', border: '#fde8b8', hover: '#fffbf0' },
];

function IndustryCard({ name, icon, palette, idx, openModal }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 10, scale: 1.03, speed: 320 });

  return (
    <button
      ref={ref}
      className="industry-card-new"
      style={{
        '--ind-bg': palette.bg,
        '--ind-color': palette.color,
        '--ind-border': palette.border,
        '--ind-hover': palette.hover,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => openModal && openModal(name, `Learn more about our innovative ${name} solutions.`)}
      aria-label={`Learn more about ${name}`}
    >
      <span className="tilt-shine" aria-hidden="true" />
      <div className="ind-card-icon">
        <i aria-hidden="true">{icon}</i>
      </div>
      <b className="ind-card-name">{name}</b>
      <p className="ind-card-desc">Innovative AI solutions tailored for {name}.</p>
      <span className="ind-card-arrow">→</span>
    </button>
  );
}

export default function Industries({ openModal, isHomePage = false }) {
  return (
    <section id="industries" className={`section industries-new ${!isHomePage ? 'about-page' : ''}`} aria-label="Industries we empower">
      {!isHomePage ? (
        <div className="page-hero-banner">
          <RevealWrapper variant="up">
            <img 
              src="/assets/images/industries-hero-banner.png" 
              alt="Industries Hero Banner" 
            />
          </RevealWrapper>
        </div>
      ) : (
        <RevealWrapper variant="up">
          <div className="eyebrow section-pill">INDUSTRIES WE EMPOWER</div>
          <h2>We Serve a Wide Range of <em>Industries</em></h2>
          <p className="lead">
            Innovative solutions tailored for every industry, helping businesses transform,
            grow, and stay ahead in a digital world.
          </p>
        </RevealWrapper>
      )}

      <RevealWrapper variant="up" delay={200}>
        <div className="industry-cards-grid">
          {industries.map(({ icon, name }, idx) => (
            <IndustryCard 
              key={idx} 
              name={name} 
              icon={icon} 
              palette={INDUSTRY_COLORS[idx % INDUSTRY_COLORS.length]} 
              idx={idx} 
              openModal={openModal} 
            />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
