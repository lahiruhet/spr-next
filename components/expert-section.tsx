import Image from "next/image"
import { Play } from "lucide-react"

export function ExpertSection() {
  return (
    <section className="bg-[#33325A] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-sm md:text-base tracking-[0.25em] mb-4">
          THE EXPERT FOR NATURAL COLORED, UNTREATED GEMSTONES AND
        </h2>
        <h3 className="text-white text-sm md:text-base tracking-[0.25em] mb-8">INVESTMENTS IN THESE</h3>

        <p className="text-white/80 text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
          Let our experts advise you or buy gemstones directly online in our webshop. Of course all of our products come
          with internationally recognized certificates.
        </p>

        {/* Video Thumbnail */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden group cursor-pointer">
          <Image
            src="https://thenaturalgem.com/wp-content/uploads/2024/02/jollyschwarz-8_1x1_800.jpg?id=51401"
            alt="Expert consultation video"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#1a1a1a] ml-1" fill="currentColor" />
            </div>
          </div>
          {/* Video Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/30 rounded">
              <div className="h-full w-0 bg-[#b8860b] rounded" />
            </div>
            <span className="text-white text-xs">0:00 / 2:47</span>
          </div>
        </div>
      </div>
    </section>
  )
}
