import Link from "next/link"
import Image from "next/image"

const gemstones = [
  { name: "Ruby", image: "/gems/rubin-tng-edelsteine_a-z-gla53669.jpg" },
  { name: "Sapphire", image: "/gems/saphir-tng-edelsteine_a-z-gla56231.jpg" },
  { name: "Emerald", image: "/gems/smaragd-tng-edelsteine_a-z-gla52785.jpg" },
  { name: "Tanzanite", image: "/gems/tansanit-tng-edelsteine_a-z-gla50583.jpg" },
  { name: "Tourmaline", image: "/gems/turmalin-tricolor-tng-edelsteine_a-z-gla49655.jpg" },
  { name: "Spinel", image: "/gems/spinell-tng-edelsteine_a-z-gla47542.jpg" },
]

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
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-lg">
                <Image
                  src={gem.image}
                  alt={gem.name}
                  fill
                  className="object-cover"
                />
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

