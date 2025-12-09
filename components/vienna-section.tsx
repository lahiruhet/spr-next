import Image from "next/image"

export function ViennaSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px]">
      <Image src="https://media.tiffany.com/is/image/tiffanydm/LP_Desktop10?$tile$&wid=1440" alt="SPR Gems showroom" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-sm tracking-[0.25em] text-[#b8860b] mb-6 font-semibold">VISIT US IN COLOMBO</h2>

        <h3 className="text-white text-xl md:text-2xl font-light mb-6">
          Experience the finest gemstones in the heart of Sri Lanka
        </h3>

        <div className="text-white/80 text-sm space-y-4 max-w-xl">
          <p className="font-semibold text-white">Your advantages:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#b8860b]">●</span>
              <span>Browse our curated collection of premium gemstones and choose your personal favourite</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b8860b]">●</span>
              <span>Receive expert consultation from our experienced gemologists onsite</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b8860b]">●</span>
              <span>Experience one-of-a-kind jewels, purchase gemstones from our showroom or online shop</span>
            </li>
          </ul>

          <p className="pt-4 leading-relaxed">
            Visit our Colombo showroom where you can discover exceptional gemstones and build your portfolio at your leisure.
          </p>
        </div>
      </div>
    </section>
  )
}
