import React from 'react';
import PropTypes from 'prop-types';
import { ExperienceCard } from '../components/ExperienceCard';
import { SectionHeader } from '../components/SectionHeader';
import { experiences } from '../data/experiences';

/**
 * ExperienceSection — horizontal scrolling experience cards.
 * Preserves exact section structure, header layout, scroll indicator, and card rendering.
 */
export default function ExperienceSection({ onImageClick }) {
  return (
    <section id="experience" className="mb-20 animate-slideUp">
      <div className="mb-8 flex items-center justify-between">
        <SectionHeader
          icon={
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          }
          title="Experience"
          subtitle="Scroll horizontally to explore →"
        />
        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
          <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Swipe</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-custom">
        <div className="flex gap-6" style={{ width: 'max-content' }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              name={exp.name}
              role={exp.role}
              startDate={exp.startDate}
              endDate={exp.endDate}
              location={exp.location}
              description={exp.description}
              technologies={exp.technologies}
              images={exp.images}
              achievements={exp.achievements}
              color={exp.color}
              index={index}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ExperienceSection.propTypes = {
  onImageClick: PropTypes.func.isRequired
};
