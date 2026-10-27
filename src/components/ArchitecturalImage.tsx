import React, { useState } from 'react';
import { Building2, Layers } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '16/10' | '4/3' | '1/1' | '3/4' | '21/9' | 'auto';
  title?: string;
  category?: string;
  showOverlay?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  title,
  category,
  showOverlay = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '16/9':
        return 'aspect-video';
      case '16/10':
        return 'aspect-[16/10]';
      case '4/3':
        return 'aspect-[4/3]';
      case '3/4':
        return 'aspect-[3/4]';
      case '1/1':
        return 'aspect-square';
      case '21/9':
        return 'aspect-[21/9]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#F8F9FA] ${getAspectClass()} ${className}`}
    >
      {/* Clean architectural loading / fallback placeholder */}
      {(!isLoaded || hasError) && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 bg-[#F8F9FA] border border-[#E8ECF0] ${
            isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#547A9B] font-medium font-sans">
              <Building2 className="w-3.5 h-3.5" />
              <span>{category || 'Attard Bros Group'}</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-[#344B62] font-mono">
              EST. 1977 · MALTA
            </span>
          </div>

          <div className="relative z-10">
            <h4 className="text-base font-medium text-[#062746] tracking-tight">
              {title || alt}
            </h4>
            <p className="text-xs text-[#344B62] mt-1 flex items-center gap-1.5 font-sans">
              <Layers className="w-3.5 h-3.5 text-[#547A9B]" />
              <span>Precision Construction & Materials</span>
            </p>
          </div>
        </div>
      )}

      {/* Main image with clean cover object-fit */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Subtle neutral scrim overlay if explicitly requested */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#062746]/60 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};
