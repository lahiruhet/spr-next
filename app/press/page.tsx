import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const pressArticles = [
  {
    image: "/hand-holding-gemstone-tweezers-examination.jpg",
    title: "DIE PRESSE: THE MOST BEAUTIFUL PROTECTION AGAINST INFLATION, 04.12.2022",
    slug: "die-presse-inflation",
  },
  {
    image: "/person-examining-gemstones-professional.jpg",
    title: "BILLIONAIRE: THE FUTURE OF ETHICAL GEMSTONES, 05.09.2022",
    slug: "billionaire-ethical-gemstones",
  },
  {
    image: "/colorful-gemstones-ruby-sapphire-emerald-collectio.jpg",
    title: "PRIVATE BANKER INTERNATIONAL: FROM CUT TO CLARITY, THE LAYMAN'S GUIDE TO GEMSTONE INVESTMENT, 22.09.2022",
    slug: "private-banker-guide",
  },
  {
    image: "/tempus-magazine-gemstone-article.jpg",
    title: "TEMPUS MAGAZINE: CLEANING UP THE GEMSTONE INDUSTRY, 23.08.2022",
    slug: "tempus-cleaning-industry",
  },
  {
    image: "/business-team-meeting-professionals.jpg",
    title: "FORBES: THREE WAYS TO IMPROVE THE EMPLOYEE EXPERIENCE DURING THE GREAT RESIGNATION, 05.07.2022",
    slug: "forbes-employee-experience",
  },
  {
    image: "/red-ruby-gemstone-cocktail.jpg",
    title: "BÖRSE EXPRESS: RUBY COCKTAIL EDITION, 30.06.2022",
    slug: "borse-express-ruby",
  },
  {
    image: "/gemstone-value-chart-performance-graph.jpg",
    title: "FORBES: HOW TO PROTECT YOUR INVESTMENT PORTFOLIO AGAINST INFLATION, 28.04.2022",
    slug: "forbes-protect-portfolio",
  },
  {
    image: "/colorful-gemstones-trend-jewelry-collection.jpg",
    title: "FINANCE MONTHLY: WHY YOU SHOULD INVEST IN GEMSTONES DURING TIMES OF CRISIS, 05.04.2022",
    slug: "finance-monthly-crisis",
  },
  {
    image: "/colorful-gemstones-collection-ruby-emerald-sapphir.jpg",
    title: "TREND EDITION 1: IT DOESN'T ALWAYS HAVE TO BE GOLD, 25.03.2022",
    slug: "trend-edition-gold",
  },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
            <h1 className="text-2xl tracking-[0.3em] text-[#1a1a1a]">PRESS ARTICLES</h1>
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pressArticles.map((article, index) => (
              <Link
                key={index}
                href={`/press/${article.slug}`}
                className="border border-[#1a1a1a]/20 p-6 hover:border-[#1a1a1a]/40 transition-colors group"
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs tracking-[0.1em] text-center font-medium leading-relaxed text-[#1a1a1a]">
                  {article.title}
                </h3>
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
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/30 text-sm hover:border-[#1a1a1a]"
            >
              4
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
