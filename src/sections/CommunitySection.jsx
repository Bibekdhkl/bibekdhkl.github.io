import React from 'react';
import PropTypes from 'prop-types';
import { CommunityCard } from '../components/CommunityCard';
import { SectionHeader } from '../components/SectionHeader';
import { communities } from '../data/community';

/**
 * CommunitySection — horizontal scrolling community cards.
 * Preserves exact section structure, header, scroll indicator, and card rendering.
 */
export default function CommunitySection({ onImageClick }) {
  return (
    <section id="community" className="mb-20 animate-slideUp" style={{ animationDelay: '0.3s' }}>
      <div className="mb-8 flex items-center justify-between">
        <SectionHeader
          icon={
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          }
          title="Community Work"
          subtitle="Scroll horizontally to explore →"
        />
        {/* <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
          <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Swipe</span>
        </div> */}
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-custom">
        <div className="flex gap-6" style={{ width: 'max-content' }}>
          {communities.map((community, index) => (
            <CommunityCard
              key={index}
              name={community.name}
              role={community.role}
              startDate={community.startDate}
              endDate={community.endDate}
              description={community.description}
              contributions={community.contributions}
              impact={community.impact}
              images={community.images}
              color={community.color}
              index={index}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

CommunitySection.propTypes = {
  onImageClick: PropTypes.func.isRequired
};
