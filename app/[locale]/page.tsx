import Navigation from '@/components/Navigation';
import HeroModern from '@/components/modern/HeroModern';
import ValueProposition from '@/components/sections/ValueProposition';
import SystemShowcase from '@/components/sections/SystemShowcase';
import AboutTimeline from '@/components/modern/AboutTimeline';
import ServicesIsometric from '@/components/modern/ServicesIsometric';
import WhyUs from '@/components/sections/WhyUs';
import FAQ from '@/components/sections/FAQ';
import ContactSplit from '@/components/modern/ContactSplit';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroModern />
      <ValueProposition />
      <SystemShowcase />
      <AboutTimeline />
      <ServicesIsometric />
      <WhyUs />
      <FAQ />
      <ContactSplit />
      <WhatsAppButton />
    </main>
  );
}
