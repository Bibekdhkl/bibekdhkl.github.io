import React, { useState, useMemo } from 'react';
import './App.css';

// Sections
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import CommunitySection from './sections/CommunitySection';
import MediaSection from './sections/MediaSection';
import SpeakingSection from './sections/SpeakingSection';
// import BlogSection from './sections/BlogSection';
import AwardsSection from './sections/AwardsSection';
import ContactSection from './sections/ContactSection';

// Components
import { Navbar } from './components/Navbar';
import { Lightbox } from './components/Lightbox';

// Data & hooks
import { NAV_ITEMS } from './data/constants';
import { GALLERY } from './data/awards';
import { useScrollSpy } from './hooks/useScrollSpy';

/**
 * App — root component replacing PortfolioHeroComplete.jsx.
 * Preserves every className, inline style, animated background, and
 * <style> block from the original monolith.
 */
export default function App() {
  // Lightbox state (simple image)
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');
  // Gallery lightbox state (with navigation)
  const [galleryIndex, setGalleryIndex] = useState(null);

  // Scrollspy
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeSection = useScrollSpy(sectionIds);

  // --- Lightbox handlers (identical logic to original) ---
  const openLightbox = (image, title) => {
    setGalleryIndex(null);
    setLightboxImage(image);
    setLightboxTitle(title);
  };

  const openGalleryLightbox = (index) => {
    setLightboxImage(null);
    setGalleryIndex(index);
  };

  const galleryPrev = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev > 0 ? prev - 1 : GALLERY.length - 1));
  };

  const galleryNext = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev < GALLERY.length - 1 ? prev + 1 : 0));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    setGalleryIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">

      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar — the original had no visible navbar; uncomment to enable */}
      {/* <Navbar navItems={NAV_ITEMS} activeSection={activeSection} /> */}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <HeroSection />
        <ExperienceSection onImageClick={openLightbox} />
        <CommunitySection onImageClick={openLightbox} />
        <MediaSection />
        <SpeakingSection />
        {/* <BlogSection /> */}
        <AwardsSection onGalleryClick={openGalleryLightbox} />
        <ContactSection />
      </div>

      {/* Lightbox (simple + gallery) */}
      <Lightbox
        lightboxImage={lightboxImage}
        lightboxTitle={lightboxTitle}
        galleryIndex={galleryIndex}
        galleryItems={GALLERY}
        onClose={closeLightbox}
        onGalleryPrev={galleryPrev}
        onGalleryNext={galleryNext}
      />

      {/* Styles — identical to original <style> block */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }

        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #0891b2, #2563eb);
        }

        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .gallery-masonry {
          columns: 1;
          column-gap: 1rem;
        }

        @media (min-width: 768px) {
          .gallery-masonry {
            columns: 2;
          }
        }

        .gallery-masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}