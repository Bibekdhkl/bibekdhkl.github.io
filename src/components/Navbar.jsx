import React from 'react';
import PropTypes from 'prop-types';

/**
 * Navbar — top navigation bar with scrollspy highlighting.
 * Accepts navItems array and activeSection string.
 * The original monolith did not have a visible navbar, so this component
 * provides a minimal sticky nav that matches the site's design language
 * without changing the visual output. It is rendered but hidden by default
 * — App.jsx can choose to show it.
 *
 * NOTE: The original PortfolioHeroComplete.jsx did NOT include a navbar in
 * its rendered output. This component is created per the spec for future use
 * but the App.jsx will only render it if explicitly enabled.
 */
export function Navbar({ navItems, activeSection }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            BD
          </span>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  activeSection: PropTypes.string.isRequired
};
