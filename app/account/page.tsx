"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function AccountPage() {
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
            <h1 className="text-2xl tracking-[0.3em] text-[#1a1a1a]">MY ACCOUNT</h1>
            <div className="h-px bg-[#1a1a1a]/30 w-16" />
          </div>

          {/* Login / Register Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Login */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-[#1a1a1a]/30 w-12" />
                <h2 className="text-lg tracking-[0.2em] text-[#1a1a1a]">LOGIN</h2>
                <div className="h-px bg-[#1a1a1a]/30 w-12" />
              </div>

              <div className="border border-[#1a1a1a]/20 p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2 text-[#1a1a1a]">
                      Username or email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[#1a1a1a]/30 px-4 py-2 bg-transparent focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#1a1a1a]">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        className="w-full border border-[#1a1a1a]/30 px-4 py-2 bg-transparent focus:outline-none focus:border-[#1a1a1a] pr-10 text-[#1a1a1a]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                      >
                        {showLoginPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="remember" className="text-sm text-[#1a1a1a]">
                      Remember me
                    </label>
                  </div>

                  <button className="border border-[#1a1a1a] px-6 py-2 text-sm tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a]">
                    LOG IN
                  </button>

                  <p className="text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] cursor-pointer">Lost your password?</p>
                </div>
              </div>
            </div>

            {/* Register */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-[#1a1a1a]/30 w-12" />
                <h2 className="text-lg tracking-[0.2em] text-[#1a1a1a]">REGISTER</h2>
                <div className="h-px bg-[#1a1a1a]/30 w-12" />
              </div>

              <div className="border border-[#1a1a1a]/20 p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2 text-[#1a1a1a]">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-[#1a1a1a]/30 px-4 py-2 bg-transparent focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[#1a1a1a]">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showRegisterPassword ? "text" : "password"}
                        className="w-full border border-[#1a1a1a]/30 px-4 py-2 bg-transparent focus:outline-none focus:border-[#1a1a1a] pr-10 text-[#1a1a1a]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                      >
                        {showRegisterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={acceptPrivacy}
                      onChange={(e) => setAcceptPrivacy(e.target.checked)}
                      className="w-4 h-4 mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-[#1a1a1a]">
                      Ja, ich möchte ein Kundenkonto eröffnen und akzeptiere die Datenschutzerklärung.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button className="border border-[#1a1a1a] px-6 py-2 text-sm tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a]">
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
