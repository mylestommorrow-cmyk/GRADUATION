import { useState } from 'react';
import { Heart } from 'lucide-react';
import { ivyConfig } from '../data/ivyConfig';

export function JourneyHighlights() {
  const [cheerCount, setCheerCount] = useState(0);
  const [justCheered, setJustCheered] = useState(false);

  function handleCelebrate() {
    setCheerCount((c) => c + 1);
    setJustCheered(true);
    window.setTimeout(() => setJustCheered(false), 1800);
  }

  return (
    <section
      id="story"
      className="scroll-mt-20 border-y border-[#7E22CE]/15 bg-[#F8F4FC]/25 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl rounded-2xl border border-[#7E22CE]/15 bg-[#F8F4FC]/78 p-6 backdrop-blur-md">
          <p className="text-sm font-semibold text-[#DB2777]">The Story</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#241633] [text-wrap:balance] sm:text-4xl">
            Celebrating Ivy Njuguna
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5A466E]">
            Honoring her journey at {ivyConfig.university}, her inspiring spirit in the{' '}
            {ivyConfig.clubRole.replace(' Leadership', '')}, and every bright chapter ahead.
          </p>
        </div>

        {/* Featured Editorial Tribute Letter from Mark Teddy */}
        <article className="mt-8 rounded-3xl border border-[#DB2777]/25 bg-white/75 p-7 shadow-sm backdrop-blur-md sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-[#7E22CE]/12 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold text-[#7E22CE]">
                {ivyConfig.tributeLetter.eyebrow}
              </p>
              <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#241633] sm:text-3xl">
                {ivyConfig.tributeLetter.salutation}
              </h3>
            </div>

            <button
              type="button"
              onClick={handleCelebrate}
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#DB2777]/30 bg-[#FDF4F7]/85 px-4 py-2 text-xs font-semibold text-[#DB2777] transition-all duration-150 hover:border-[#DB2777] hover:bg-[#DB2777] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE] sm:self-center"
            >
              <Heart
                className={`h-4 w-4 transition-transform duration-200 ${
                  justCheered ? 'scale-125 fill-current' : ''
                }`}
                aria-hidden="true"
              />
              <span>
                {cheerCount > 0 ? `Cheering for Ivy (${cheerCount})` : 'Send a Cheer'}
              </span>
            </button>
          </div>

          <div className="mt-7 max-w-3xl space-y-5 text-base leading-[1.8] text-[#241633] sm:text-[17px]">
            {ivyConfig.tributeLetter.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#7E22CE]/10 pt-5 text-sm">
            <span className="font-serif font-semibold text-[#7E22CE]">
              — {ivyConfig.tributeLetter.signOff}
            </span>
            {justCheered && (
              <span role="status" className="text-xs font-medium text-[#DB2777]">
                Cheer sent for Ivy’s big day!
              </span>
            )}
          </div>
        </article>

        {/* 3 Story Chapters */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ivyConfig.storyChapters.map((chapter, index) => {
            const isPink = index % 2 === 0;
            return (
              <article
                key={chapter.number}
                className={`flex flex-col rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 ${
                  isPink ? 'border-[#DB2777]/25' : 'border-[#7E22CE]/25'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-medium text-[#5A466E]">
                  <span
                    className={`font-serif text-base font-semibold tabular-nums ${
                      isPink ? 'text-[#DB2777]' : 'text-[#7E22CE]'
                    }`}
                  >
                    {chapter.number}
                  </span>
                  <span>{chapter.era}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#241633]">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A466E]">
                  {chapter.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
