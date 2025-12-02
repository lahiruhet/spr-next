import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemstoneFilters } from "@/components/gemstone-filters"
import { GemstoneGrid } from "@/components/gemstone-grid"
import { GemstoneFacts } from "@/components/gemstone-facts"

export default function ColoredGemstonesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-[#f5f5f0] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gray-400" />
              <h1 className="text-2xl tracking-[0.2em] font-light text-[#1a1a1a]">SAPPHIRE</h1>
              <div className="h-px w-16 bg-gray-400" />
            </div>

            {/* Sapphire Images Placeholder */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-10 rounded"
                  style={{
                    background: `radial-gradient(circle, ${
                      ["#1e40af", "#3b82f6", "#60a5fa", "#1e3a8a", "#2563eb", "#7c3aed", "#f472b6", "#fbbf24"][i]
                    } 0%, ${
                      ["#1e3a8a", "#1d4ed8", "#3b82f6", "#172554", "#1e40af", "#5b21b6", "#ec4899", "#f59e0b"][i]
                    } 100%)`,
                  }}
                />
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              The sapphire is the colourful "brother" of the ruby and as such is also a variety of corundum. Red
              corundum is known as ruby, all other colours are known as sapphire. Of course, best-known are the various
              shades of blue, but sapphires can also be pink, yellow, orange, orange-pink, white or green.
            </p>

            <button className="border border-[#1a1a1a] px-6 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors">
              SHOW MORE
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-lg tracking-[0.2em] font-light text-[#1a1a1a] mb-8">
              YOUR GEMSTONE SEARCH
            </h2>
            <GemstoneFilters />
          </div>
        </div>

        {/* Results Section */}
        <div className="pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <GemstoneGrid gemType="sapphire" />
          </div>
        </div>

        {/* Facts Section */}
        <GemstoneFacts gemType="sapphire" />
      </main>

      <Footer />
    </div>
  )
}
