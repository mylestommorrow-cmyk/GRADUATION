import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ivyConfig } from '../data/ivyConfig';

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Soundtrack', href: '#soundtrack' },
];

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#7E22CE]/15 bg-[#FDF4F7]/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 sm:px-8">
        {/* Zone 1: Yvonne Jogona & Class of 2026 badge */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7E22CE]"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-[#241633]">
            {ivyConfig.name}
          </span>
          <span className="rounded-full border border-[#DB2777]/25 bg-gradient-to-r from-[#DB2777]/12 to-[#7E22CE]/12 px-2.5 py-0.5 text-xs font-semibold text-[#7E22CE]">
            {ivyConfig.classYear}
          </span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-medium text-[#5A466E] md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap underline-offset-4 transition-colors duration-150 hover:text-[#DB2777] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7E22CE]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile drawer toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#soundtrack"
            className="hidden shrink-0 whitespace-nowrap rounded-lg bg-[#DB2777] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#BE185D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE] sm:inline-flex"
          >
            Play Soundtrack
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#7E22CE]/20 bg-white text-[#241633] transition-colors hover:bg-[#F8F4FC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#7E22CE]/10 bg-[#FDF4F7] px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-medium text-[#241633] transition-colors hover:text-[#DB2777]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#soundtrack"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#DB2777] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#BE185D]"
            >
              Play Soundtrack
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
