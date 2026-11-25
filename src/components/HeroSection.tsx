import { ArrowDownRight, Music } from 'lucide-react';
import { ivyConfig } from '../data/ivyConfig';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onPlaySoundtrackFocus: () => void;
}

export function HeroSection({ onPlaySoundtrackFocus }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FDF4F7]/20 pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Translucent Frosted Typography & Actions Card */}
          <div className="flex flex-col justify-center rounded-3xl border border-[#7E22CE]/20 bg-[#FDF4F7]/78 p-7 shadow-sm backdrop-blur-md sm:p-10 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-[#7E22CE]">
              <span>{ivyConfig.university}</span>
              <span aria-hidden="true" className="text-[#DB2777]/60">
                ·
              </span>
              <span>{ivyConfig.clubRole}</span>
              <span aria-hidden="true" className="text-[#DB2777]/60">
                ·
              </span>
              <span className="text-[#5A466E]">{ivyConfig.classYear}</span>
            </div>

            <h1
              className="mt-4 font-serif font-semibold tracking-tight text-[#241633] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.3rem, 4.1vw, 3.65rem)', lineHeight: 1.08 }}
            >
              {ivyConfig.hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5A466E] sm:text-lg">
              {ivyConfig.hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#story"
                className="inline-flex min-h-[46px] items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#DB2777] to-[#7E22CE] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity duration-150 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE]"
              >
                <span>Read Mark Teddy’s Note</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#soundtrack"
                onClick={onPlaySoundtrackFocus}
                className="inline-flex min-h-[46px] items-center gap-2 whitespace-nowrap rounded-xl border border-[#7E22CE]/30 bg-white/80 px-6 py-3 text-sm font-semibold text-[#7E22CE] shadow-sm backdrop-blur-md transition-colors duration-150 hover:border-[#DB2777]/45 hover:bg-white/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE]"
              >
                <Music className="h-4 w-4 text-[#DB2777]" aria-hidden="true" />
                <span>Listen to Still the One</span>
              </a>
            </div>
          </div>

          {/* Right Column: Graduation Portrait Frame */}
          <div className="flex flex-col lg:col-span-5">
            <figure className="flex h-full flex-col rounded-3xl border border-[#DB2777]/25 bg-white/75 p-4 shadow-sm backdrop-blur-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#7E22CE]/15 bg-[#F8F4FC]/70 lg:h-full">
                <ResilientImage
                  src={ivyConfig.hero.portraitSrc}
                  alt={ivyConfig.hero.portraitAlt}
                  fallbackTitle="Ivy Njuguna Portrait"
                  fallbackSubtitle="KCA University Graduation"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3.5 flex items-center justify-between px-1 text-xs text-[#5A466E]">
                <span className="font-semibold text-[#241633]">{ivyConfig.hero.portraitCaption}</span>
                <span className="font-medium text-[#7E22CE]">{ivyConfig.fullName}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
