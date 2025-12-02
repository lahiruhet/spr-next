"use client"

const shopProducts = [
  { id: 1, name: "Alexandrite", carat: "4.15ct", origin: "VVB", cert: "GIA, RSG", price: 10416.67 },
  { id: 2, name: "Alexandrite", carat: "1.21ct", origin: "WNC", cert: "GUA", price: 1250 },
  { id: 3, name: "Alexandrite", carat: "0.67ct", origin: "WNC", cert: "GIA, PSL", price: 666.67 },
  { id: 4, name: "Alexandrite", carat: "1.10ct", origin: "WND", cert: "GIA, LOI", price: 1250 },
  { id: 5, name: "Alexandrite", carat: "1.26ct", origin: "WNC", cert: "GIA LOI", price: 1500 },
  { id: 6, name: "Alexandrite", carat: "1.42ct", origin: "WND", cert: "GIA LOI", price: 1500 },
  { id: 7, name: "Alexandrite", carat: "1.73ct", origin: "WND", cert: "GIA LOI", price: 2000 },
  { id: 8, name: "Alexandrite", carat: "0.98ct", origin: "WND", cert: "GIA LGA", price: 1333.33 },
  { id: 9, name: "Alexandrite", carat: "2.58ct", origin: "WNC", cert: "GIA, RSG", price: 3916.67 },
  { id: 10, name: "Alexandrite", carat: "1.38ct", origin: "WND", cert: "GIA LOI", price: 2166.67 },
  { id: 11, name: "Alexandrite", carat: "2.02ct", origin: "WNC", cert: "GIA LOI", price: 4833.33 },
  { id: 12, name: "Alexandrite", carat: "1.02ct", origin: "WNC", cert: "GIA", price: 6250 },
  { id: 13, name: "Amethyst", carat: "47.28ct", origin: "VVB", cert: "GIA", price: 750 },
  { id: 14, name: "Amethyst", carat: "53.90ct", origin: "N/A", cert: "GIA", price: 1083.33 },
  { id: 15, name: "Ametrine", carat: "13.69ct", origin: "N/B", cert: "GIA", price: 416.67 },
  { id: 16, name: "Ametrine", carat: "10.59ct", origin: "BVB", cert: "GIA", price: 416.67 },
]

export function ShopGrid() {
  const getGemColor = (name: string) => {
    switch (name) {
      case "Alexandrite":
        return { from: "#06b6d4", to: "#0891b2" }
      case "Amethyst":
        return { from: "#8b5cf6", to: "#7c3aed" }
      case "Ametrine":
        return { from: "#f59e0b", to: "#8b5cf6" }
      default:
        return { from: "#9ca3af", to: "#6b7280" }
    }
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm text-gray-600">Showing 1–16 of 694 results</p>
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
        {shopProducts.map((product) => {
          const colors = getGemColor(product.name)
          return (
            <div key={product.id} className="group cursor-pointer">
              {/* Gemstone Visual */}
              <div className="aspect-square bg-white flex items-center justify-center mb-4">
                <div
                  className="w-16 h-14 rounded-sm"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${colors.from}, ${colors.to})`,
                    boxShadow: `0 4px 20px ${colors.to}40`,
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

              {/* Category Label */}
              <p className="text-center text-xs text-gray-400 mt-2">{product.name}</p>
            </div>
          )
        })}
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
