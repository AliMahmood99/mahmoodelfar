"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Settings,
  Users,
  TrendingUp,
  FileText,
  Award,
  ArrowLeft
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: BarChart3,
    key: 'performance',
    color: '#40916C',
    gradient: 'from-[#40916C] to-[#52B788]'
  },
  {
    icon: Settings,
    key: 'operations',
    color: '#1B4332',
    gradient: 'from-[#1B4332] to-[#40916C]'
  },
  {
    icon: Users,
    key: 'training',
    color: '#D4A574',
    gradient: 'from-[#D4A574] to-[#B8956A]'
  },
  {
    icon: TrendingUp,
    key: 'optimization',
    color: '#52B788',
    gradient: 'from-[#52B788] to-[#40916C]'
  },
  {
    icon: FileText,
    key: 'reporting',
    color: '#B8956A',
    gradient: 'from-[#B8956A] to-[#D4A574]'
  },
  {
    icon: Award,
    key: 'quality',
    color: '#1B4332',
    gradient: 'from-[#1B4332] to-[#2D6A4F]'
  }
];

export default function ServicesIsometric() {
  const t = useTranslations('services');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-[#0F2D23] via-[#0A1F1A] to-[#1B4332] relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-[#D4A574]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-[#D4A574] font-semibold text-sm uppercase tracking-wider">
              <div className="w-8 h-px bg-[#D4A574]"></div>
              <span>خدماتنا</span>
              <div className="w-8 h-px bg-[#D4A574]"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-[#F5DEB3] to-[#D4A574] bg-clip-text text-transparent">
              حلول متكاملة لمزارع التسمين
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الاستشارية المتخصصة
          </p>
        </motion.div>

        {/* Services Grid - Hexagon Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group preserve-3d"
              >
                {/* Hexagon Card */}
                <div className="relative">
                  {/* 3D Shadow Layer */}
                  <div
                    className={`absolute inset-0 rounded-3xl transform transition-all duration-500 ${
                      isHovered ? 'translate-y-2 translate-x-2' : 'translate-y-4 translate-x-4'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      filter: 'blur(10px)'
                    }}
                  ></div>

                  {/* Main Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative bg-gradient-to-br ${service.gradient} rounded-3xl p-8 overflow-hidden cursor-pointer shadow-2xl border border-white/10`}
                  >
                    {/* Shine Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}></div>

                    {/* Geometric Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%),
                                         linear-gradient(-45deg, white 25%, transparent 25%),
                                         linear-gradient(45deg, transparent 75%, white 75%),
                                         linear-gradient(-45deg, transparent 75%, white 75%)`,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                      }}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <motion.div
                          animate={{
                            rotate: isHovered ? [0, -10, 10, 0] : 0
                          }}
                          transition={{ duration: 0.5 }}
                          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {t(`${service.key}.title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 text-sm leading-relaxed mb-6">
                        {t(`${service.key}.description`)}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {[1, 2, 3].map((item) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * item }}
                            className="flex items-start gap-2 text-white/70 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{t(`${service.key}.feature${item}`)}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ x: -5 }}
                        className="inline-flex items-center gap-2 text-white font-semibold text-sm group/btn"
                      >
                        <span>اعرف المزيد</span>
                        <ArrowLeft className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full"></div>

                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      <span className="text-white text-xl font-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300"
          >
            <span>احجز استشارة مجانية</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
