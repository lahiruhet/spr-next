import Link from "next/link"

const articles = [
  {
    title: "THE TOP 10 INVESTMENT GEMSTONES",
    image: "/investment-gemstones-chart.jpg",
  },
  {
    title: "THE MOST IMPORTANT GEMSTONE MINES IN THE WORLD",
    image: "/gemstone-mine-landscape.jpg",
  },
  {
    title: "SPINEL: MORE THAN JUST A BIRTHPLACE STONE",
    image: "/red-spinel-gemstone.jpg",
  },
]

export function KnowledgeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm tracking-[0.25em] text-[#1a1a1a] mb-12 text-center font-semibold">KNOWLEDGE</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="border border-gray-200 overflow-hidden group">
              <div className="aspect-[3/2] bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xs tracking-[0.1em] text-[#1a1a1a] font-semibold mb-4 leading-relaxed min-h-[3rem]">
                  {article.title}
                </h3>
                <Link
                  href="#"
                  className="inline-block border border-[#1a1a1a] px-4 py-2 text-xs tracking-[0.1em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
