
import React, { useEffect, useRef } from 'react';

interface LogoProps {
  size?: number;
  animated?: boolean;
}

const LogoAnimation = ({ size = 40, animated = true }: LogoProps) => {
  const outerCircleRef = useRef<SVGCircleElement>(null);
  const innerCircleRef = useRef<SVGCircleElement>(null);
  const shieldPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      // Pulse animation for the outer circle
      if (outerCircleRef.current) {
        outerCircleRef.current.animate(
          [
            { opacity: 0.7, r: size * 0.45 },
            { opacity: 0.5, r: size * 0.48 },
            { opacity: 0.7, r: size * 0.45 }
          ],
          {
            duration: 2000,
            easing: 'ease-in-out'
          }
        );
      }

      // Slight pulse for inner circle
      if (innerCircleRef.current) {
        innerCircleRef.current.animate(
          [
            { opacity: 0.9 },
            { opacity: 1 },
            { opacity: 0.9 }
          ],
          {
            duration: 2000,
            easing: 'ease-in-out'
          }
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [animated, size]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? "animate-pulse-slow" : ""}
    >
      {/* Outer glow circle */}
      <circle
        ref={outerCircleRef}
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        fillOpacity="0.7"
        className={animated ? "animate-pulse-slow" : ""}
      />
      
      {/* Inner circle */}
      <circle
        ref={innerCircleRef}
        cx="50"
        cy="50"
        r="40"
        fill="url(#logoGradient)"
        className={animated ? "animate-pulse-slow" : ""}
      />
      
      {/* Shield */}
      <path
        ref={shieldPathRef}
        d="M50 25C53.5 25 67 29.5 67 29.5C67 29.5 67 50 67 55C67 70 50 75 50 75C50 75 33 70 33 55C33 50 33 29.5 33 29.5C33 29.5 46.5 25 50 25Z"
        fill="white"
        className={animated ? "animate-pulse-slow" : ""}
      />
      
      {/* Keyhole */}
      <path
        d="M50 42C53.3137 42 56 44.6863 56 48C56 49.6569 55.2679 51.1472 54.1241 52.1857L58 63H42L45.8759 52.1857C44.7321 51.1472 44 49.6569 44 48C44 44.6863 46.6863 42 50 42Z"
        fill="#3a70ea"
      />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient
          id="logoGradient"
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3a70ea" />
          <stop offset="1" stopColor="#5690f5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoAnimation;
