import Image from "next/image"
import Link from "next/link"

export function InvestmentSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-[#1a1a1a] mb-6 font-semibold">INVESTMENT</h3>

            <ul className="space-y-3 text-[#4a4a4a] text-sm mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>
                  <strong>Small, easy to transport</strong>, highest concentration of value
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>
                  Constant value increase for more than <strong>5,000 years</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>Easy to pass on (e.g. to the next generation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>
                  Real asset, not subject to <strong>high demand</strong>, declining availability, crisis-proof
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>Authenticity verified by independent, recognized certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>No metallic properties, hard to find even by X-ray</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>
                  <strong>Low correlation</strong> with other investment classes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">●</span>
                <span>Beauty of the assets</span>
              </li>
            </ul>

            <Link
              href="#"
              className="inline-block border border-[#1a1a1a] px-6 py-3 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-square">
            <Image
              src="/images/5.jpeg"
              alt="Investment gemstones display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
