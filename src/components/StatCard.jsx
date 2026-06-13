import React from 'react';
import PropTypes from 'prop-types';

/**
 * StatCard — renders one quick-stat box (e.g. "5+ Companies").
 * Preserves all original classNames and structure.
 */
export function StatCard({ value, label, color }) {
  return (
    <div className="text-center p-6 backdrop-blur-md bg-white/5 border border-slate-700 rounded-xl">
      <div className={`text-4xl font-black ${color} mb-2`}>{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
