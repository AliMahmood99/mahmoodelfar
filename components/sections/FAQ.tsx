"use client";

import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-20 right-1/4 w-[550px] h-[550px] bg-egyptian-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-[550px] h-[550px] bg-egyptian-green-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-egyptian-gold-light via-egyptian-green-light to-egyptian-gold bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-ultra rounded-3xl shadow-premium p-8 md:p-10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none glass-premium rounded-2xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 px-6 rounded-2xl hover:bg-egyptian-green/10 transition-all duration-300">
                    <span className="font-bold text-egyptian-gold-light pr-4 text-base md:text-lg">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6 text-egyptian-gold-light/75 leading-relaxed text-base md:text-lg">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
