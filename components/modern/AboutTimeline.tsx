"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, TrendingUp, Users, Briefcase } from 'lucide-react';

const milestones = [
  {
    year: '1994',
    title: 'البداية',
    description: 'بدأت الرحلة في إدارة مزارع التسمين',
    icon: Briefcase,
    color: '#40916C'
  },
  {
    year: '2000',
    title: 'التوسع',
    description: 'إدارة أكثر من 25 مزرعة تسمين',
    icon: TrendingUp,
    color: '#52B788'
  },
  {
    year: '2010',
    title: 'الريادة',
    description: 'تطوير أنظمة إدارة متقدمة',
    icon: Award,
    color: '#D4A574'
  },
  {
    year: '2015',
    title: 'الخبرة',
    description: 'الوصول لـ 75 مزرعة ناجحة',
    icon: Users,
    color: '#B8956A'
  },
  {
    year: '2025',
    title: 'الحاضر',
    description: '31 عاماً من الخبرة المثبتة',
    icon: Award,
    color: '#1B4332'
  }
];

export default function AboutTimeline() {
  const t = useTranslations('experience');
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-32 bg-gradient-to-b from-[#0A1F1A] via-[#1B4332] to-[#0F2D23] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A574 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
              <span>رحلة النجاح</span>
              <div className="w-8 h-px bg-[#D4A574]"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-[#F5DEB3] to-[#D4A574] bg-clip-text text-transparent">
              31 عاماً من التميز
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            رحلة طويلة من الخبرة والإنجازات في مجال إدارة مزارع التسمين
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 hidden lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-[#40916C] via-[#D4A574] to-[#1B4332]"
              style={{ scaleX: pathLength, transformOrigin: '0%' }}
            ></motion.div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onViewportEnter={() => setActiveIndex(index)}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="flex flex-col items-center">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-2xl transition-all duration-500 ${
                        isActive ? 'scale-110 shadow-[#D4A574]/50' : ''
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`
                      }}
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                          isActive ? 'opacity-60' : ''
                        }`}
                        style={{ background: milestone.color }}
                      ></div>

                      <Icon className="w-10 h-10 text-white relative z-10" />

                      {/* Year Badge */}
                      <div className="absolute -top-3 -right-3 bg-[#1B4332] text-[#D4A574] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#D4A574]/50 shadow-lg">
                        {milestone.year}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 ${
                        isActive ? 'bg-white/10 border-[#D4A574]/30' : ''
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Decorative Corner */}
                      <div
                        className="absolute top-0 left-0 w-12 h-12 rounded-tl-2xl opacity-20"
                        style={{
                          background: `linear-gradient(135deg, ${milestone.color}, transparent)`
                        }}
                      ></div>
                    </motion.div>
                  </div>

                  {/* Connector Line (Mobile) */}
                  {index < milestones.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-px h-8 bg-gradient-to-b from-[#D4A574] to-transparent"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'سنوات الخبرة', value: '31+' },
            { label: 'مزارع ناجحة', value: '100+' },
            { label: 'تحسين الكفاءة', value: '20%' },
            { label: 'رضا العملاء', value: '95%' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#D4A574] to-[#F5DEB3] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
