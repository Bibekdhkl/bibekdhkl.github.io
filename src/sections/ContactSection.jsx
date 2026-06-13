import React from 'react';

/**
 * ContactSection — Final CTA block.
 * Preserves every className, inline style, and animation from the original.
 * Adds target link to LinkedIn on CTA click.
 */
export default function ContactSection() {
  return (
    <div id="contact" className="text-center animate-fadeIn" style={{ animationDelay: '0.9s' }}>
      <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: '"Space Mono", monospace' }}>
        Let's Build Something Amazing Together for Nepal and Earth
      </h3>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to make Impact in the life of People.
      </p>

      {/* Wrapped the button with an anchor tag */}
      <a
        href="https://linkedin.com/in/bibekdhkl"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block" // Ensures alignment and scale animations work perfectly
      >
        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </a>
    </div>
  );
}