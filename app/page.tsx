import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { ExpertSection } from "@/components/expert-section"
import { BenefitsSection } from "@/components/benefits-section"
import { InvestmentSection } from "@/components/investment-section"
import { DiscoverGemstones } from "@/components/discover-gemstones"
import { ConsultingSection } from "@/components/consulting-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { WearableInvestment } from "@/components/wearable-investment"
import { ViennaSection } from "@/components/vienna-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadges />
      <ExpertSection />
      <BenefitsSection />
      <InvestmentSection />
      <DiscoverGemstones />
      <ConsultingSection />
      <KnowledgeSection />
      <WearableInvestment />
      <ViennaSection />
      <Footer />
    </main>
  )
}
