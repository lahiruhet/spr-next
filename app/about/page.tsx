import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gray-300" />
            <h1 className="text-2xl tracking-[0.2em] font-light text-[#1a1a1a]">ABOUT</h1>
            <div className="h-px w-16 bg-gray-300" />
          </div>

          <p className="text-center text-sm text-gray-600 mb-16">
            SPR Gems is your trusted partner for gemstone investments, operating from the heart of Colombo, Sri Lanka.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <Image
                src="/images/2.jpeg"
                alt="Suraj Angammana"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-serif text-[#1a1a1a] mb-2">Suraj Angammana</h2>
              <p className="text-sm text-gray-600 mb-6">Founder and Chief Executive Officer</p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Suraj Angammana's journey in the gemstone industry began as a child, driven by an innate passion for the
                beauty and mystery of precious stones. Growing up surrounded by Sri Lanka's rich gemological heritage,
                he developed an early fascination that would shape his entire life's work.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Through years of dedication and hands-on experience, Suraj worked his way up from humble beginnings to
                become one of the most respected figures in the gemstone trade. His deep understanding of gemstones,
                combined with an unwavering commitment to authenticity and quality, has made SPR Gems a trusted name
                among collectors and investors worldwide.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Today, from the Colombo headquarters, Suraj leads SPR Gems with the same passion that ignited his
                journey decades ago, personally overseeing the selection and certification of every exceptional stone
                that bears the SPR Gems name.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-2xl font-serif text-[#1a1a1a] mb-2">Anura Perera</h2>
              <p className="text-sm text-gray-600 mb-6">Chief Operating Officer</p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Anura Perera brings over two decades of expertise in gemstone operations and business management to SPR
                Gems. His deep knowledge of the Sri Lankan gemstone market and international trade regulations ensures
                seamless operations across all aspects of the business.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                With a background in business administration and certified gemological training, Anura oversees the
                day-to-day operations of the Colombo facility, managing everything from procurement and quality control
                to client relations and logistics. His meticulous attention to detail and commitment to excellence
                perfectly complement the company's vision.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/6.jpeg"
                alt="Anura Perera"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
