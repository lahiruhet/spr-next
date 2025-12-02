import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Contact Title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gray-300" />
          <h1 className="text-2xl tracking-[0.2em] font-light text-[#1a1a1a]">CONTACT</h1>
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-1">We can be reached directly at:</p>
          <p className="text-sm text-[#1a1a1a] mb-1">info@sprgems.com</p>
          <p className="text-sm text-[#1a1a1a]">+94 78 888 8761</p>
        </div>

        {/* WhatsApp Prominent */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-4">You can also write to us via WhatsApp</p>
          <a
            href="https://wa.me/94788888761"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+94 78 888 8761</span>
          </a>
        </div>

        {/* Call Back Service */}
        <div className="text-center mb-8">
          <h2 className="text-sm tracking-[0.2em] font-semibold text-[#1a1a1a] mb-4">CALL BACK SERVICE</h2>
          <p className="text-sm text-gray-600 mb-8">
            Arrange a non-binding online appointment directly with one of our gemstone experts
          </p>

          {/* Team Photos */}
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4">
              <Image
                src="https://thenaturalgem.com/wp-content/uploads/2024/02/jollyschwarz-8_1x1_800.jpg?id=51401"
                alt="Team Member 1"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover border-4 border-white"
              />
              <Image
                src="https://thenaturalgem.com/wp-content/uploads/2024/02/jollyschwarz-6293_1x1_800.jpg?id=51403"
                alt="Team Member 2"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>

          <button className="border border-[#1a1a1a] px-6 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors">
            BOOK YOUR CALL
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12" />

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
