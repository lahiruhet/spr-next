import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopFilters } from "@/components/shop-filters"
import { ShopGrid } from "@/components/shop-grid"

export default function ShopPage() {
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
              <h1 className="text-2xl tracking-[0.2em] font-light text-[#1a1a1a]">GEMSTONE ONLINE SHOP</h1>
              <div className="h-px w-16 bg-gray-400" />
            </div>

            {/* Gemstone Images */}
            <div className="flex justify-center gap-2 mb-8">
              {[
                { color1: "#dc2626", color2: "#991b1b" },
                { color1: "#2563eb", color2: "#1e40af" },
                { color1: "#16a34a", color2: "#166534" },
                { color1: "#7c3aed", color2: "#5b21b6" },
                { color1: "#ec4899", color2: "#be185d" },
                { color1: "#f59e0b", color2: "#d97706" },
                { color1: "#06b6d4", color2: "#0891b2" },
                { color1: "#8b5cf6", color2: "#7c3aed" },
              ].map((gem, i) => (
                <div
                  key={i}
                  className="w-12 h-10 rounded"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${gem.color1}, ${gem.color2})`,
                  }}
                />
              ))}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              Buy untreated, natural colored, investment-grade gemstones in our online store. All our gemstones
              available for purchase are accompanied by certificates from internationally recognized gemological
              institutes.
            </p>
            <p className="text-sm text-gray-600">
              You can easily buy our gems directly online, or submit inquiries regarding specific stones.
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-lg tracking-[0.2em] font-light text-[#1a1a1a] mb-8">
              YOUR GEMSTONE SEARCH
            </h2>
            <ShopFilters />
          </div>
        </div>

        {/* Your Choice Section */}
        <div className="pb-12">
          <div className="max-w-6xl mx-auto px-4">
            {/* Decorative Arrow */}
            <div className="flex justify-center mb-8">
              <div className="text-4xl text-gray-300">↓</div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gray-300" />
              <h2 className="text-lg tracking-[0.2em] font-light text-[#1a1a1a]">YOUR CHOICE</h2>
              <div className="h-px w-16 bg-gray-300" />
            </div>

            <p className="text-center text-xs text-gray-500 mb-8 max-w-2xl mx-auto">
              The photos presented here by SPR Gems show each gemstone as it is. The photos are not post-processed,
              color-changed and the gemstones are not optically optimized in their purity.
            </p>

            <ShopGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
