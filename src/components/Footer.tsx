import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company/Portfolio Info */}
          <div>
            <h5 className="font-bold text-lg mb-3">Longjian Duan</h5>
            <p className="mb-3 text-white/80">
              Professional digital designer and developer creating innovative
              web experiences and mobile applications that drive business
              growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/roger-twan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
                  <i className="bi bi-linkedin text-xl"></i>
                </span>
              </a>
              <a
                href="https://github.com/roger-twan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white border border-neutral-700">
                  <i className="bi bi-github text-xl"></i>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-bold mb-3">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-bold mb-3">Services</h6>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80">Web Development</span>
              </li>
              <li>
                <span className="text-white/80">Mobile Development</span>
              </li>
              <li>
                <span className="text-white/80">UI/UX Design</span>
              </li>
              <li>
                <span className="text-white/80">Consulting</span>
              </li>
              <li>
                <span className="text-white/80">Brand Identity</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-bold mb-3">Contact Info</h6>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <i className="bi bi-envelope mr-2 text-white/80"></i>
                <a href="mailto:roger.twan@gmail.com" className="footer-link">
                  roger.twan@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="bi bi-telephone mr-2 text-white/80"></i>
                <a href="tel:+1234567890" className="footer-link">
                  +1 (613) 862-1168
                </a>
              </div>
              <div className="flex items-center">
                <i className="bi bi-geo-alt mr-2 text-white/80"></i>
                <span className="text-white/80">Ottawa, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p className="mb-2 md:mb-0">
            © {currentYear} Longjian Duan. All rights reserved.
          </p>
          <p>
            Built with <i className="bi bi-heart-fill text-red-500"></i> using
            Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
