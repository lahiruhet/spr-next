export function TrustBadges() {
  const badges = [
    { name: "GÜBELIN", text: "GÜBELIN" },
    { name: "GRS", text: "▶ GRS" },
    { name: "GIA", text: "GIA" },
    { name: "GLA", text: "GLA ◆" },
  ]

  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div key={badge.name} className="text-gray-400 text-lg md:text-xl font-semibold tracking-wider">
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
