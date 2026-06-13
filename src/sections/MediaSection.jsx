import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { podcasts, videos } from '../data/media';

/**
 * MediaSection — Content & Media section with podcasts and YouTube subsections.
 * Preserves every className, inline style, SVG icon, and animation from the original.
 */
export default function MediaSection() {
  return (
    <section id="media" className="mb-20 animate-slideUp" style={{ animationDelay: '0.45s' }}>
      <div className="mb-8 flex items-center justify-between">
        <SectionHeader
          icon={
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          }
          title="Content & Media"
          subtitle="Podcasts, talks, and video content"
        />
      </div>

      {/* PODCASTS SUBSECTION */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-rose-400 mb-5 uppercase tracking-wider flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM9 4a3 3 0 016 0v8a3 3 0 01-6 0V4z" />
            <path d="M19 10v2a7 7 0 01-14 0v-2H3v2a9 9 0 004 7.46V22h2v-2.54a8.96 8.96 0 002 .54 8.96 8.96 0 002-.54V22h2v-2.54A9 9 0 0021 12v-2h-2z" />
          </svg>
          Podcasts
        </h3>
        <div className="overflow-x-auto pb-6 scrollbar-custom">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-rose-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 flex flex-col"
                style={{
                  width: '380px',
                  animation: `slideRight 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Show name & date */}
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">{podcast.show} · {podcast.date}</p>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-3 leading-snug" style={{ fontFamily: '"Space Mono", monospace' }}>
                  {podcast.title}
                </h4>

                {/* Platform pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {podcast.platforms.map((platform, pIndex) => (
                    <a
                      key={pIndex}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-200 hover:scale-105 ${platform.name === 'Spotify'
                        ? 'bg-green-500/15 border-green-500/40 text-green-400 hover:bg-green-500/25'
                        : 'bg-white/10 border-slate-600 text-slate-300 hover:bg-white/20'
                        }`}
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontFamily: '"IBM Plex Sans", sans-serif'
                }}>
                  {podcast.description}
                </p>

                {/* Listen button */}
                {/* <button className="self-start px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Listen →
                </button> */}

                {/* Listen button */}
                <a
                  href={podcast.link} // <-- Adjust 'item.link' to match your map variable name
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start"
                >
                  <button className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Listen →
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* YOUTUBE SUBSECTION */}
      <div>
        <h3 className="text-lg font-bold text-rose-400 mb-5 uppercase tracking-wider flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          YouTube
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-cyan-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
              style={{
                animation: `fadeIn 0.5s ease-out forwards`,
                animationDelay: `${0.45 + index * 0.08}s`,
                opacity: 0
              }}
            >
              {/* Embedded YouTube Player Video Box */}
              <div className="relative w-full bg-slate-900 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {video.embedId ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : video.thumbnail ? (
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-400/15 border-2 border-cyan-400/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/25 transition-all duration-300">
                      <svg className="w-7 h-7 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Area Footer - Still linkable to original YouTube page */}
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5"
              >
                <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors" style={{ fontFamily: '"Space Mono", monospace' }}>
                  {video.title}
                </h4>
                <p className="text-xs text-slate-500">{video.date}</p>
                <span className="inline-block mt-3 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">
                  Open on YouTube →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
