"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSplit() {
  const t = useTranslations('contact');
  const tForm = useTranslations('booking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'الهاتف',
      value: '+20 120 6200090',
      href: 'tel:+201206200090',
      color: '#40916C'
    },
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'info@feedlot-consulting.com',
      href: 'mailto:info@feedlot-consulting.com',
      color: '#D4A574'
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'القاهرة، مصر',
      href: '#',
      color: '#1B4332'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    const whatsappNumber = '+201206200090';
    const message = `مرحباً! أنا ${formData.name}.\n\nالبريد الإلكتروني: ${formData.email}\nالهاتف: ${formData.phone}\n\nالرسالة: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F1A] via-[#1B4332] to-[#0F2D23]"></div>

      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#40916C]/30 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#D4A574]/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-[#D4A574] font-semibold text-sm uppercase tracking-wider">
              <div className="w-8 h-px bg-[#D4A574]"></div>
              <span>تواصل معنا</span>
              <div className="w-8 h-px bg-[#D4A574]"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-[#F5DEB3] to-[#D4A574] bg-clip-text text-transparent">
              ابدأ رحلة التحول الآن
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحسين أداء مزرعتك
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block group"
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="text-white/60 text-sm mb-1">{info.label}</div>
                        <div className="text-white text-lg font-semibold">
                          {info.value}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="text-white/40 group-hover:text-white/80 transition-colors">
                        ←
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                      style={{ background: `${info.color}40` }}
                    ></div>
                  </div>
                </motion.a>
              );
            })}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#40916C]/20 to-[#D4A574]/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">ساعات العمل</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span className="text-white">9:00 ص - 5:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="text-white/50">مغلق</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:bg-white/10 focus:border-[#D4A574] outline-none transition-all duration-300"
                    placeholder="أدخل اسمك"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:bg-white/10 focus:border-[#D4A574] outline-none transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:bg-white/10 focus:border-[#D4A574] outline-none transition-all duration-300"
                    placeholder="+20 XXX XXX XXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">رسالتك</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:bg-white/10 focus:border-[#D4A574] outline-none transition-all duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300"
                >
                  <span>إرسال الرسالة</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Privacy Notice */}
              <p className="text-white/50 text-xs text-center mt-6">
                نحترم خصوصيتك. لن يتم مشاركة بياناتك مع أطراف خارجية.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
