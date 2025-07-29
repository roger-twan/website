import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Longjian Duan
          </Link>
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
