import React, { useEffect, useRef } from 'react';

const SakuraPetalEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Sakura petal colors
    const colors = [
      'rgba(255, 183, 197, 0.7)', // Light pink
      'rgba(255, 197, 208, 0.7)', // Medium pink
      'rgba(255, 221, 225, 0.7)', // Pale pink
    ];

    // Create particles
    const particles = [];
    const particleCount = window.innerWidth / 15;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 6 + 4,
        speed: Math.random() * 1.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 0.05 - 0.025,
        color: colors[Math.floor(Math.random() * colors.length)],
        sway: Math.random() * 0.5,
        swaySpeed: Math.random() * 0.01
      });
    }

    // Draw petal shape
    const drawPetal = (x, y, size, angle, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        size * 0.5, size * 0.3,
        size * 0.5, size * 0.7,
        0, size
      );
      ctx.bezierCurveTo(
        -size * 0.5, size * 0.7,
        -size * 0.5, size * 0.3,
        0, 0
      );
      
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.y += p.speed;
        p.angle += p.rotation;
        p.x += Math.sin(Date.now() * p.swaySpeed) * p.sway;
        
        // Reset particle if it goes off screen
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        
        drawPetal(p.x, p.y, p.size, p.angle, p.color);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default SakuraPetalEffect;