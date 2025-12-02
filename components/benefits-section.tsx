import Image from "next/image"
import Link from "next/link"

export function BenefitsSection() {
  return (
    <section className="grid md:grid-cols-2">
      {/* Image */}
      <div className="relative aspect-square md:aspect-auto md:h-[600px]">
        <Image src="/images/2.jpeg" alt="Gemstone consultation" fill className="object-cover" />
      </div>

      {/* Benefits Content */}
      <div className="bg-[#33325A] p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-white text-sm tracking-[0.2em] mb-6">YOUR BENEFITS:</h3>

        <ul className="space-y-3 text-white/90 text-sm mb-8">
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>
              Personal, first-class & <strong>individual customer advice</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>Discreet delivery to desired location</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>Third-party storage locations (e.g. bonded warehouse, safe deposit box)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>
              Individual production of high-quality <strong>jewellery</strong> ("wearable investments")
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>
              Repurchase at appropriate <strong>buyback exchange</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">●</span>
            <span>Round-the-year support with direct contact</span>
          </li>
        </ul>

        <Link
          href="#"
          className="inline-block bg-[#1a1a1a] text-white px-6 py-3 text-xs tracking-[0.15em] hover:bg-[#333] transition-colors w-fit"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
