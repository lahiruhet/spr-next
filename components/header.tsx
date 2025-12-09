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
          {/* Right side - Hotline */}
          <div className="flex items-center">
            <a
              href="tel:+94788888761"
              className="text-[#1a1a1a] hover:text-[#2c3e7b] transition-colors tracking-wider font-medium"
            >
              <span className="hidden sm:inline">HOTLINE: +94 78 888 8761</span>
              <span className="sm:hidden">+94 78 888 8761</span>
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
