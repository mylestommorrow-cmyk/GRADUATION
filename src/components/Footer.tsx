import { ivyConfig } from '../data/ivyConfig';

export function Footer() {
  return (
    <footer className="bg-[#241633]/90 py-10 text-[#FDF4F7] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center sm:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-serif text-lg font-semibold text-white">{ivyConfig.fullName}</span>
          <span aria-hidden="true" className="text-[#DB2777]">
            ·
          </span>
          <span className="text-[#FDF4F7]/85">{ivyConfig.university}</span>
          <span aria-hidden="true" className="text-[#DB2777]">
            ·
          </span>
          <span className="text-[#FDF4F7]/80">
            With gratitude from {ivyConfig.tributeAuthor} — Still the One.
          </span>
        </div>

        <a
          href="#top"
          className="shrink-0 whitespace-nowrap text-xs font-semibold text-[#FDF4F7]/90 underline-offset-4 transition-colors hover:text-[#FDF4F7] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
