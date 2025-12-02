import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Title */}
        <div className="py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl tracking-[0.2em] font-light text-[#1a1a1a]">INVESTMENT</h1>
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gray-300" />
              <h2 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">WHY INVEST IN GEMSTONES?</h2>
              <div className="h-px w-24 bg-gray-300" />
            </div>

            <ul className="space-y-3 text-sm text-gray-600 max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones are <strong>small and easy to transport</strong> and concentrate their value in a very small
                volume.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                They are <strong>easy to pass on</strong>, for example to further generations.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                They have been used to <strong>store wealth</strong> for over <strong>5000 years</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Worldwide <strong>scarcity of gemstones</strong> especially rubies and sapphires, but also diamonds are
                becoming exhausted.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Further source countries in Asia as well as Russia are now creating <strong>high demand</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                <strong>Auctions</strong> are noting record prices.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Naturally coloured gemstones have seen a <strong>constant, strong increase in value</strong> for over 40
                years and are considered to be "non-volatile", meaning they will hold their value.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones are traded <strong>internationally</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones from SPR Gems are only sold along with an{" "}
                <strong>internationally recognized, independent certificate from a gemological institute.</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones are the most <strong>emotional way</strong> of storing wealth: nothing else of such high value
                can be worn so close to the skin and thus touched by, or affect, every day.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones are <strong>easy to store</strong>, require no effort and no servicing.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                Gemstones have <strong>no metallic characteristics</strong> and are thus easy to hide.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                <strong>Low correlation</strong> with other investment classes.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2c3e7b]">▸</span>
                <strong>Beauty of the stone</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-24 bg-gray-300" />
              <h2 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">WHY SPR GEMS?</h2>
              <div className="h-px w-24 bg-gray-300" />
            </div>

            {/* Point 1 */}
            <div className="mb-16">
              <div className="text-4xl font-light text-gray-300 mb-4">1.</div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">Fundamental factors for success</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    We have access to <strong>gemstones</strong> coloured gemstones, coloured diamonds, white diamonds
                    of the <strong>very highest quality</strong>.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    We specialise in <strong>naturally coloured, untreated gemstones</strong>. Purchasing directly in
                    the source countries without middlemen allows attractive prices for our clients.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    We <strong>certify</strong> our goods to the highest standard worldwide.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    We have <strong>30 years</strong> of market experience.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    We carry out exclusive, <strong>discreet</strong> searches for gemstones of every type.
                  </li>
                </ul>
                <Image
                  src="https://thenaturalgem.com/wp-content/uploads/2024/02/jollyschwarz-6461_1x1_800.jpg?id=51407"
                  alt="Gemstone Inspection"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Point 2 */}
            <div className="mb-16">
              <div className="text-4xl font-light text-gray-300 mb-4">2.</div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">
                Security for our clients and absolute discretion
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 max-w-2xl">
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e7b]">▸</span>
                  Investing in gemstones offers you a <strong>discreet way</strong> to diversify your portfolio without
                  having to disclose details.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e7b]">▸</span>
                  Don't know where to store your treasures? We offer you <strong>anonymous and secure</strong> storage
                  in secure deposits.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e7b]">▸</span>
                  Learn more about your investment in gemstones at <strong>exclusive events</strong> in a select
                  setting. Enjoy exquisite wines and good company with sparkling conversations.
                </li>
              </ul>
            </div>

            {/* Point 3 */}
            <div className="mb-12">
              <div className="text-4xl font-light text-gray-300 mb-4">3.</div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">Full-service provider in Sri Lanka</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Personal, first class and individual client consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Discrete delivery to any address incl. 24/7 availability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Central storage locations (e.g. duty free warehouse, high security storage)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Creation of individual high quality jewellery (wearable investment)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Organisation of suitable insurance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2c3e7b]">▸</span>
                    Repurchase or support with a desired resale
                  </li>
                </ul>
                <Image
                  src="https://thenaturalgem.com/wp-content/uploads/2024/02/jollyschwarz-6293_1x1_800.jpg?id=51403"
                  alt="Team consultation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2c3e7b] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <p className="text-sm leading-relaxed mb-6">
              SPR Gems is your partner for investments in gemstones. Based in Sri Lanka with direct access to the finest
              natural, untreated gemstones.
            </p>
            <button className="border border-white px-6 py-2 text-xs tracking-[0.15em] hover:bg-white hover:text-[#2c3e7b] transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Market Development Section */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gray-300" />
              <h2 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a] text-center">
                MARKET DEVELOPMENT AND PERFORMANCE
              </h2>
              <div className="h-px w-24 bg-gray-300" />
            </div>

            <p className="text-sm text-gray-600 mb-8 text-center">
              Since 1995 the market prices for naturally coloured, untreated gemstones have at least tripled.
            </p>

            {/* Chart Placeholder */}
            <div className="bg-gray-100 h-64 rounded mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-end justify-center gap-4 h-40">
                  <div className="w-8 bg-[#2c3e7b] h-20"></div>
                  <div className="w-8 bg-[#dc2626] h-32"></div>
                  <div className="w-8 bg-[#2563eb] h-28"></div>
                  <div className="w-8 bg-[#16a34a] h-24"></div>
                  <div className="w-8 bg-[#f59e0b] h-36"></div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Price Development Chart</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Rubies from Burma have <strong>increased in value ten-fold</strong> in 27 years,
            </p>
            <p className="text-sm text-gray-600 mb-8">
              while <strong>sapphires from Burma</strong> have <strong>increased almost eight-fold</strong>.
            </p>

            {/* Second Chart */}
            <div className="bg-gray-100 h-48 rounded mb-8 flex items-center justify-center">
              <div className="w-full max-w-md px-8">
                <div className="flex items-end justify-between h-32">
                  {[20, 35, 45, 55, 70, 85, 100].map((height, i) => (
                    <div key={i} className="w-6 bg-[#2c3e7b]" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">Growth Comparison Chart</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Long term, rubies and sapphires have performed considerably better than both gold and the Dow Jones.
            </p>
            <p className="text-sm text-gray-600">
              Naturally coloured, untreated gemstones are non-volatile and are not affected by worldwide economic
              events.
            </p>
          </div>
        </div>

        {/* Your Investment Section */}
        <div className="py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gray-300" />
              <h2 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">YOUR INVESTMENT</h2>
              <div className="h-px w-24 bg-gray-300" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">As client, you define:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• the investment sum</li>
                  <li>• any preferences or exclusions</li>
                  <li>• the delivery address and storage location.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">SPR Gems:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • suggests a <strong>suitable portfolio</strong>
                  </li>
                  <li>
                    • After complete <strong>payment, delivery</strong> is made to the relevant address.
                  </li>
                  <li>
                    • From a planned investment of USD 50,000 upwards, SPR Gems offers{" "}
                    <strong>individual consultation</strong> in your own home.
                  </li>
                  <li>
                    • On request, <strong>jewellery</strong> will be made to your specification.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-t border-gray-200">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-6">We look forward to meeting you!</h3>
            <p className="text-sm text-gray-600 mb-2">Contact us</p>
            <p className="text-sm text-[#1a1a1a] mb-1">info@sprgems.com</p>
            <p className="text-sm text-[#1a1a1a] mb-6">+94 78 888 8761</p>
            <p className="text-sm text-gray-600 mb-8">
              or arrange a non-binding online appointment directly with one of our gemstone experts.
            </p>
            <button className="border border-[#1a1a1a] px-6 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors">
              BOOK YOUR CALL
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
