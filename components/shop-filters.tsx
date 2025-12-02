"use client"

import { useState } from "react"

const stoneTypes = [
  { name: "Ruby", color: "#dc2626" },
  { name: "Sapphire", color: "#2563eb" },
  { name: "Emerald", color: "#16a34a" },
  { name: "Tanzanite", color: "#7c3aed" },
  { name: "Tourmaline", color: "#ec4899" },
  { name: "Spinel", color: "#f43f5e" },
  { name: "Alexandrite", color: "#06b6d4" },
  { name: "Topaz", color: "#f59e0b" },
  { name: "Amethyst", color: "#8b5cf6" },
  { name: "Aquamarine", color: "#67e8f9" },
  { name: "Benitoite", color: "#3b82f6" },
  { name: "Garnet", color: "#b91c1c" },
  { name: "Morganit", color: "#fda4af" },
  { name: "Opal", color: "#e5e7eb" },
  { name: "Peridot", color: "#84cc16" },
  { name: "Others", color: "#9ca3af" },
]

export function ShopFilters() {
  const [selectedStone, setSelectedStone] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Stone Types */}
      <div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gray-200" />
          <h3 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">STONES</h3>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center">
          {stoneTypes.map((stone) => (
            <button
              key={stone.name}
              onClick={() => setSelectedStone(stone.name)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`w-10 h-10 rounded-sm transition-all ${
                  selectedStone === stone.name ? "ring-2 ring-offset-2 ring-[#1a1a1a]" : ""
                }`}
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${stone.color}88, ${stone.color})`,
                }}
              />
              <span className="text-xs text-gray-600">{stone.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price & Carat Filters */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Price */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">PRICE</h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">€0</span>
            <div className="flex-1 h-1 bg-gray-200 rounded relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded">
                €100,000
              </div>
            </div>
          </div>
        </div>

        {/* Carat */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="text-sm tracking-[0.15em] font-semibold text-[#1a1a1a]">CARAT</h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded">1ct</div>
            <div className="flex-1 h-1 bg-gray-200 rounded" />
            <div className="bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded">100ct</div>
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex justify-center">
        <button className="border border-[#1a1a1a] px-6 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors">
          MORE OPTIONS
        </button>
      </div>
    </div>
  )
}
