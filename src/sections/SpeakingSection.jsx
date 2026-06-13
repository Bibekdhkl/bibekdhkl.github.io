import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeader } from '../components/SectionHeader';
import { SpeakingCard } from '../components/SpeakingCard';
import { SPEAKING_EVENTS } from '../data/speaking';

export default function SpeakingSection({ onImageClick }) {
  return (
    <section id="speaking" className="mb-20 animate-slideUp" style={{ animationDelay: '0.4s' }}>
      <div className="mb-8 flex items-center justify-between">
        <SectionHeader
          icon={
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          }
          title="Speaking & Events"
          subtitle="A collection of events where I've spoken — invited sessions, panel discussions, and more"
        />
        <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
          <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Swipe</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-custom">
        {SPEAKING_EVENTS && SPEAKING_EVENTS.length > 0 ? (
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {SPEAKING_EVENTS.map((event) => (
              <SpeakingCard key={event.id} event={event} onImageClick={onImageClick} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12 text-slate-500">
            Speaking engagements coming soon
          </div>
        )}
      </div>
    </section>
  );
}

SpeakingSection.propTypes = {
  onImageClick: PropTypes.func.isRequired
};
