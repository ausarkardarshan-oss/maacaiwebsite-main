import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const updateMouse = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', updateMouse, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
