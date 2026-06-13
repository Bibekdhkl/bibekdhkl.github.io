import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function SpeakingCard({ event, onImageClick }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 w-[380px] flex-shrink-0 flex flex-col h-full snap-start">
      {/* 1. Meta Row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          {event.type}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
          event.status === 'Upcoming' 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-white/5 text-slate-400 border-white/10'
        }`}>
          ● {event.status}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
          {event.event}
        </span>
      </div>

      {/* 2. Title */}
      <h4 className="text-[17px] font-semibold text-[#f1f5f9] mb-1 leading-snug" style={{ fontFamily: '"Space Mono", monospace' }}>
        {event.title}
      </h4>

      {/* 3. Org Line */}
      <p className="text-[13px] text-[#64748b] mb-4 font-medium" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
        {event.organization} · {event.location} · {event.date}
      </p>

      {/* 4. Image Strip */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-4 scrollbar-thin snap-x snap-mandatory">
        {event.images && event.images.length > 0 ? (
          event.images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.caption}
              className="w-[140px] h-[88px] rounded-lg object-cover cursor-pointer flex-shrink-0 snap-start transition-transform duration-200 hover:scale-[1.02]"
              onClick={() => onImageClick(event.images.map(img => img.src), idx, event.event)}
            />
          ))
        ) : (
          <div className="w-[140px] h-[88px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#334155]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        )}
      </div>

      {/* 5. Description */}
      <div className="mb-5 flex-1">
        <p className={`text-[13px] text-[#94a3b8] leading-[1.7] ${!expanded ? 'line-clamp-4' : ''}`} style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
          {event.description}
        </p>
        {event.description.length > 150 && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-xs text-cyan-400 mt-1 font-medium hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* 6. Key Takeaway Block */}
      <div className="w-full bg-[#22d3ee]/[.06] border border-[#22d3ee]/15 rounded-[10px] p-3 flex gap-3 mb-5">
        <svg className="w-5 h-5 text-[#22d3ee] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <div>
          <h5 className="text-[11px] font-bold text-[#22d3ee] uppercase tracking-wider mb-1" style={{ fontFamily: '"Space Mono", monospace' }}>Key Takeaway</h5>
          <p className="text-[13px] text-[#cbd5e1] leading-snug" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
            {event.takeaway}
          </p>
        </div>
      </div>

      {/* 7. Action Buttons Row */}
      {event.links && Object.values(event.links).some(link => link !== null) && (
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 mt-auto">
          {event.links.eventPage && (
            <a href={event.links.eventPage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#22d3ee]/10 text-[#22d3ee] hover:bg-[#22d3ee]/20 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Event page
            </a>
          )}
          {event.links.slides && (
            <a href={event.links.slides} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#a78bfa]/10 text-[#a78bfa] hover:bg-[#a78bfa]/20 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
              Slides
            </a>
          )}
          {event.links.recording && (
            <a href={event.links.recording} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 hover:bg-white/10 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Recording
            </a>
          )}
          {event.links.linkedinPost && (
            <a href={event.links.linkedinPost} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 hover:bg-white/10 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Post
            </a>
          )}
          {event.links.twitterThread && (
            <a href={event.links.twitterThread} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 hover:bg-white/10 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              Thread
            </a>
          )}
          {event.links.article && (
            <a href={event.links.article} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 hover:bg-white/10 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              Article
            </a>
          )}
        </div>
      )}


    </div>
  );
}

SpeakingCard.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    takeaway: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
      })
    ).isRequired,
    links: PropTypes.shape({
      eventPage: PropTypes.string,
      slides: PropTypes.string,
      recording: PropTypes.string,
      linkedinPost: PropTypes.string,
      twitterThread: PropTypes.string,
      article: PropTypes.string
    })
  }).isRequired
};
