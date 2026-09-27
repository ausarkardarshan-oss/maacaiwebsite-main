import React, { useState } from 'react';
import { industries } from '../data/industries';
import RevealWrapper from './RevealWrapper';

const INDUSTRY_COLORS = [
  { bg: '#fff0f6', color: '#ee3b9a', border: '#f9e1ed', hover: '#fdf5f9' },
  { bg: '#f5efff', color: '#7437ff', border: '#dce3f5', hover: '#f5f8ff' },
  { bg: '#edfff3', color: '#14b95c', border: '#c9ebd8', hover: '#f2fcf6' },
  { bg: '#fff8ec', color: '#f5a623', border: '#fde8b8', hover: '#fffbf0' },
];

export default function Industries({ openModal, isHomePage = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          {industries.map(({ icon, name }, idx) => {
            const palette = INDUSTRY_COLORS[idx % INDUSTRY_COLORS.length];
            const isHovered = hoveredIndex === idx;
            return (
              <button
                key={idx}
                className="industry-card-new"
                style={{
                  '--ind-bg': palette.bg,
                  '--ind-color': palette.color,
                  '--ind-border': palette.border,
                  '--ind-hover': palette.hover,
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal && openModal(name, `Learn more about our innovative ${name} solutions.`)}
                aria-label={`Learn more about ${name}`}
              >
                <div className="ind-card-icon">
                  <i aria-hidden="true">{icon}</i>
                </div>
                <b className="ind-card-name">{name}</b>
                <p className="ind-card-desc">Innovative AI solutions tailored for {name}.</p>
                <span className="ind-card-arrow">→</span>
              </button>
            );
          })}
        </div>
      </RevealWrapper>
    </section>
  );
}
