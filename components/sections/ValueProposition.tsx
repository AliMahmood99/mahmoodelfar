"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, BarChart3, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ValueProposition() {
  const t = useTranslations('value_prop');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Eye,
      title: t('visibility_title'),
      description: t('visibility_desc'),
      color: 'text-accent'
    },
    {
      icon: BarChart3,
      title: t('performance_title'),
      description: t('performance_desc'),
      color: 'text-gold'
    },
    {
      icon: Rocket,
      title: t('growth_title'),
      description: t('growth_desc'),
      color: 'text-accent'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-egyptian-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-egyptian-gold/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-egyptian-gold-light via-egyptian-gold to-egyptian-green-light bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-egyptian-gold-light/80 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full border-none bg-transparent">
                <CardContent className="p-8 glass-ultra rounded-2xl hover-lift-gold h-full">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden ${
                    feature.color === 'text-accent'
                      ? 'glass-green'
                      : 'glass-gold'
                  }`}>
                    <feature.icon className={`w-10 h-10 ${
                      feature.color === 'text-accent'
                        ? 'text-egyptian-green-light'
                        : 'text-egyptian-gold'
                    } relative z-10`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-egyptian-gold-light">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-egyptian-gold-light/70 leading-relaxed text-base md:text-lg">
                    {feature.description}
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
