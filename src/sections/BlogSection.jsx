import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { BLOG_POSTS } from '../data/blog';
import { CATEGORY_COLORS } from '../data/constants';

/**
 * BlogSection — Writing section with blog post list.
 * Preserves every className, inline style, and animation from the original.
 */
export default function BlogSection() {
  return (
    <section id="blog" className="mb-20 animate-slideUp" style={{animationDelay: '0.55s'}}>
      <div className="mb-10 flex items-center gap-4">
        <SectionHeader
          icon={
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
          }
          title={
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Writing</span>
          }
          subtitle="Thoughts on building, shipping, and community"
        />
      </div>

      <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        {BLOG_POSTS.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            style={{
              animation: `fadeIn 0.5s ease-out forwards`,
              animationDelay: `${0.55 + index * 0.07}s`,
              opacity: 0
            }}
          >
            <div className={`flex items-start gap-5 px-6 py-5 transition-all duration-200 hover:bg-white/[0.04] ${
              index < BLOG_POSTS.length - 1 ? 'border-b border-white/[0.08]' : ''
            }`}>
              {/* Category pill */}
              <span className={`mt-1 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${CATEGORY_COLORS[post.category] || 'from-cyan-400 to-blue-500'} text-white whitespace-nowrap`}>
                {post.category}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-white mb-1 leading-snug group-hover:text-cyan-400 transition-colors" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                  {post.title}
                </h4>
                <p className="text-xs text-cyan-400/60 mb-1.5" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                  {post.platform} · {post.date}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed truncate" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                  {post.excerpt}
                </p>
              </div>

              {/* Read link */}
              <span className="flex-shrink-0 mt-1 text-sm font-bold text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 whitespace-nowrap">
                Read →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
