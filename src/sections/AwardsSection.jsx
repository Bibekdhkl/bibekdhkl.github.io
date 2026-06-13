import React from 'react';
import PropTypes from 'prop-types';
import { AwardCard } from '../components/AwardCard';
import { recognitions, GALLERY } from '../data/awards';

/**
 * AwardsSection — Recognition & Awards grid + Moments & Milestones gallery.
 * Preserves every className, inline style, animation, and gallery masonry layout.
 */
export default function AwardsSection({ onGalleryClick }) {
  return (
    <section id="awards" className="mb-20 max-w-4xl mx-auto animate-slideUp" style={{animationDelay: '0.6s'}}>
      <div className="backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Recognition &amp; Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recognitions.map((recognition, index) => (
            <AwardCard
              key={index}
              title={recognition.title}
              year={recognition.year}
              description={recognition.description}
              index={index}
            />
          ))}
        </div>

        {/* MOMENTS & MILESTONES GALLERY */}
        <div className="mt-8 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Moments &amp; Milestones</h3>
          </div>

          <div className="gallery-masonry">
            {GALLERY.map((photo, index) => (
              <div
                key={index}
                className="gallery-masonry-item group cursor-pointer overflow-hidden rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                onClick={() => onGalleryClick(index)}
                style={{
                  animation: `fadeIn 0.5s ease-out forwards`,
                  animationDelay: `${0.7 + index * 0.08}s`,
                  opacity: 0
                }}
              >
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
                    <p className="text-white text-sm font-semibold leading-snug" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>{photo.event}</p>
                    <p className="text-white/60 text-xs mt-0.5">{photo.year}</p>
                  </div>
                  {/* Hover zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

AwardsSection.propTypes = {
  onGalleryClick: PropTypes.func.isRequired
};
