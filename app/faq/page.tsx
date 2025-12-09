"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

const topics = ["Investment and performance", "Gemmology", "Gemstones purchase", "Gemstones storage", "Gemstones sale"]

const faqContent = [
  {
    question: "Why invest in gemstones?",
    answer:
      "Gemstones are small and light, retain their value and concentrate it in a far smaller volume than other renowned investments, such as gold. They are easy to store, transport and pass on.",
  },
  {
    question: "Which gemstones make suitable investments?",
    answer:
      "Naturally coloured, untreated gemstones, especially rubies, sapphires and emeralds. For very long term investments, diamonds are also suitable. Should you already have such a portfolio, then tourmaline, alexandrite and tanzanite are an excellent addition.",
  },
  {
    question: "Are all rubies, sapphires, emeralds and diamonds suitable investments?",
    answer:
      "Only high quality, naturally coloured, untreated gemstones are suitable. Size is also a factor: an investment in coloured gemstones begins with a weight of 1 ct, for diamonds the weight should be at least 0.5 ct.",
  },
  {
    question: "For whom are gemstones a suitable investment?",
    answer:
      "For people who already have other investments and wish to invest 10 – 20% of their capital in something that is physically real, beautiful and easily transportable.",
  },
  {
    question: "Should the gemstones I buy be ones I desire, or is it just a question of buying what is recommended?",
    answer:
      'SPR Gems recommends only purchasing stones that you personally find desirable: a gemstone is not purely an investment, but as with other beautiful things it also provides pleasure. Our experience shows that when the time for resale comes, gemstones that the owner finds attractive are easy to sell. In this context we talk about gemstones that have "life" to them: lively gemstones are scintillating to look at and appealing to the beholder. Only purchase gemstones that you find attractive.',
  },
  {
    question: "How long is the investment horizon for gemstone investments?",
    answer:
      "Gemstones are an ideal way of storing and concentrating value in a very small volume. There is nothing speculative about them. SPR Gems recommends an investment period of at least 5 – 10 years.",
  },
  {
    question: "What returns can I expect from an investment in gemstones?",
    answer:
      "The last 25 years show that the value of rubies has increased by over 8 % p.a., while that of sapphires and emeralds has increased by roughly 4 – 6 % p.a. White diamonds have unfortunately lost value since the financial crisis of 2008.",
  },
  {
    question:
      "Why only the above-mentioned gemstones? What about alexandrite, tanzanite, aquamarine, tourmaline, coloured diamonds and so on?",
    answer:
      "To begin with we always recommend the best-known coloured gemstones: rubies, sapphires and emeralds. Once you have a portfolio of these, purchasing other types of gemstone can be a useful addition.",
  },
  {
    question: "Are diamonds more valuable than coloured gemstones?",
    answer:
      "For small stones of 1ct or less, yes. However, as the size increases, this relationship changes: a 10 ct ruby, for example, costs more than a diamond of the same weight.",
  },
  {
    question: "How much money should I invest in gemstones?",
    answer: "SPR Gems recommends investing 10 – 20 % of your liquid capital.",
  },
  {
    question: "Can I wear the gemstones I have invested in as jewellery?",
    answer:
      "Gemstones have always been a highly emotional, wearable investment; both the setting and removal of gemstones can be done without causing damage to the stones themselves. SPR Gems will happily arrange for your gemstones to be set in whatever kind of jewellery you desire.",
  },
  {
    question: "Why do gemstones hold their value?",
    answer:
      "Gemstones have been highly sought after for over 5000 years and every dynasty has possessed collections of jewellery and/or gemstones. Some examples of this can be seen in the Kremlin, The Tower of London and the Imperial Treasury. Good gemstones have always been in demand and this demand will remain in the future. In times of war and crisis gemstones have always been considered a safe-haven currency.",
  },
]

export default function FAQPage() {
  const [selectedTopic, setSelectedTopic] = useState("Investment and performance")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Chat Icon */}
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-[#1a1a1a]/60" />
          </div>

          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
            <h1 className="text-2xl tracking-[0.3em] text-[#1a1a1a]">FAQ</h1>
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
          </div>

          <p className="text-center text-[#1a1a1a]/70 mb-8">Please choose a topic</p>

          {/* Topics */}
          <div className="space-y-0 mb-12">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full py-3 text-center border-b border-[#1a1a1a]/20 transition-colors text-[#1a1a1a] ${
                  selectedTopic === topic ? "bg-[#1a1a1a]/5 font-medium" : "hover:bg-[#1a1a1a]/5"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] text-center mb-12 font-medium text-[#1a1a1a]">
              INVESTMENT AND PERFORMANCE
            </h2>

            <div className="space-y-8">
              {faqContent.map((item, index) => (
                <div key={index}>
                  <h3 className="font-medium mb-3 text-[#1a1a1a]">{item.question}</h3>
                  <p className="text-[#1a1a1a]/70 leading-relaxed text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
