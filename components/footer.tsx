import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/spr-transparent.png"
              alt="SPR Gems"
              width={80}
              height={40}
              className="h-12 w-auto mb-4"
            />
            <p className="text-xs text-gray-400 mb-4">
              SPR Gems
              <br />
              Ward Place
              <br />
              Colombo
              <br />
              Sri Lanka
            </p>
            <div className="flex gap-3 mb-4">
              <Link href="#" className="text-gray-400 hover:text-[#2c3e7b] transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#2c3e7b] transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#2c3e7b] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#2c3e7b] transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#2c3e7b] transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-gray-400">info@sprgems.com</p>
            <a
              href="https://wa.me/94788888761"
              className="text-xs text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-1 mt-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +94&nbsp;78&nbsp;888&nbsp;8761
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-xs text-gray-400 mb-2">General Terms and Conditions</p>
            <p className="text-xs text-gray-400 mb-2">for Businesses</p>
            <p className="text-xs text-gray-400 mb-2">Affiliate Login</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold mb-4">Location</h4>
            <div className="w-full h-32 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4976.774870077201!2d79.8732!3d6.9156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597449a1669f%3A0x631cdd64881e98ec!2sWard%20Pl%2C%20Colombo!5e1!3m2!1sen!2slk!4v1764680152414!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SPR Gems Location"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs tracking-[0.15em] font-semibold mb-4">Company</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              SPR Gems is your gemstones dealer in the heart of Colombo. We are Sri Lanka's specialist for natural,
              untreated investment gemstones. We are your partner for investments in gemstones.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex items-center gap-4 mb-8 pt-8 border-t border-gray-800">
          <div className="text-xs text-gray-400">Payment:</div>
          <div className="flex gap-2">
            <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] text-gray-400">
              VISA
            </div>
            <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] text-gray-400">
              MC
            </div>
            <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] text-gray-400">
              AMEX
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-4 border-t border-gray-800">
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Shipping Info
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Payment
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Right of Withdrawal
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Terms & Conditions for Businesses
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-[#2c3e7b] transition-colors">
            Legal Information
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
