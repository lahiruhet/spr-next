"use client"

interface GemstoneGridProps {
  gemType: string
}

const sapphireProducts = [
  { id: 1, name: "Blue Sapphire", carat: "6.62ct", origin: "VVD", cert: "GIA, GRS", price: 30000 },
  { id: 2, name: "Blue Sapphire", carat: "6.99ct", origin: "VVD", cert: "GIA, GRS", price: 10166.67 },
  { id: 3, name: "Blue Sapphire", carat: "10.80ct", origin: "VVD", cert: "GIA, GRS", price: 25000 },
  { id: 4, name: "Blue Sapphire", carat: "11.08ct", origin: "VVD", cert: "GIA, GRS GUB", price: 39583.33 },
  { id: 5, name: "Blue Sapphire", carat: "11.41ct", origin: "VVD", cert: "GIA, GRS GUB", price: 40000 },
  { id: 6, name: "Blue Sapphire", carat: "12.19ct", origin: "MC", cert: "GIA, SSEF GUB", price: 41666.67 },
  { id: 7, name: "Blue Sapphire", carat: "12.42ct", origin: "VVC", cert: "GIA, GRS GUB", price: 44166.67 },
  { id: 8, name: "Blue Sapphire", carat: "6.30ct", origin: "MC", cert: "GIA, GRS GUB", price: 34583.33 },
  { id: 9, name: "Blue Sapphire", carat: "5.97ct", origin: "MC", cert: "GIA, GUB SR", price: 55000 },
  { id: 10, name: "Blue Sapphire", carat: "9.53ct", origin: "VVD", cert: "GIA, GRS GUB", price: 27500 },
  { id: 11, name: "Blue Sapphire", carat: "4.14ct", origin: "MC", cert: "GIA, GUB", price: 39583.33 },
  { id: 12, name: "Blue Sapphire", carat: "6.19ct", origin: "MC", cert: "GIA, GUB SSAR", price: 35833.33 },
  { id: 13, name: "Blue Sapphire", carat: "7.27ct", origin: "VVD", cert: "GIA, GRS GUB", price: 22916.67 },
  { id: 14, name: "Blue Sapphire", carat: "12.39ct", origin: "VVD", cert: "GIA, SSEF GUB", price: 95833.33 },
  { id: 15, name: "Blue Sapphire", carat: "8.77ct", origin: "VVD", cert: "GUA", price: 32083.33 },
  { id: 16, name: "Blue Sapphire", carat: "6.54ct", origin: "VVD", cert: "GIA, GRS GUB", price: 37500 },
]

export function GemstoneGrid({ gemType }: GemstoneGridProps) {
  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm text-gray-600">Showing 1–16 of 298 results</p>
        <select className="border border-gray-300 px-4 py-2 text-sm focus:outline-none">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Carat: Low to High</option>
          <option>Carat: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {sapphireProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Gemstone Visual */}
            <div className="aspect-square bg-white flex items-center justify-center mb-4">
              <div
                className="w-20 h-16 rounded-sm transform rotate-12"
                style={{
                  background: "radial-gradient(ellipse at 30% 30%, #60a5fa, #1e40af)",
                  boxShadow: "0 4px 20px rgba(30, 64, 175, 0.3)",
                }}
              />
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-1">
                {product.carat} | {product.origin}
              </p>
              <p className="text-xs text-gray-500 mb-2">{product.cert}</p>
              <p className="text-sm font-semibold text-[#1a1a1a]">
                € {product.price.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="border border-[#1a1a1a] px-8 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors">
          Load more
        </button>
      </div>
    </div>
  )
}
