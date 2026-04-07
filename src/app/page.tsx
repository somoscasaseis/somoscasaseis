import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import ValueProposition from '@/components/sections/ValueProposition';
import Methodology from '@/components/sections/Methodology';
import Target from '@/components/sections/Target';
import AboutUs from '@/components/sections/AboutUs';
import Astrology from '@/components/sections/Astrology';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Introduction />
      <ValueProposition />
      <Methodology />
      <Target />
      <AboutUs />
      <Astrology />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
