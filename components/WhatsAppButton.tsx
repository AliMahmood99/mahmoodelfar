"use client";

import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = "+201206200090";
  const message = encodeURIComponent("مرحباً! أنا مهتم بخدمات استشارات إدارة مزارع التسمين.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group rtl:right-auto rtl:left-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-75"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.75, 0, 0.75],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />

      <Button
        size="lg"
        className="relative rounded-full h-16 w-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6E] text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <MessageCircle className="h-7 w-7" />
        </motion.div>
      </Button>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 right-0 rtl:right-auto rtl:left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          تحدث معنا
          <div className="absolute top-full right-4 rtl:right-auto rtl:left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </motion.a>
  );
}
