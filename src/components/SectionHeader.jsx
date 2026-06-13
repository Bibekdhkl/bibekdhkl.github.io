import React from 'react';
import PropTypes from 'prop-types';

/**
 * SectionHeader — renders the icon-pill + heading + optional subtitle pattern.
 * Accepts an `icon` ReactNode, a `title` string, and an optional `subtitle`.
 */
export function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div>
        <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>{title}</h2>
        {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subtitle: PropTypes.string
};

SectionHeader.defaultProps = {
  subtitle: undefined
};
