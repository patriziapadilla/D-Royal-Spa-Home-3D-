import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TreatmentLipo from "@/components/TreatmentLipo";
import TreatmentBotox from "@/components/TreatmentBotox";
import TreatmentAumentos from "@/components/TreatmentAumentos";
import TreatmentCoolsculpting from "@/components/TreatmentCoolsculpting";
import Resultados from "@/components/Resultados";
import Areas from "@/components/Areas";
import Agendar from "@/components/Agendar";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TreatmentLipo />
        <TreatmentBotox />
        <TreatmentAumentos />
        <TreatmentCoolsculpting />
        <Resultados />
        <Areas />
        <Agendar />
      </main>
      <Footer />
    </div>
  );
}
