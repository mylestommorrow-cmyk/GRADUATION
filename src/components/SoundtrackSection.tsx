import { useEffect, useState } from 'react';
import { ExternalLink, Link2, Music } from 'lucide-react';
import { ivyConfig } from '../data/ivyConfig';
import { ResilientImage } from './ResilientImage';

type PlayerTab = 'embed' | 'links';

/**
 * Converts standard Spotify, YouTube, or Apple Music share links into safe embed URLs.
 */
function parseEmbedUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);

    // Spotify: https://open.spotify.com/track/xyz -> https://open.spotify.com/embed/track/xyz
    if (parsed.hostname.includes('open.spotify.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.toString();
      }
      return `https://open.spotify.com/embed${parsed.pathname}${parsed.search}`;
    }

    // YouTube: watch?v=ID or youtu.be/ID -> https://www.youtube.com/embed/ID
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.toString();
      }
      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    if (parsed.hostname === 'youtu.be') {
      const id = parsed.pathname.replace('/', '');
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    // Apple Music: music.apple.com -> embed.music.apple.com
    if (parsed.hostname === 'music.apple.com') {
      return `https://embed.music.apple.com${parsed.pathname}${parsed.search}`;
    }
    if (parsed.hostname === 'embed.music.apple.com') {
      return parsed.toString();
    }

    return null;
  } catch {
    return null;
  }
}

interface SoundtrackSectionProps {
  highlightTrigger: number;
}

