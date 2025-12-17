import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function InteractiveCharacter() {
  const eyeX = useMotionValue(0);
  const eyeY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 150, damping: 30 };
  const smoothX = useSpring(eyeX, springConfig);
  const smoothY = useSpring(eyeY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      const eyeCenterX = rect.left + rect.width * 0.5;
      const eyeCenterY = rect.top + rect.height * 0.20;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxDistance = 200;
      const limitedDistance = Math.min(distance, maxDistance);
      const factor = limitedDistance / maxDistance;

      const maxMovement = 12;

      const moveX = (deltaX / distance) * factor * maxMovement;
      let moveY = (deltaY / distance) * factor * maxMovement;

      if (deltaY < 0) {
        moveY = moveY * 0.4; // Reduz para 40% do movimento quando olha para cima
      }

      eyeX.set(isNaN(moveX) ? 0 : moveX);
      eyeY.set(isNaN(moveY) ? 0 : moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [eyeX, eyeY]);

  const base = import.meta.env.BASE_URL;

  return (
    <div ref={containerRef} className="relative w-full h-full pointer-events-none">
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="relative w-full h-full">
          {/* Esclera */}
          <img 
            src={`${base}Esclera.png`} 
            className="absolute bottom-0 left-0 right-0 w-full h-auto max-h-full object-contain"
            alt=""
          />

          {/* Pupilas*/}
          <motion.img 
            src={`${base}Pupilas.png`} 
            style={{ x: smoothX, y: smoothY }}
            className="absolute bottom-0 left-0 right-0 w-full h-auto max-h-full object-contain"
            alt=""
          />

          {/* Corpo */}
          <img 
            src={`${base}Corpo.png`} 
            className="absolute bottom-0 left-0 right-0 w-full h-auto max-h-full object-contain"
            alt="Frieren"
          />
        </div>
      </div>
    </div>
  );
}