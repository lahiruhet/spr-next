import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageSquare, Gem } from "lucide-react"

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
            <h1 className="text-2xl tracking-[0.3em] text-[#1a1a1a]">ETHICS</h1>
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
          </div>

          {/* Gem Icon */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px bg-[#1a1a1a]/20 w-32" />
              <Gem className="w-6 h-6 text-[#1a1a1a]/40" />
              <div className="h-px bg-[#1a1a1a]/20 w-32" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-sm tracking-[0.2em] text-center mb-8 font-medium text-[#1a1a1a]">
            ON THE ETHICS OF GEMSTONE MINING AND TRADING
          </h2>

          {/* Content */}
          <div className="space-y-6 text-sm leading-relaxed text-[#1a1a1a]/80">
            <p>
              Ethically correct production of the gemstones we trade and the well-being of the people involved are both
              very important to us.
            </p>
            <p>
              At SPR Gems you will only find gemstones that have been produced under fair circumstances and without any
              form of child labour. We also never trade in gemstones from areas of conflict. The general world-wide
              trend in gemstone trading is also in this direction.
            </p>
            <p>
              Countries such as Sri Lanka, Mozambique and Burma have forbidden large-scale industrial mining. Sources
              are once again being leased to local families to ensure their income and financial survival, the influence
              of international companies on gemstone mining has declined considerably and local cooperations are on the
              increase.
            </p>
            <p>
              A further important point: in contrast to the mining of precious metals, gemstone mining involves neither
              the use of mercury nor acid. The simple reason for this is that they are not necessary.
            </p>
          </div>

          {/* First Quote Box */}
          <div className="my-12 border border-[#1a1a1a]/20 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-[#1a1a1a]/20 flex-1" />
              <MessageSquare className="w-5 h-5 text-[#1a1a1a]/40" />
              <div className="h-px bg-[#1a1a1a]/20 flex-1" />
            </div>
            <p className="text-center text-sm leading-relaxed text-[#1a1a1a]">
              If you would like to be 100% certain that you can rely on every step, from mining, through processing to
              transport, we recommend gemstones from Sri Lanka.
            </p>
          </div>

          {/* More Content */}
          <div className="space-y-6 text-sm leading-relaxed text-[#1a1a1a]/80">
            <p>
              SPR Gems has an exclusive cooperation with a miner owner who runs 40 gemstone mines in Sri Lanka,
              employing 400 workers, none of whom are children and very few are women. The reason why women are employed
              in administration rather than mining is simple: in Sri Lanka mining only takes place exclusively as a
              secondary process. This means that the mountains in which the gemstones were formed have already been
              eroded by natural processes and the gemstones can now be found in the sedimentary deposits of previous
              rivers.
            </p>
            <p>
              As Sri Lanka has forbidden the use of industrial machinery in order to give rural people enough work to
              do, these clay sediments are mined by hand, primarily by men, as it is physically demanding work. A
              working day is typically only from 9 am until 3:30 pm, as good light is necessary to distinguish the
              gemstones from the surrounding gravel. As the tropical evening light is not bright enough, the working day
              finishes in the afternoon.
            </p>
            <p>
              A mine operator in Sri Lanka is also responsible for the social welfare of his employees and their
              families. He pays for their doctor's and hospital bills, as well as providing a pension fund. A typical
              monthly wage for a worker in a gemstone mine is double the average wages in Sri Lanka. Most young men in
              Sri Lanka see working in mining as a positive development step, as the higher income provides them with an
              opportunity to build a home of their own.
            </p>
          </div>

          {/* Second section with quote */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="space-y-6 text-sm leading-relaxed text-[#1a1a1a]/80">
              <p>
                As is the case with Mozambique, Zambia and Burma, Sri Lanka has also mandated that all mines must be
                refilled after the removal of the gemstones, so that no permanent changes are made to the countryside.
              </p>
              <p>
                On top of this, the Sri Lankan government has also made it compulsory for all gemstones found in the
                country to also be cut in Sri Lanka, thus ensuring that the chain of economic value is extended. They
                have also established a very good local gemmological institute (Ceylon Gem Lab – CGL), that checks every
                stone that is exported from Sri Lanka, to protect the international reputation of Sri Lankan gemstones.
              </p>
            </div>

            <div className="border border-[#1a1a1a]/20 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-[#1a1a1a]/20 flex-1" />
                <MessageSquare className="w-5 h-5 text-[#1a1a1a]/40" />
                <div className="h-px bg-[#1a1a1a]/20 flex-1" />
              </div>
              <p className="text-center text-sm leading-relaxed text-[#1a1a1a]">
                As already mentioned, gemstone mining is ecologically sound because brines and acids are unnecessary and
                industrial machines are not used.
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#1a1a1a]/80 mb-12">
            We have often travelled to Sri Lanka to witness the ethical and ecological aspects of gemstone mining there
            and we invite you to accompany us on a trip to this beautiful country.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-[#1a1a1a]/20 flex-1" />
            <Gem className="w-6 h-6 text-[#1a1a1a]/40" />
            <div className="h-px bg-[#1a1a1a]/20 flex-1" />
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/gemstone-mining-sri-lanka-workers.jpg"
              alt="Gemstone mining in Sri Lanka"
              className="w-full aspect-[4/3] object-cover"
            />
            <img
              src="/local-miners-sorting-colorful-gemstones.jpg"
              alt="Local miners sorting gemstones"
              className="w-full aspect-[4/3] object-cover"
            />
            <img
              src="/gemstone-mining-community-sri-lanka-women.jpg"
              alt="Gemstone mining community"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
