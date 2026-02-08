import React, { useEffect } from 'react';
import './App.css';

const FloatingHearts = () => {
  useEffect(() => {
    const createFloatingHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart-bg');
      heart.textContent = ['❤️','💗','💖','💕','💞'][Math.floor(Math.random()*5)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 8 + 10) + 's';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      heart.style.opacity = Math.random() * 0.4 + 0.3;
      
      const heartsBg = document.getElementById('hearts-bg');
      if (heartsBg) {
        heartsBg.appendChild(heart);
      }
      
      setTimeout(() => heart.remove(), 20000);
    };
    
    // Create initial hearts
    for(let i = 0; i < 25; i++) createFloatingHeart();
    
    // Keep creating hearts
    const intervalId = setInterval(createFloatingHeart, 300);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hearts-background" id="hearts-bg">
      <style jsx="true">{`
        .heart-bg {
          position: absolute;
          color: var(--pink);
          opacity: 0.4;
          font-size: 25px;
          text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
          animation: float linear infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-150px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;