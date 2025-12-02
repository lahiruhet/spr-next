import Link from "next/link"

export function ConsultingSection() {
  return (
    <section className="bg-[#f5f5f0] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-sm tracking-[0.25em] text-[#1a1a1a] mb-8 font-semibold">YOUR INVESTMENT, YOUR STYLE</h2>

        <div className="text-left max-w-2xl mx-auto">
          <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Individual gemstone consulting</h3>
          <p className="text-sm text-[#4a4a4a] mb-6 leading-relaxed">
            We value the individuality of our customers. That's why we take the time to tailor your portfolio to your
            individual needs. Every gemstone is unique and so will your portfolio be.
          </p>

          <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">
            Access to even more exclusive and rarer gemstones
          </h3>
          <p className="text-sm text-[#4a4a4a] mb-8 leading-relaxed">
            Not all gemstones that we sell are available online in our webshop. Access to the rarest gemstones is more
            than just an investment opportunity. It's an invitation.
          </p>
        </div>

        <Link
          href="#"
          className="inline-block border border-[#1a1a1a] px-8 py-3 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          MAKE AN APPOINTMENT
        </Link>
      </div>
    </section>
  )
}
