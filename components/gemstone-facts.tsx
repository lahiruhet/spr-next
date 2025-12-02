interface GemstoneFactsProps {
  gemType: string
}

export function GemstoneFacts({ gemType }: GemstoneFactsProps) {
  return (
    <div className="bg-[#f5f5f0] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gray-400" />
          <h2 className="text-lg tracking-[0.2em] font-light text-[#1a1a1a]">FACTS</h2>
          <div className="h-px w-16 bg-gray-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Properties */}
          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">properties of sapphire</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Belongs mineralogically to corundum
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Hardness grade 9
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Chemical formula: Al2O3
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Includes <strong>all colors except red</strong>, red corundum is called "ruby"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Coloration generally by <strong>metal oxides</strong> (e.g. blue: titanium oxide)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                High density of 3.9 - 4.1
              </li>
            </ul>
          </div>

          {/* Origin */}
          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">origin</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Kashmir
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Burma
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Thailand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Kambodscha
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Sri Lanka
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Madagascar
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Äthiopien
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Pakistan
              </li>
            </ul>
          </div>

          {/* Worth Knowing */}
          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">worth knowing</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Oldest known locality: Burma
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                The legendary place of discovery: <strong>"Kashmir"</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Assigned to the planet Saturn
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Besides blue, pink sapphire is especially sought after: "hot pink"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                The most recently discovered localities are Madagascar and Ethiopia
              </li>
            </ul>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">investment in sapphire</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                second most suitable of all gemstones for investment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                less rare than ruby but also <strong>strongly increasing in value</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Stones should have at least 1 ct weight, better from 3 ct.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                larger stones have <strong>higher increase</strong> in value
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                Experts reckon with <strong>4% increase in value per year</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b]">▸</span>
                beautiful sparkling sapphires are preferable
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
