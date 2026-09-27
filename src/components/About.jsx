import React, { useState } from 'react';
import Button from './Button';
import useTilt from '../hooks/useTilt';
import RevealWrapper from './RevealWrapper';

const STATS = [
  { icon: '📦', value: '50+', label: 'Projects Delivered' },
  { icon: '🌐', value: '20+', label: 'Global Clients' },
  { icon: '💡', value: '3+', label: 'Years of Innovation' },
  { icon: '📈', value: '100%', label: 'Commitment to Your Growth' },
];

const VALUES = [
  {
    icon: '🤝',
    title: 'Human-First Thinking',
    desc: 'Every solution starts with empathy. We build technology that serves real people and solves real problems.',
    color: 'val-blue',
  },
  {
    icon: '⚡',
    title: 'AI-Powered Innovation',
    desc: 'We harness the best of artificial intelligence to give your business a competitive edge in a fast-changing world.',
    color: 'val-purple',
  },
  {
    icon: '🌱',
    title: 'Impact Over Output',
    desc: 'We measure success not in lines of code, but in the real-world impact we create for clients and communities.',
    color: 'val-pink',
  },
  {
    icon: '🔒',
    title: 'Trust & Transparency',
    desc: 'We build long-term relationships rooted in honesty, accountability, and consistent delivery.',
    color: 'val-green',
  },
];

const TEAM = [
  {
    name: 'Vaibhavi',
    role: 'Co-Founder & Creative Lead',
    bio: 'Passionate about design thinking and building intuitive AI experiences that feel human.',
    img: '/assets/images/team-vaibhavi.jpg',
    initials: 'V',
    color: 'team-pink',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Parth Roy',
    role: 'Co-Founder & CEO',
    bio: "Visionary leader driving MAAC AI's growth with expertise in strategy, AI and business transformation.",
    img: '/assets/images/team-parth.jpg',
    initials: 'PR',
    color: 'team-blue',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Saish Bafna',
    role: 'Founder & AI Architect',
    bio: "The brain behind MAAC AI's core products — turning complex AI research into practical, scalable solutions.",
    img: '/assets/images/team-saish.jpg',
    initials: 'SB',
    color: 'team-purple',
    linkedin: '#',
    twitter: '#',
  },
];

/** Value card with 3D tilt + shine */
function ValueCard({ icon, title, desc, color }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 12, scale: 1.04, speed: 300 });
  return (
    <div
      className={`value-card ${color}`}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="tilt-shine" aria-hidden="true" />
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

/** Team card with 3D tilt + shine */
function TeamCard({ name, role, bio, img, initials, color, linkedin, twitter, onImgError, imgFailed }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 8, scale: 1.03, speed: 350 });
  return (
    <div
      className={`team-card ${color}`}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="tilt-shine" aria-hidden="true" />
      <div className="team-photo-wrap">
        {imgFailed ? (
          <div className="team-avatar-fallback">{initials}</div>
        ) : (
          <img
            src={img}
            alt={`${name} – ${role}`}
            className="team-photo"
            loading="lazy"
            onError={onImgError}
          />
        )}
        <div className="team-photo-overlay" />
      </div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <span className="team-role">{role}</span>
        <p className="team-bio">{bio}</p>
        <div className="team-social">
          <a href={linkedin} className="team-social-link" aria-label={`${name} LinkedIn`}>in</a>
          <a href={twitter} className="team-social-link" aria-label={`${name} Twitter`}>𝕏</a>
        </div>
      </div>
    </div>
  );
}

