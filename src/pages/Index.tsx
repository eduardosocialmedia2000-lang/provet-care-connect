import ProvetHeader from "@/components/ProvetHeader";
import ProvetHero from "@/components/ProvetHero";
import ProvetProblem from "@/components/ProvetProblem";
import ProvetAbout from "@/components/ProvetAbout";
import ProvetDifferentials from "@/components/ProvetDifferentials";
import ProvetAlertSigns from "@/components/ProvetAlertSigns";
import ProvetTrust from "@/components/ProvetTrust";
import ProvetCTA from "@/components/ProvetCTA";
import ProvetFAQ from "@/components/ProvetFAQ";
import ProvetFooter from "@/components/ProvetFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ProvetHeader />
    <ProvetHero />
    <ProvetProblem />
    <ProvetAbout />
    <ProvetDifferentials />
    <ProvetAlertSigns />
    <ProvetTrust />
    <ProvetCTA />
    <ProvetFAQ />
    <ProvetFooter />
    <WhatsAppButton />
  </div>
);

export default Index;
