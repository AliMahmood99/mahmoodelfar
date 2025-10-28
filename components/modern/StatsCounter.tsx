"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
  duration?: number;
}

function StatItem({ end, suffix, label, prefix = '', duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = end / (duration * 60);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group"
    >
      {/* 3D Card Effect */}
      <div className="relative preserve-3d">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#40916C] rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>

        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4A574]/20 to-transparent rounded-bl-full"></div>

          {/* Number */}
          <div className="text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#D4A574] via-[#F5DEB3] to-[#D4A574] bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              {prefix}{count}{suffix}
            </span>
          </div>

          {/* Label */}
          <div className="text-white/80 text-lg font-medium">
            {label}
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1B4332]/0 via-[#40916C]/10 to-[#1B4332]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}

interface StatsCounterProps {
  stats: {
    value: number;
    suffix: string;
    label: string;
    prefix?: string;
  }[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          end={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          prefix={stat.prefix}
          duration={2 + index * 0.2}
        />
      ))}
    </div>
  );
}
