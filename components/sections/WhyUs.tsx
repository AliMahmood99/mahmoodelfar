"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Cpu, Target, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyUs() {
  const t = useTranslations('why_us');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Award,
      title: t('expertise_title'),
      description: t('expertise_desc'),
      color: 'accent'
    },
    {
      icon: Cpu,
      title: t('systems_title'),
      description: t('systems_desc'),
      color: 'gold'
    },
    {
      icon: Target,
      title: t('results_title'),
      description: t('results_desc'),
      color: 'accent'
    },
    {
      icon: Building,
      title: t('enterprise_title'),
      description: t('enterprise_desc'),
      color: 'gold'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-egyptian-green/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-egyptian-gold-dark/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-egyptian-green-light via-egyptian-gold-light to-egyptian-gold bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-transparent text-center">
                <CardContent className={`p-8 rounded-2xl h-full ${
                  reason.color === 'accent' ? 'glass-green hover-lift-green' : 'glass-gold hover-lift-gold'
                }`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto rounded-2xl mb-6 flex items-center justify-center shadow-premium ${
                    reason.color === 'accent'
                      ? 'bg-gradient-to-br from-egyptian-green to-egyptian-green-light'
                      : 'bg-gradient-to-br from-egyptian-gold-dark to-egyptian-gold'
                  }`}>
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-egyptian-gold-light">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-egyptian-gold-light/70 text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
