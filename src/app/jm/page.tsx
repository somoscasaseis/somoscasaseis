import { Navbar } from "@/components/v2/Navbar";
import { HeroJM } from "@/components/jm/HeroJM";
import { IntroJM } from "@/components/jm/IntroJM";
import { ProposalJM } from "@/components/jm/ProposalJM";
import { ServicesV2 } from "@/components/v2/sections/ServicesV2";
import { WhoIsItForV2 } from "@/components/v2/sections/WhoIsItForV2";
import { AboutV2 } from "@/components/v2/sections/AboutV2";
import { AstrologyJM } from "@/components/jm/AstrologyJM";
import { ContactCTA } from "@/components/v2/sections/ContactCTA";
import { FooterV2 } from "@/components/v2/FooterV2";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/jm/CustomCursor";

export default function JMPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#C49A6C] selection:text-black">
      <CustomCursor />
      <Navbar />
      <HeroJM />
      <div className="bg-white text-black">
        <IntroJM />
        <ProposalJM />
        <ServicesV2 />
        <WhoIsItForV2 />
        <AboutV2 />
      </div>
      <AstrologyJM />
      <ContactCTA />
      <FooterV2 />
      <WhatsAppButton />
    </main>
  );
}
