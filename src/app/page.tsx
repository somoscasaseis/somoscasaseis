import { Navbar } from "@/components/v2/Navbar";
import { HeroV2 } from "@/components/v2/sections/HeroV2";
import { IntroV2 } from "@/components/v2/sections/IntroV2";
import { ProposalV2 } from "@/components/v2/sections/ProposalV2";
import { ServicesV2 } from "@/components/v2/sections/ServicesV2";
import { WhoIsItForV2 } from "@/components/v2/sections/WhoIsItForV2";
import { AboutV2 } from "@/components/v2/sections/AboutV2";
import { AstrologyV2 } from "@/components/v2/sections/AstrologyV2";
import { ContactForm } from "@/components/v2/sections/ContactForm";
import { FooterV2 } from "@/components/v2/FooterV2";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-foreground">
      <Navbar />
      <HeroV2 />
      <IntroV2 />
      <ProposalV2 />
      <ServicesV2 />
      <WhoIsItForV2 />
      <AboutV2 />
      <AstrologyV2 />
      <ContactForm />
      <FooterV2 />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
