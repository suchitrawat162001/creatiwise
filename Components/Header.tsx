"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-[#010208]">
      <header className="w-full px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">

          <div className="flex items-center">
            <Link href="/" className="text-[#ffffff] text-xl sm:text-2xl font-bold">
              <svg
                width="47"
                height="32"
                viewBox="0 0 47 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-6 sm:w-12 sm:h-8"
              >
                <rect width="9.48148" height="32" fill="white" />
                <rect x="23.7036" width="9.48148" height="32" fill="white" />
                <ellipse cx="16.5927" cy="7.11123" rx="5.92593" ry="5.92593" fill="white" />
                <ellipse cx="40.2963" cy="24.8888" rx="5.92593" ry="5.92593" fill="white" />
              </svg>
            </Link>
          </div>


          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/"
              className="bg-[#ffffff] text-[#010208] px-4 xl:px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#ffffff] px-4 xl:px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[#ffffff] px-4 xl:px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-[#ffffff] px-4 xl:px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
          </div>


          <div className="hidden lg:flex items-center">
            <button className="border-[#ffffff] text-[#ffffff] bg-transparent border-2 hover:bg-[#ffffff] hover:text-[#010208] px-4 xl:px-6 py-2 rounded-full text-sm font-medium transition-colors">
              HIRE ME
            </button>
          </div>


          <div className="lg:hidden flex items-center space-x-4">

            <button className="border-[#ffffff] text-[#ffffff] bg-transparent border-2 hover:bg-[#ffffff] hover:text-[#010208] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">
              HIRE ME
            </button>


            <button
              onClick={toggleMenu}
              className="text-[#ffffff] p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>


        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6">
            <div className="flex flex-col space-y-3 max-w-7xl mx-auto">
              <Link
                href="/"
                className="bg-[#ffffff] text-[#010208] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#ffffff] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-[#ffffff] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-[#ffffff] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
