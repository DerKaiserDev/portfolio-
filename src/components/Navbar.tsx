import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggle: () => void;
}

const links = [
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navClass = isDark
    ? scrolled ? 'navbar-glass-dark' : 'bg-transparent'
    : scrolled ? 'navbar-glass-light' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-medium text-cyan-400 tracking-widest hover:text-cyan-300 transition-colors"
        >
          C.D.S
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isDark
                  ? 'text-white/60 hover:text-white'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggle}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'text-white/50 hover:text-white hover:bg-white/5'
                : 'text-gray-400 hover:text-gray-700 hover:bg-black/5'
            }`}
            aria-label="Changer le thème"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            className="px-4 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-lg hover:border-cyan-400/80 hover:bg-cyan-400/5 transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggle}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-700'
            }`}
            aria-label="Changer le thème"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 ${isDark ? 'navbar-glass-dark' : 'navbar-glass-light'}`}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors py-1 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-lg text-center hover:border-cyan-400/70 transition-all"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
