"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import StatsCounter from './StatsCounter';
import Image from 'next/image';

export default function HeroModern() {
  const t = useTranslations('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: 31, suffix: '+', label: 'سنة خبرة', prefix: '' },
    { value: 100, suffix: '+', label: 'مزرعة تسمين', prefix: '' },
    { value: 20, suffix: '%', label: 'زيادة الكفاءة', prefix: '+' },
    { value: 95, suffix: '%', label: 'رضا العملاء', prefix: '' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1F1A] via-[#1B4332] to-[#0F2D23]">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B4332]/50 to-[#0A1F1A]/80 pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 165, 116, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 165, 116, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A574]/20 to-[#40916C]/20 backdrop-blur-sm border border-[#D4A574]/30 px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#D4A574]" />
              <span className="text-sm font-semibold text-[#D4A574]">استشاري معتمد - خبرة 31 عاماً</span>
            </motion.div>

            {/* Main Headline with Character Animation */}
            <div className="mb-8">
              {t('title').split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + wordIndex * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-block mr-3 mb-3"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white via-[#F5DEB3] to-[#D4A574] bg-clip-text text-transparent">
                      {word}
                    </span>
                  </h1>
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTAs with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={() => scrollToSection('booking')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-white font-bold rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>

                <span className="relative flex items-center gap-2">
                  {t('cta_primary')}
                  <motion.div
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>
                </span>

                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-[#D4A574] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => scrollToSection('services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                {t('cta_secondary')}
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4 items-center text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#40916C] rounded-full animate-pulse"></div>
                <span>متاح الآن</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div>استجابة خلال 24 ساعة</div>
              <div className="w-px h-4 bg-white/20"></div>
              <div>استشارة مجانية</div>
            </motion.div>
          </div>

          {/* Right Column - 3D Floating Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center items-center preserve-3d"
          >
            <div className="relative">
              {/* Floating Rings */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-2 border-[#D4A574]/30 border-dashed"></div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute inset-0 -m-16"
              >
                <div className="w-full h-full rounded-full border border-[#40916C]/20 border-dotted"></div>
              </motion.div>

              {/* Main Photo Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* 3D Shadow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#40916C] rounded-full transform translate-x-4 translate-y-4 blur-2xl opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574] to-[#F5DEB3] rounded-full transform -translate-x-2 -translate-y-2 blur-xl opacity-40"></div>

                {/* Photo Frame */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/10 backdrop-blur-sm bg-gradient-to-br from-[#1B4332]/40 to-[#40916C]/40 shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1B4332]/60 z-10"></div>

                  {/* Profile Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/images/profile.png"
                      alt="استشاري مزارع التسمين"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#D4A574] via-[#F5DEB3] to-[#D4A574] opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-white px-6 py-3 rounded-2xl shadow-2xl border-4 border-white/20"
                >
                  <div className="text-sm font-semibold">🏆 خبير معتمد</div>
                </motion.div>

                {/* Years Badge */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -top-4 -left-4 bg-gradient-to-br from-[#40916C] to-[#1B4332] text-white px-6 py-3 rounded-2xl shadow-2xl border-4 border-white/20"
                >
                  <div className="text-2xl font-black">31+</div>
                  <div className="text-xs">عام خبرة</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 lg:mt-32"
        >
          <StatsCounter stats={stats} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs">تصفح للأسفل</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
