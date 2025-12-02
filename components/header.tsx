"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
          {/* Left side - Account */}
          <div className="flex items-center gap-4">
            <Link
              href="/account"
              className="hover:text-[#2c3e7b] transition-colors tracking-wider flex items-center gap-1"
            >
              ACCOUNT
              <span className="text-xs">↗</span>
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/shop" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
                SHOP
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/knowledge" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
                KNOWLEDGE
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/press" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
                PRESS
              </Link>
            </nav>
          </div>
          {/* Right side - WhatsApp prominent */}
          <div className="flex items-center">
            <a
              href="https://wa.me/94788888761"
              className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline">+94 78 888 8761</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          <button className="md:hidden absolute left-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-[#1a1a1a]" />
          </button>

          <Link href="/" className="flex items-center">
            <Image src="/images/spr-transparent.png" alt="SPR Gems" width={100} height={60} className="h-14 w-auto" />
          </Link>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1a1a1a]">
            <Link href="/investment" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              INVESTMENT
            </Link>
            <Link href="/colored-gemstones" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              COLORED GEMSTONES
            </Link>
            <Link href="/contact" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              CONTACT
            </Link>
            <Link href="/faq" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              FAQ
            </Link>
            <Link href="/ethics" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              ESG
            </Link>
            <Link href="/about" className="hover:text-[#2c3e7b] transition-colors tracking-[0.15em]">
              ABOUT
            </Link>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a]">
            <Link href="/shop" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              SHOP
            </Link>
            <Link href="/knowledge" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              KNOWLEDGE
            </Link>
            <Link href="/press" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              PRESS
            </Link>
            <hr className="my-2" />
            <Link href="/investment" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              INVESTMENT
            </Link>
            <Link href="/colored-gemstones" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              COLORED GEMSTONES
            </Link>
            <Link href="/contact" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              CONTACT
            </Link>
            <Link href="/faq" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              FAQ
            </Link>
            <Link href="/ethics" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              ESG
            </Link>
            <Link href="/about" className="hover:text-[#2c3e7b] transition-colors tracking-wider">
              ABOUT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export { Header }
