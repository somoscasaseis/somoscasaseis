import { Navbar } from "@/components/v2/Navbar";
import { HeroV2 } from "@/components/v2/sections/HeroV2";
import { IntroV2 } from "@/components/v2/sections/IntroV2";
import { ProposalV2 } from "@/components/v2/sections/ProposalV2";
import { ServicesV2 } from "@/components/v2/sections/ServicesV2";
import { WhoIsItForV2 } from "@/components/v2/sections/WhoIsItForV2";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-black uppercase">
      <Navbar />
      <HeroV2 />
      <IntroV2 />
      <ProposalV2 />
      <ServicesV2 />
      <WhoIsItForV2 />
    </main>
  );
}
