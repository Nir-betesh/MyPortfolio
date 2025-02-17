import React, { useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!textRef.current) return;
    const letters = textRef.current.querySelectorAll('.letter');

    letters.forEach((letter) => {
      if (!letter || !letter.getBoundingClientRect) return;

      const rect = letter.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 100;
      const power = Math.max(0, maxDistance - distance) / maxDistance;

      gsap.to(letter, {
        x: -dx * power * 0.3,
        y: -dy * power * 0.3,
        duration: 0.3,
        ease: 'power3.out',
      });
    });
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;
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
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        textAlign: 'center',
      }}
    >
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="word" style={{ display: 'inline-block', marginRight: '0.5em' }}>
          {word.split('').map((char, letterIndex) => (
            <span 
              key={letterIndex} 
              className="letter" 
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
