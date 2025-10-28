"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Wheat,
  DollarSign,
  Shield,
  TrendingUp,
  FileText,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SystemShowcase() {
  const t = useTranslations('system_showcase');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const systemFeatures = [
    {
      icon: Monitor,
      title: t('monitoring_title'),
      features: t.raw('monitoring_features'),
      benefit: t('monitoring_benefit'),
      color: 'accent'
    },
    {
      icon: Wheat,
      title: t('feed_title'),
      features: t.raw('feed_features'),
      benefit: t('feed_benefit'),
      color: 'gold'
    },
    {
      icon: DollarSign,
      title: t('financial_title'),
      features: t.raw('financial_features'),
      benefit: t('financial_benefit'),
      color: 'accent'
    },
    {
      icon: Shield,
      title: t('data_title'),
      features: t.raw('data_features'),
      benefit: t('data_benefit'),
      color: 'gold'
    },
    {
      icon: TrendingUp,
      title: t('analytics_title'),
      features: t.raw('analytics_features'),
      benefit: t('analytics_benefit'),
      color: 'accent'
    },
    {
      icon: FileText,
      title: t('reporting_title'),
      features: t.raw('reporting_features'),
      benefit: t('reporting_benefit'),
      color: 'gold'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-20 w-[500px] h-[500px] bg-egyptian-green-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-[500px] h-[500px] bg-egyptian-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="accent"
            className="mb-6 glass-gold px-6 py-2 text-base font-semibold text-egyptian-gold-light border-egyptian-gold/30"
          >
            Flagship Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-egyptian-green-light via-egyptian-gold to-egyptian-gold-light bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-egyptian-gold-light/80 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-transparent">
                <CardContent className={`p-8 rounded-2xl h-full ${
                  feature.color === 'accent' ? 'glass-green hover-lift-green' : 'glass-gold hover-lift-gold'
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-premium ${
                    feature.color === 'accent'
                      ? 'bg-gradient-to-br from-egyptian-green to-egyptian-green-light'
                      : 'bg-gradient-to-br from-egyptian-gold-dark to-egyptian-gold'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-5 text-egyptian-gold-light">
                    {feature.title}
                  </h3>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {Array.isArray(feature.features) && feature.features.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-egyptian-gold-light/70">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          feature.color === 'accent' ? 'text-egyptian-green-light' : 'text-egyptian-gold'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefit */}
                  <div className={`mt-6 pt-6 border-t ${
                    feature.color === 'accent'
                      ? 'border-egyptian-green-light/20'
                      : 'border-egyptian-gold/20'
                  }`}>
                    <p className={`text-sm md:text-base font-semibold ${
                      feature.color === 'accent'
                        ? 'text-egyptian-green-light'
                        : 'text-egyptian-gold'
                    }`}>
                      ✨ {feature.benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
