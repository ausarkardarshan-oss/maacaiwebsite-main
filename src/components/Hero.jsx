import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';
import RevealWrapper from './RevealWrapper';
import heroVideo from '../assets/videos/human-ai-hero.mp4';

const PHRASES = ['Meets AI', 'Powered by AI', 'Creates Tomorrow', 'Builds Smarter'];

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Global Clients' },
  { value: '3+', label: 'Years of Innovation' },
  { value: '100%', label: 'Commitment to Your Growth' },
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const dynamicRef = useRef(null);

  // Cycle through phrases every 3.2s
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % PHRASES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // GSAP character animation on phrase change
  useEffect(() => {
    if (dynamicRef.current && window.gsap) {
      gsap.fromTo(
        dynamicRef.current.children,
        { opacity: 0, y: 18, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0)', stagger: 0.045, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [phraseIndex]);

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="hero-shade" aria-hidden="true" />



      {/* Hero content */}
      <RevealWrapper variant="up" className="hero-copy">
        <h1>
          Human Intelligence<br />
          <span id="heroDynamic" ref={dynamicRef} aria-live="polite" aria-atomic="true">
            {[...PHRASES[phraseIndex]].map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>
        <p>
          We build intelligent digital solutions that solve real problems<br />
          and create a smarter, more connected future.
        </p>
        <div className="actions">
          <Button href="/services" variant="dark" showArrow>Get Started</Button>
          <Button href="#home" variant="light" icon="◉">Watch Video</Button>
        </div>
      </RevealWrapper>

      {/* Statistics card */}
      <div className="stats" role="list" aria-label="Key statistics">
        {STATS.map(({ value, label }) => (
          <div key={label} role="listitem">
            <b>{value}</b>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
