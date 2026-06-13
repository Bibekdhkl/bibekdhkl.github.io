import React from 'react';
import PropTypes from 'prop-types';

/**
 * TechPill — renders a small dark pill badge for technology labels.
 * Matches the exact className from PortfolioHeroComplete.jsx.
 */
export function TechPill({ label }) {
  return (
    <span className="px-3 py-1 text-xs bg-white/10 border border-slate-600 rounded-full text-slate-300">
      {label}
    </span>
  );
}

TechPill.propTypes = {
  label: PropTypes.string.isRequired
};
