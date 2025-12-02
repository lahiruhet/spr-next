import Link from "next/link"

const gemstones = [
  { name: "Ruby", color: "from-red-600 via-red-500 to-red-700" },
  { name: "Sapphire", color: "from-blue-700 via-blue-500 to-blue-800" },
  { name: "Emerald", color: "from-emerald-600 via-emerald-400 to-emerald-700" },
  { name: "Tanzanite", color: "from-violet-600 via-blue-500 to-violet-700" },
  { name: "Tourmaline", color: "from-pink-500 via-green-400 to-teal-500" },
  { name: "Others", color: "from-amber-500 via-yellow-400 to-orange-500" },
]

function RadiantCircle({ color }: { color: string }) {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
      <div className={`absolute inset-0 rounded-full bg-gradient-radial ${color} opacity-80`} />
      <div className={`absolute inset-2 rounded-full bg-gradient-radial ${color} opacity-60`} />
      <div className={`absolute inset-4 rounded-full bg-gradient-radial ${color} opacity-90`} />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent" />
    </div>
  )
}

export function DiscoverGemstones() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-sm tracking-[0.25em] text-[#1a1a1a] mb-4 font-semibold">DISCOVER GEMSTONES</h2>

        <p className="text-sm text-[#4a4a4a] max-w-2xl mx-auto mb-12 leading-relaxed">
          We exclusively offer natural colored, investment-grade gemstones in our portfolio. Every gemstone available
          for purchase is accompanied by certificates issued by globally renowned gemological institutes.
        </p>

        {/* Gemstone Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 mb-12">
          {gemstones.map((gem) => (
            <Link
              key={gem.name}
              href="#"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-radial ${gem.color}`}
                  style={{
                    background: `radial-gradient(circle, ${getGradientColors(gem.name)})`,
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-black/20" />
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-tl from-white/30 via-transparent to-transparent" />
              </div>
              <span className="text-xs tracking-[0.15em] text-[#4a4a4a] group-hover:text-[#b8860b] transition-colors">
                {gem.name}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="inline-block border border-[#1a1a1a] px-8 py-3 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          ALL COLORED GEMSTONES
        </Link>
      </div>
    </section>
  )
}

function getGradientColors(name: string): string {
  const colors: Record<string, string> = {
    Ruby: "#dc2626, #ef4444 30%, #b91c1c 70%, #7f1d1d",
    Sapphire: "#1e3a8a, #3b82f6 30%, #1d4ed8 70%, #1e40af",
    Emerald: "#047857, #10b981 30%, #059669 70%, #065f46",
    Tanzanite: "#4c1d95, #8b5cf6 30%, #6d28d9 70%, #5b21b6",
    Tourmaline: "#be185d, #ec4899 20%, #14b8a6 50%, #0d9488 80%, #115e59",
    Others: "#d97706, #fbbf24 30%, #f59e0b 70%, #b45309",
  }
  return colors[name] || colors.Others
}
