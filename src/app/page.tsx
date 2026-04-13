import { Navbar } from "@/components/v2/Navbar";
import { HeroV2 } from "@/components/v2/sections/HeroV2";
import { IntroV2 } from "@/components/v2/sections/IntroV2";
import { ProposalV2 } from "@/components/v2/sections/ProposalV2";
import { ServicesV2 } from "@/components/v2/sections/ServicesV2";
import { WhoIsItForV2 } from "@/components/v2/sections/WhoIsItForV2";
import { AboutV2 } from "@/components/v2/sections/AboutV2";
import { AstrologyV2 } from "@/components/v2/sections/AstrologyV2";
import { ContactCTA } from "@/components/v2/sections/ContactCTA";
import { FooterV2 } from "@/components/v2/FooterV2";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { getPhrases, getServices } from "@/lib/sanity/queries";

export default async function Home() {
  const [phrasesData, servicesData] = await Promise.all([
    getPhrases(),
    getServices(),
  ]);

  // Adapt phrases to strings array for ProposalV2
  const phrases = phrasesData.length > 0 ? phrasesData.map(p => p.text) : undefined;

  return (
    <main className="min-h-screen bg-bg-base text-foreground">
      <Navbar />
      <HeroV2 />
      <IntroV2 />
      <ProposalV2 phrases={phrases} />
      <ServicesV2 services={servicesData.length > 0 ? servicesData : undefined} />
      <WhoIsItForV2 />
      <AboutV2 />
      <AstrologyV2 />
      <ContactCTA />
      <FooterV2 />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
