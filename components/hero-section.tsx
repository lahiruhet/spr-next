import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="grid md:grid-cols-3">
      <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto md:h-[600px]">
        <Image
          src="https://thenaturalgem.com/wp-content/uploads/2024/07/jollyschwarz-5280_3-2.jpg?id=106723"
          alt="Expert examining a gemstone with loupe"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Sidebar Content */}
      <div className="bg-[#f5f5f0] p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center mb-6">
            <div className="text-center text-xs">
              <div className="font-semibold">SRI</div>
              <div className="text-[10px]">LANKA</div>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#2c3e7b] mb-4">RARE BY NATURE</h2>

        <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">
          SPR Gems is the specialist for investments in gemstones. Based in Sri Lanka with direct access to the finest
          natural <span className="underline">untreated gemstones</span>.
        </p>

        <Link
          href="#"
          className="inline-block border border-[#1a1a1a] px-6 py-3 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors w-fit"
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  )
}
