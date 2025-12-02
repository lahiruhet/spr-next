"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    degree: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Form Title */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-gray-300" />
        <h2 className="text-lg tracking-[0.2em] font-light text-[#1a1a1a]">CONTACT FORM</h2>
        <div className="h-px w-16 bg-gray-300" />
      </div>

      <p className="text-sm text-gray-600 text-center mb-8">
        Do you have a special request? Please contact us via our general contact form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block text-sm text-[#1a1a1a] mb-2">
            Your Name: <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
                required
              />
              <span className="text-xs text-gray-500 mt-1 block">First name</span>
            </div>
            <div>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
                required
              />
              <span className="text-xs text-gray-500 mt-1 block">Surname</span>
            </div>
            <div>
              <input
                type="text"
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
              />
              <span className="text-xs text-gray-500 mt-1 block">Degree</span>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-[#1a1a1a] mb-2">Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-[#1a1a1a] mb-2">
            E-Mail: <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b]"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-[#1a1a1a] mb-2">
            Your Message: <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8860b] resize-none"
            required
          />
        </div>

        {/* Captcha Placeholder */}
        <div>
          <label className="block text-sm text-[#1a1a1a] mb-2">
            hCaptcha <span className="text-red-500">*</span>
          </label>
          <div className="border border-gray-300 p-4 w-72 flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-sm text-gray-600">I am human</span>
            <div className="ml-auto text-xs text-gray-400">
              <div className="w-8 h-8 bg-[#00a4e4] rounded flex items-center justify-center text-white font-bold text-xs">
                h
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border border-[#1a1a1a] px-8 py-2 text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          SEND
        </button>
      </form>
    </div>
  )
}
