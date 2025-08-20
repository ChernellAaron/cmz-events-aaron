'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image' // Import Next.js Image component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            {/* Replace text logo with Image component */}
            <Image
              src="/logo.png" // Path to your logo image in public folder
              alt="CMZ Events Logo"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
              className="h-auto" // Maintain aspect ratio
              priority // Optional: if this is above the fold
            />
          </Link>

          {/* Desktop Navigation - rest remains the same */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" text="Home" current={pathname === '/'} />
            <NavLink href="/services" text="Services" current={pathname === '/services'} />
            <NavLink href="/about" text="About Us" current={pathname === '/about'} />
            <NavLink href="/contact" text="Contact" current={pathname === '/contact'} />
          </div>

          {/* Mobile Menu Button - rest remains the same */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - rest remains the same */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/" text="Home" toggleMenu={toggleMenu} />
              <MobileNavLink href="/services" text="Services" toggleMenu={toggleMenu} />
              <MobileNavLink href="/about" text="About Us" toggleMenu={toggleMenu} />
              <MobileNavLink href="/contact" text="Contact" toggleMenu={toggleMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Rest of your NavLink and MobileNavLink components remain the same
function NavLink({ href, text, current }: { href: string; text: string; current: boolean }) {
  return (
    <Link
      href={href}
      className={`${
        current ? 'text-blue-600' : 'text-gray-800'
      } hover:text-blue-600 font-medium transition-colors duration-200`}
    >
      {text}
    </Link>
  )
}

function MobileNavLink({ href, text, toggleMenu }: { href: string; text: string; toggleMenu: () => void }) {
  return (
    <Link
      href={href}
      onClick={toggleMenu}
      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg font-medium"
    >
      {text}
    </Link>
  )
}