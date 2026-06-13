import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Lightbox — handles two modes:
 *   1. Simple image lightbox (experience / community images)
 *   2. Gallery lightbox with prev/next navigation (awards gallery)
 *
 * Includes useEffect cleanup for Escape key dismissal.
 */
export function Lightbox({
  // Simple lightbox props
  lightboxImage,
  lightboxTitle,
  // Gallery lightbox props
  galleryIndex,
  galleryItems,
  // Callbacks
  onClose,
  onGalleryPrev,
  onGalleryNext
}) {
  // Escape key handler
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (galleryIndex !== null) {
        if (e.key === 'ArrowLeft') onGalleryPrev(e);
        if (e.key === 'ArrowRight') onGalleryNext(e);
      }
    },
    [onClose, galleryIndex, onGalleryPrev, onGalleryNext]
  );

  useEffect(() => {
    const isOpen = lightboxImage || galleryIndex !== null;
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage, galleryIndex, handleKeyDown]);

  // Render simple image lightbox
  if (lightboxImage) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div className="relative max-w-5xl w-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt={lightboxTitle}
            className="w-full h-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white text-center mt-4 text-lg">{lightboxTitle}</p>
        </div>
      </div>
    );
  }

  // Render gallery lightbox with navigation
  if (galleryIndex !== null && galleryItems[galleryIndex]) {
    const photo = galleryItems[galleryIndex];
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
        style={{backgroundColor: 'rgba(0,0,0,0.9)'}}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white hover:text-cyan-400 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev arrow */}
        <button
          onClick={onGalleryPrev}
          className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{color: '#22d3ee'}}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <div className="flex flex-col items-center px-16" onClick={(e) => e.stopPropagation()}>
          <img
            src={photo.src}
            alt={photo.caption}
            className="rounded-lg shadow-2xl"
            style={{maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain'}}
          />
          <div className="mt-4 text-center">
            <p className="text-white text-lg font-semibold" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
              {photo.event}
            </p>
            <p className="text-slate-400 text-sm mt-1">
              {photo.caption} · {photo.year}
            </p>
          </div>
          {/* Counter */}
          <p className="text-slate-600 text-xs mt-3">{galleryIndex + 1} / {galleryItems.length}</p>
        </div>

        {/* Next arrow */}
        <button
          onClick={onGalleryNext}
          className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{color: '#22d3ee'}}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  return null;
}

Lightbox.propTypes = {
  lightboxImage: PropTypes.string,
  lightboxTitle: PropTypes.string,
  galleryIndex: PropTypes.number,
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired
    })
  ),
  onClose: PropTypes.func.isRequired,
  onGalleryPrev: PropTypes.func,
  onGalleryNext: PropTypes.func
};

Lightbox.defaultProps = {
  lightboxImage: null,
  lightboxTitle: '',
  galleryIndex: null,
  galleryItems: [],
  onGalleryPrev: () => {},
  onGalleryNext: () => {}
};
