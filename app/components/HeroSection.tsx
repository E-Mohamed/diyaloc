'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY < heroHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const translateY = scrollY * 0.8;

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/hero-bg.jpg)',

          transition: 'transform 0.1s linear'
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div 
          className="text-center text-white font-[family-name:var(--font-kenao-sans-serif)] animate-fade-in"
          style={{
            opacity,
            transform: `translateY(${translateY}px)`
          }}
        >
          <div className="flex">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src="/logo_no_bg.svg"
                alt="Logo Diyaloc"
                fill
              />
            </div>
            <div className="flex justify-end pt-[2vh]">
              <span className="text-2xl md:text-6xl font-semibold tracking-wider">DIYALOC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
