import React from 'react';
import PropTypes from 'prop-types';

/**
 * AwardCard — single recognition / award entry.
 * Preserves all original classNames, inline styles, and animation.
 */
export function AwardCard({ title, year, description, index }) {
  return (
    <div
      className="group p-5 rounded-xl bg-white/5 border border-slate-700 hover:border-yellow-400 transition-all duration-200 hover:transform hover:scale-105"
      style={{
        animation: `fadeIn 0.5s ease-out forwards`,
        animationDelay: `${0.6 + index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="flex items-start gap-3">
        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
        <div>
          <h3 className="text-slate-200 font-semibold mb-1 leading-relaxed" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            {title}
          </h3>
          <p className="text-xs text-yellow-400 font-bold mb-1">{year}</p>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

AwardCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