export function SoundtrackSection({ highlightTrigger }: SoundtrackSectionProps) {
  const [activeTab, setActiveTab] = useState<PlayerTab>('embed');
  const [embedInput, setEmbedInput] = useState(ivyConfig.soundtrack.defaultEmbedUrl);
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | null>(() =>
    parseEmbedUrl(ivyConfig.soundtrack.defaultEmbedUrl)
  );
  const [embedMessage, setEmbedMessage] = useState<string | null>(null);

  useEffect(() => {
    if (highlightTrigger > 0) {
      setActiveTab('embed');
    }
  }, [highlightTrigger]);

  function handleApplyEmbed(e: React.FormEvent) {
    e.preventDefault();
    const parsed = parseEmbedUrl(embedInput);
    if (!parsed) {
      setEmbedMessage(
        'Please paste a valid Spotify track/playlist link, YouTube link, or Apple Music share URL.'
      );
      return;
    }
    setActiveEmbedUrl(parsed);
    setEmbedMessage('Embed player loaded below. Press play inside the player whenever you are ready.');
  }

  return (
    <section
      id="soundtrack"
      className="scroll-mt-20 bg-[#FDF4F7]/20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl border border-[#7E22CE]/20 bg-white/75 p-6 shadow-sm backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Album Artwork Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#DB2777]/20 to-[#7E22CE]/20 opacity-50 blur-xl"
                />
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#DB2777]/25 bg-[#F8F4FC]/80 shadow-sm">
                  <ResilientImage
                    src={ivyConfig.soundtrack.coverSrc}
                    alt={ivyConfig.soundtrack.coverAlt}
                    fallbackTitle="Still the One · Sauti Sol"
                    fallbackSubtitle="Graduation Soundtrack Artwork"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Soundtrack Info & Player Controls */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#DB2777]">
                <span>Graduation Soundtrack</span>
                <span aria-hidden="true" className="text-[#7E22CE]/40">
                  ·
                </span>
                <span className="text-[#7E22CE]">{ivyConfig.soundtrack.album}</span>
              </div>

              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#241633] sm:text-4xl">
                “{ivyConfig.soundtrack.title}” — {ivyConfig.soundtrack.artist}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#5A466E]">
                {ivyConfig.soundtrack.dedicationCaption}
              </p>

              {/* Player Mode Tabs */}
              <div
                role="tablist"
                aria-label="Soundtrack player options"
                className="mt-6 inline-flex flex-wrap items-center gap-1 rounded-xl bg-[#F8F4FC]/85 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'embed'}
                  onClick={() => setActiveTab('embed')}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                    activeTab === 'embed'
                      ? 'bg-white text-[#7E22CE] shadow-sm'
                      : 'text-[#5A466E] hover:text-[#241633]'
                  }`}
                >
                  Spotify / YouTube Embed
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'links'}
                  onClick={() => setActiveTab('links')}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                    activeTab === 'links'
                      ? 'bg-white text-[#7E22CE] shadow-sm'
                      : 'text-[#5A466E] hover:text-[#241633]'
                  }`}
                >
                  Streaming Links
                </button>
              </div>

              {/* Tab Panel 1: Customizable Spotify / Apple Music / YouTube Embed */}
              {activeTab === 'embed' && (
                <div className="mt-5 rounded-2xl border border-[#7E22CE]/20 bg-[#F8F4FC]/75 p-5 backdrop-blur-sm">
                  <form onSubmit={handleApplyEmbed} className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="embed-url-input" className="sr-only">
                      Paste Spotify, YouTube, or Apple Music URL
                    </label>
                    <div className="relative flex-1">
                      <Link2
                        className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#5A466E]"
                        aria-hidden="true"
                      />
                      <input
                        id="embed-url-input"
                        type="url"
                        value={embedInput}
                        onChange={(e) => setEmbedInput(e.target.value)}
                        placeholder="Paste Spotify, YouTube, or Apple Music share URL..."
                        className="min-h-[44px] w-full rounded-xl border border-[#7E22CE]/25 bg-white/90 py-2.5 pr-4 pl-10 text-sm text-[#241633] placeholder:text-[#5A466E]/60 focus:border-[#DB2777] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="min-h-[44px] shrink-0 whitespace-nowrap rounded-xl bg-[#7E22CE] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6B21A8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E22CE]"
                    >
                      Load Embed
                    </button>
                  </form>

                  {embedMessage && (
                    <p className="mt-2.5 text-xs font-medium text-[#7E22CE]">{embedMessage}</p>
                  )}

                  {activeEmbedUrl ? (
                    <div className="mt-4 overflow-hidden rounded-xl border border-[#7E22CE]/15 bg-white">
                      <iframe
                        title="Still the One by Sauti Sol embedded player"
                        src={activeEmbedUrl}
                        width="100%"
                        height="152"
                        allow="encrypted-media; clipboard-write; picture-in-picture"
                        loading="lazy"
                        className="block w-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="mt-4 flex flex-col items-start justify-between gap-3 rounded-xl border border-dashed border-[#7E22CE]/30 bg-white/75 p-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-3">
                        <Music className="mt-0.5 h-5 w-5 shrink-0 text-[#DB2777]" aria-hidden="true" />
                        <div className="text-xs leading-relaxed text-[#5A466E]">
                          <p className="font-semibold text-[#241633]">
                            Embed URL Slot (No forced autoplay)
                          </p>
                          <p className="mt-0.5">
                            Paste a Spotify, Apple Music, or YouTube URL for “Still the One” above—or set{' '}
                            <code className="rounded bg-[#F8F4FC] px-1 py-0.5 text-[#7E22CE]">
                              defaultEmbedUrl
                            </code>{' '}
                            in{' '}
                            <code className="rounded bg-[#F8F4FC] px-1 py-0.5 text-[#7E22CE]">
                              src/data/ivyConfig.ts
                            </code>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab Panel 2: Direct Streaming Links */}
              {activeTab === 'links' && (
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <a
                    href={ivyConfig.soundtrack.listenLinks.spotifySearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-between rounded-xl border border-[#7E22CE]/20 bg-[#F8F4FC]/80 px-4 py-3 text-sm font-semibold text-[#241633] backdrop-blur-sm transition-colors hover:border-[#DB2777]/40 hover:bg-[#FDF4F7]"
                  >
                    <span>Spotify</span>
                    <ExternalLink className="h-4 w-4 text-[#DB2777]" aria-hidden="true" />
                  </a>
                  <a
                    href={ivyConfig.soundtrack.listenLinks.appleMusicSearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-between rounded-xl border border-[#7E22CE]/20 bg-[#F8F4FC]/80 px-4 py-3 text-sm font-semibold text-[#241633] backdrop-blur-sm transition-colors hover:border-[#DB2777]/40 hover:bg-[#FDF4F7]"
                  >
                    <span>Apple Music</span>
                    <ExternalLink className="h-4 w-4 text-[#7E22CE]" aria-hidden="true" />
                  </a>
                  <a
                    href={ivyConfig.soundtrack.listenLinks.youtubeSearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-between rounded-xl border border-[#7E22CE]/20 bg-[#F8F4FC]/80 px-4 py-3 text-sm font-semibold text-[#241633] backdrop-blur-sm transition-colors hover:border-[#DB2777]/40 hover:bg-[#FDF4F7]"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="h-4 w-4 text-[#DB2777]" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
