import React from 'react';
import PropTypes from 'prop-types';
import { TechPill } from './TechPill';
import { getGradientColors } from '../data/constants';

/**
 * ExperienceCard — full experience entry with header, tech pills,
 * image gallery strip, and achievements list.
 * All classNames, inline styles, and event handlers match the original.
 */
export function ExperienceCard({
  name,
  role,
  startDate,
  endDate,
  location,
  description,
  technologies,
  images,
  achievements,
  color,
  index,
  onImageClick
}) {
  const gradient = getGradientColors(color);

  return (
    <div
      className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-cyan-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
      style={{
        width: '450px',
        animation: `slideRight 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1" style={{fontFamily: '"Space Mono", monospace'}}>
              {name}
            </h3>
            <p className="text-sm text-slate-400">{location}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white whitespace-nowrap`}>
            {endDate === 'Present' ? '● Active' : 'Completed'}
          </span>
        </div>
        <p className="text-lg text-slate-300 font-medium mb-1">{role}</p>
        <p className="text-sm text-slate-400 mb-3">
          {startDate} - {endDate}
        </p>
        <p className="text-sm text-slate-400 italic">{description}</p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <TechPill key={techIndex} label={tech} />
          ))}
        </div>
      </div>

      {/* Image gallery */}
      <div className="mb-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-2" style={{width: 'max-content'}}>
          {images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className="relative overflow-hidden rounded-lg flex-shrink-0 group/img cursor-pointer"
              style={{width: '160px', height: '120px'}}
              onClick={() => onImageClick(image, `${name} - Image ${imgIndex + 1}`)}
            >
              <img
                src={image}
                alt={`${name} highlight ${imgIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wide">Key Achievements</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, achIndex) => (
            <li
              key={achIndex}
              className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-1.5 flex-shrink-0`}></span>
              <span style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  index: PropTypes.number.isRequired,
  onImageClick: PropTypes.func.isRequired
};

ExperienceCard.defaultProps = {
  color: 'cyan'
};
