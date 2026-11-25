/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { JourneyHighlights } from './components/JourneyHighlights';
import { SoundtrackSection } from './components/SoundtrackSection';
import { TopBar } from './components/TopBar';

export default function App() {
  const [soundtrackFocusTrigger, setSoundtrackFocusTrigger] = useState(0);

  return (
    <div className="relative isolate min-h-screen text-[#241633]">
      {/* Fixed full-bleed background photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#F8F4FC]"
      >
        <img
          src="/assets/aistudio/GRADUATION_59cc18fa.jpeg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Gentle translucent pink-and-lilac tint so theme colors blend over the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF4F7]/30 via-[#F8F4FC]/25 to-[#FDF4F7]/35" />
      </div>

      <div className="relative z-10">
        <TopBar />
        <main>
          <HeroSection
            onPlaySoundtrackFocus={() => setSoundtrackFocusTrigger((count) => count + 1)}
          />
          <JourneyHighlights />
          <SoundtrackSection highlightTrigger={soundtrackFocusTrigger} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
