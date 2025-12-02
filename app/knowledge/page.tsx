import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const articles = [
  {
    image: "/colorful-gemstones-collection-ruby-emerald-sapphir.jpg",
    title: "THE TOP 10 INVESTMENT GEMSTONES",
    excerpt:
      "What gemstones are good investments? What is the minimum size of gemstones that can be considered for investment? [...]",
    slug: "top-10-investment-gemstones",
  },
  {
    image: "/ruby-gemstone-being-examined-with-tweezers.jpg",
    title: "THE MOST IMPORTANT GEMSTONE MINES IN THE WORLD",
    excerpt:
      "The rubies from the Mogok Valley are famous for their unique color: a pure red with a slight blue tinge. These so-called pigeon blood rubies are [...]",
    slug: "important-gemstone-mines",
  },
  {
    image: "/pink-spinel-gemstone-oval-cut.jpg",
    title: "SPINEL: MORE THAN JUST CARBUNCLE STONE",
    excerpt:
      "For a long time, the gemstone spinel led a niche existence and was mistaken for ruby. However, it deserves more recognition, and not just because [...]",
    slug: "spinel-carbuncle-stone",
  },
  {
    image: "/green-emerald-gemstone-cushion-cut.jpg",
    title: "GEMSTONES AS A LEGACY",
    excerpt:
      "Apart from the added aesthetic value of gemstones, their particular advantage lies in their high concentration of value in the smallest of spaces [...]",
    slug: "gemstones-as-legacy",
  },
  {
    image: "/diamond-engagement-ring-with-blue-sapphire.jpg",
    title: "GEMSTONES FOR ENGAGEMENT, WEDDING AND ANNIVERSARY RINGS",
    excerpt:
      "Rings have always been a symbol of love and eternity. When exchanging rings at a wedding, for example, the future spouses promise each other fide [...]",
    slug: "gemstones-engagement-rings",
  },
  {
    image: "/gemstone-value-chart-performance-graph.jpg",
    title: "PERFORMANCE OF GEMSTONES: A BRILLIANT INVESTMENT",
    excerpt:
      "Compared to other forms of investment, the appeal of investing in gemstones lies in their stable performance. They show hardly any volatility and [...]",
    slug: "performance-gemstones-investment",
  },
  {
    image: "/colorful-gemstones-trend-jewelry-collection.jpg",
    title: "GEMSTONES ON TREND: WHICH JEWELS ARE CURRENTLY IN DEMAND?",
    excerpt:
      "We reveal which gemstones are particularly popular at the moment and why classic stones and cuts are always on trend. [...]",
    slug: "gemstones-on-trend",
  },
  {
    image: "/emerald-mine-colombia-green-mountains.jpg",
    title: "FROM PARAIBA TO MOZAMBIQUE: GEMSTONES FROM LEGENDARY DEPOSITS",
    excerpt:
      "The region around the municipalities of Muzo, Coscuez and Chivor is part of the emerald belt in Colombia, where ideal geological conditions for t [...]",
    slug: "paraiba-mozambique-deposits",
  },
  {
    image: "/amethyst-geode-crystal-formation-purple.jpg",
    title: "GEMSTONE STEPS: COMBINING MINERALS TO CREATE NATURAL WORKS OF ART",
    excerpt:
      "Steps form on the walls of cavities and are therefore often part of druses. These are cavities in the rock that are not completely filled with cr [...]",
    slug: "gemstone-steps-minerals",
  },
]

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
            <h1 className="text-2xl tracking-[0.3em] text-[#1a1a1a]">KNOWLEDGE</h1>
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
          </div>

          <p className="text-center text-[#1a1a1a]/70 mb-12 max-w-2xl mx-auto">
            Our knowledge section provides important background information on gemstones in general, investments and
            gemmology.
          </p>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/knowledge/${article.slug}`}
                className="border border-[#1a1a1a]/20 p-6 hover:border-[#1a1a1a]/40 transition-colors group"
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm tracking-[0.15em] text-center mb-4 font-medium leading-relaxed text-[#1a1a1a]">
                  {article.title}
                </h3>
                <p className="text-sm text-[#1a1a1a]/70 text-center leading-relaxed">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1">
            <span className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-white text-sm">1</span>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/30 text-sm hover:border-[#1a1a1a]"
            >
              2
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/30 text-sm hover:border-[#1a1a1a]"
            >
              3
            </Link>
            <span className="px-2">...</span>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/30 text-sm hover:border-[#1a1a1a]"
            >
              8
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/30 text-sm hover:border-[#1a1a1a]"
            >
              »
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
