import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Photo Slot',
  fallbackSubtitle = 'Swap image in src/data/ivyConfig.ts',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FDF4F7] via-[#F3EBF9] to-[#F8F4FC] p-6 text-center text-[#5A466E] ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#DB2777] shadow-sm">
          <ImageIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-serif text-base font-semibold text-[#241633]">{fallbackTitle}</p>
        <p className="mt-1 max-w-xs text-xs text-[#5A466E]">{fallbackSubtitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
