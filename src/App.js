import React, { useState, useEffect } from 'react';
import './App.css';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import InteractiveCards from './components/InteractiveCards';
import CountdownTimer from './components/CountdownTimer';
import ValentineGame from './components/ValentineGame';
import LoveLetter from './components/LoveLetter';
import AudioPlayer from './components/AudioPlayer';
import SecretPromise from './components/SecretPromise';
import Footer from './components/Footer';

function App() {
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);

  // Confetti effect
  useEffect(() => {
    if (confettiActive) {
      const launchConfetti = () => {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let confettiParticles = [];
        
        function ConfettiParticle() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height - canvas.height;
          this.size = Math.random() * 12 + 8;
          this.speed = Math.random() * 6 + 4;
          this.angle = Math.random() * 360;
          this.color = ['#ff69b4','#ff1493','#ffb6c1','#ff69b4'][Math.floor(Math.random()*4)];
          this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        function drawConfetti() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          confettiParticles.forEach((p, i) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
            
            p.y += p.speed;
            p.angle += p.rotationSpeed;
            p.speed *= 0.99;
            
            if (p.y > canvas.height) confettiParticles.splice(i, 1);
          });
          
          if (confettiParticles.length > 0) requestAnimationFrame(drawConfetti);
        }
        
        confettiParticles = [];
        for(let i = 0; i < 180; i++) {
          confettiParticles.push(new ConfettiParticle());
        }
        drawConfetti();
        
        // Stop confetti after 5 seconds
        setTimeout(() => {
          setConfettiActive(false);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 5000);
      };
      
      launchConfetti();
    }
  }, [confettiActive]);

  // Handle window resize for confetti canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleYesClick = () => {
    setConfettiActive(true);
    
    // Show celebration message
    const msg = document.createElement('div');
    msg.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: white; padding: 40px 60px; border-radius: 30px; font-size: 2.5rem;
      box-shadow: 0 20px 60px rgba(255,105,180,0.4); z-index: 1000; text-align: center;
      border: 6px solid var(--deep-pink); font-family: 'Dancing Script', cursive;
      max-width: 90%;
    `;
    msg.innerHTML = `I knew you'd say yes, my love! 💖<br><span style="font-size:1.4rem; font-family: 'Poppins', sans-serif;">You just made me the happiest man alive.</span>`;
    document.body.appendChild(msg);
    
    setTimeout(() => msg.remove(), 4500);
  };

  const handleNoClick = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    setNoButtonPosition({ x, y });
    
    // Reset after 2 seconds
    setTimeout(() => {
      setNoButtonPosition(null);
    }, 2000);
  };

  const toggleSecretMessage = () => {
    setShowSecretMessage(!showSecretMessage);
  };

  const showRandomReason = () => {
    const reasons = [
      "Your beautiful smile that brightens my darkest days",
      "The way you care about others with such genuine kindness",
      "Your intelligence and the way you see the world",
      "How you make me want to be a better person every day",
      "The sound of your laughter - my favorite melody",
      "Your strength and resilience in facing challenges",
      "The way you understand me like no one else ever has",
      "Your passion for the things you love",
      "How comfortable I feel when I'm with you",
      "The future I see when I look into your eyes"
    ];
    
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    alert(`Reason #${Math.floor(Math.random() * 100) + 1} why I love you:\n\n${randomReason}`);
  };

  const showSurprise = () => {
    const surpriseMessage = "My Valentine's wish for us is to create a lifetime of beautiful memories together. I want to take you on a romantic getaway to a place you've always wanted to visit.";
    alert(surpriseMessage);
  };

  return (
    <div className="App">
      <FloatingHearts />
      <canvas id="confetti-canvas" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 999
      }} />
      
      <Hero />
      
      <div className="container">
        <MessageSection />
        
        <section className="section">
          <h2 className="section-title">For My Beautiful Shekha</h2>
          <InteractiveCards 
            onReasonsClick={showRandomReason}
            onSurpriseClick={showSurprise}
          />
        </section>
        
        <SecretPromise 
          isActive={showSecretMessage}
          onToggle={toggleSecretMessage}
        />
        
        <CountdownTimer />
        
        <ValentineGame 
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          noButtonPosition={noButtonPosition}
        />
        
        <LoveLetter />
        
        <AudioPlayer />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;