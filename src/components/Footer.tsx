import { Linkedin } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`border-t py-10 ${
        isDark
          ? 'bg-[#050a10] border-white/5'
          : 'bg-[#fafafa] border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-white/25' : 'text-gray-300'}`}>
          <span className="font-mono text-cyan-400/60 font-medium">C.D.S</span>
          <span>&middot;</span>
          <span>2026</span>
          <span>&middot;</span>
          <span>Conçu &amp; développé avec soin</span>
        </div>
        {/* <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDark ? 'text-white/20 hover:text-cyan-400' : 'text-gray-300 hover:text-cyan-600'
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a> */}
      </div>
    </footer>
  );
}