export default function About({ isHomePage = false }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section id="about" className="about-page" aria-label="About Us">

      {/* Hero */}
      {!isHomePage && (
      <div className="about-hero">
        <RevealWrapper variant="left" className="about-hero-content">
          <div className="about-eyebrow section-pill">OUR STORY</div>
          <h2 className="about-h1">
            About <em className="gradient-text">Us</em>
          </h2>
          <p className="about-tagline">
            Driven by People. Powered by <em className="gradient-text">AI.</em>
          </p>
          <p className="about-desc">
            At MAAC AI, we believe in the power of human creativity and artificial
            intelligence working together to solve real-world challenges. We are a team
            of innovators, creators, and problem-solvers building intelligent digital
            products for a smarter, more connected future.
          </p>
          <div className="about-hero-actions">
            <Button href="/contact" variant="dark" showArrow>Our Journey</Button>
            <button className="about-watch-btn" type="button">
              <span className="watch-play">▶</span> Watch Our Story
            </button>
          </div>
        </RevealWrapper>

        <RevealWrapper variant="right" className="about-hero-image">
          <div className="about-hero-img-wrap">
            <img
              src="/assets/images/about-hero-banner.jpg"
              alt="MAAC AI team collaborating with AI"
              loading="lazy"
            />
            <div className="float-badge badge-top">
              <span>People</span>
              <span>Technology</span>
              <span>Better Together</span>
            </div>
            <div className="float-badge badge-bottom">
              <span>Ideas Today</span>
              <span>A Brighter Tomorrow</span>
            </div>
          </div>
        </RevealWrapper>
      </div>
      )}

      {/* Stats */}
      {!isHomePage && (
      <div className="about-stats-row">
        {STATS.map(({ icon, value, label }, idx) => (
          <RevealWrapper variant="up" delay={idx * 100} key={label} className="about-stat-item">
            <span className="stat-icon" aria-hidden="true">{icon}</span>
            <b className="stat-value">{value}</b>
            <small className="stat-label">{label}</small>
          </RevealWrapper>
        ))}
      </div>
      )}

      {/* Mission */}
      {!isHomePage && (
      <RevealWrapper variant="up" className="about-mission">
        <div className="about-mission-inner">
          <div className="mission-tag">OUR MISSION</div>
          <h2 className="about-section-h2 center">
            Building a <em className="gradient-text">Smarter Tomorrow</em>,<br />Together
          </h2>
          <p className="about-mission-text" style={{ textAlign: 'center' }}>
            MAAC AI was founded on one powerful belief — that technology should work
            <em> for</em> people, not the other way around. Our mission is to bridge the gap
            between cutting-edge AI and everyday business needs, delivering solutions that
            are not just intelligent, but intuitive, scalable, and impactful.
          </p>
          <div className="mission-pillars">
            <div className="mission-pillar">
              <span>🚀</span>
              <div>
                <b>Innovate Relentlessly</b>
                <p>Constantly pushing the limits of what AI can do.</p>
              </div>
            </div>
            <div className="mission-pillar">
              <span>🎯</span>
              <div>
                <b>Deliver with Purpose</b>
                <p>Every product we build solves a real problem.</p>
              </div>
            </div>
            <div className="mission-pillar">
              <span>🌍</span>
              <div>
                <b>Grow Globally</b>
                <p>Taking Indian AI innovation to the world stage.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
      )}

      {/* Values */}
      {!isHomePage && (
      <div className="about-values">
        <div className="about-section-header">
          <div className="about-eyebrow center section-pill">OUR VALUES</div>
          <h2 className="about-section-h2 center">What Drives Everything We Do</h2>
          <p className="about-section-sub">
            Our core values shape the way we think, build, and collaborate — every single day.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map(({ icon, title, desc, color }, idx) => (
            <RevealWrapper variant="up" delay={idx * 100} key={title}>
              <ValueCard icon={icon} title={title} desc={desc} color={color} />
            </RevealWrapper>
          ))}
        </div>
      </div>
      )}

      {/* Team */}
      <div className="about-team">
        <div className="about-section-header">
          <div className="about-eyebrow center section-pill">THE TEAM</div>
          <h2 className="about-section-h2 center">Meet the Minds Behind MAAC AI</h2>
          <p className="about-section-sub">
            A passionate group of technologists, designers, and dreamers — building the future of AI.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map(({ name, role, bio, img, initials, color, linkedin, twitter }, idx) => (
            <RevealWrapper variant="up" delay={idx * 120} key={name}>
              <TeamCard
                name={name}
                role={role}
                bio={bio}
                img={img}
                initials={initials}
                color={color}
                linkedin={linkedin}
                twitter={twitter}
                imgFailed={!!imgErrors[name]}
                onImgError={() => handleImgError(name)}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      {!isHomePage && (
      <div className="about-cta">
        <RevealWrapper variant="up" className="about-cta-inner">
          <div className="cta-left">
            <div className="cta-tag section-pill">OUR SERVICES</div>
            <h2 className="about-cta-h2">
              Smart Solutions<br />
              for <em className="gradient-text">Your Business</em>
            </h2>
            <p className="about-cta-sub">
              We deliver innovative AI-powered software, apps, and digital solutions
              to help you grow, automate, and stay ahead.
            </p>
            <Button href="/services" variant="dark" showArrow>Explore Our Services</Button>
          </div>
          <div className="cta-right" aria-hidden="true">
            <div className="cta-script-line">Ideas. Technology. Real Impact.</div>
            <div className="cta-robot-visual">🤖🤝🙌</div>
            <div className="cta-script-line small">A Smarter Tomorrow Together</div>
          </div>
        </RevealWrapper>
      </div>
      )}

    </section>
  );
}

