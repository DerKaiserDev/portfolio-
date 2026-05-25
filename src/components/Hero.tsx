interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'dot-grid-dark' : 'dot-grid-light'
      }`}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(34,211,238,0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(34,211,238,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Monospace tag */}
        <div className="mb-6 flex justify-center">
          <span
            className={`font-mono text-sm px-4 py-1.5 rounded-full border ${
              isDark
                ? 'text-cyan-400/70 border-cyan-500/20 bg-cyan-500/5'
                : 'text-cyan-600/80 border-cyan-500/25 bg-cyan-500/5'
            }`}
          >
            {'Spécialisation en Génie Logiciel et Développement Web'}
          </span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-5 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          style={{ lineHeight: 1.1 }}
        >
          Cheikh{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Djibril SALL
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto ${
            isDark ? 'text-white/55' : 'text-gray-500'
          }`}
        >
          Je conçois des applications web qui allient performance et expérience utilisateur.
        </p>

        {/* Availability badge */}
        <div className="flex justify-center mb-10">
          <div
            className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                : 'bg-emerald-50 border border-emerald-200 text-emerald-600'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Disponible pour des opportunités
          </div>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#050a10] bg-cyan-400 hover:bg-cyan-300 transition-all duration-200"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.1)' }}
        >
          Voir mes projets
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, transparent, #050a10)'
            : 'linear-gradient(to bottom, transparent, #fafafa)',
        }}
      />
    </section>
  );
}
