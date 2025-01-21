import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  // Track the mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse move over the container
  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });

    const letters = textRef.current.querySelectorAll('.letter');

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 100; // Max distance for repulsion
      const power = Math.max(0, maxDistance - distance) / maxDistance;

      gsap.to(letter, {
        x: -dx * power * 0.3,
        y: -dy * power * 0.3,
        duration: 0.3,
        ease: 'power3.out',
      });
    });
  };

  // Reset letters when the mouse leaves
  const handleMouseLeave = () => {
    const letters = textRef.current.querySelectorAll('.letter');
    gsap.to(letters, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{
            display: 'inline-block',
            marginRight: char === ' ' ? '0.3em' : '0',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
