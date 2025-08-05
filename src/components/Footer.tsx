import Link from 'next/link';
import Image from 'next/image';

import IconEmail from '@public/icons/email.svg';
import IconPhone from '@public/icons/phone.svg';
import IconLocation from '@public/icons/location.svg';

import { socialLinks } from './SocialMedia';

interface NavItem {
  href: string;
  label: string;
}

export const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company/Portfolio Info */}
          <div>
            <Link
              href="/"
              className="flex items-center justify-center mb-3 md:justify-start md:-ml-1.5"
            >
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <span className="font-bold text-lg pt-2.5 -ml-1.5">
                oger Twan
              </span>
            </Link>
            <p className="text-white/80">
              Professional digital creator building elegant, performant web and
              mobile applications through a blend of design thinking and modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-bold mb-3">Quick Links</h6>
            <ul className="grid grid-cols-2 gap-2 w-40 m-auto md:m-0 text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="font-bold mb-3">Social Media</h6>
            <div className="inline-block space-y-2">
              {socialLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex items-center text-white/80 hover:text-white"
                >
                  <div className="mr-2 size-4">{link.icon}</div>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-bold mb-3">Contact Info</h6>
            <div className="inline-block space-y-2">
              <div className="flex items-center text-white/80 hover:text-white">
                <IconEmail className="size-5 mr-2" />
                <a href="mailto:roger.twan@gmail.com">roger.twan@gmail.com</a>
              </div>
              <div className="flex items-center text-white/80 hover:text-white">
                <IconPhone className="size-5 mr-2" />
                <a href="tel:+1234567890">+1 (613) 862-1168</a>
              </div>
              <div className="flex items-center text-white/80">
                <IconLocation className="size-5 mr-1" />
                <span>Ottawa, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p className="mb-2 md:mb-0">
            © {currentYear} Roger Twan. All rights reserved.
          </p>
          <p>
            Built with{' '}
            <a
              className="hover:text-white"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{' '}
            &amp;{' '}
            <a
              className="hover:text-white"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            , seamlessly integrated with{' '}
            <a
              className="hover:text-white"
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Obsidian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
