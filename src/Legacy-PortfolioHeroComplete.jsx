import React, { useState } from 'react';

// Complete Production-Ready Portfolio Hero Component
export default function PortfolioHeroComplete() {
  // State for image lightbox
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');
  // State for gallery lightbox with navigation
  const [galleryIndex, setGalleryIndex] = useState(null);

  // Your contact/social links
  const socialLinks = {
    email: 'bibek@example.com',
    github: 'https://github.com/bibekdhakal',
    linkedin: 'https://linkedin.com/in/bibekdhakal',
    twitter: 'https://twitter.com/bibekdhakal',
    portfolio: 'https://bibekdhakal.com'
  };

  // Detailed company experiences
  const experiences = [
    {
      name: 'dlsurf',
      role: 'Software Developer',
      startDate: 'Jan 2023',
      endDate: 'Dec 2023',
      location: 'Kathmandu, Nepal',
      description: 'Led full-stack development projects and collaborated with international teams.',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Improved application performance by 40% through code optimization',
        'Collaborated with cross-functional teams on 5+ major projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
      ],
      color: 'cyan'
    },
    {
      name: 'CollegeTiffin',
      role: 'CEO / Co-Founder',
      startDate: 'Mar 2022',
      endDate: 'Present',
      location: 'Kathmandu, Nepal',
      description: 'Building Nepal\'s first student-focused food delivery platform.',
      achievements: [
        'Founded and scaled food-tech startup serving 500+ students daily',
        'Built team of 15+ employees across operations and technology',
        'Achieved 200% revenue growth in first year of operations',
        'Developed mobile app with 2000+ active users',
        'Implemented sustainable packaging reducing waste by 70%'
      ],
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
      images: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop'
      ],
      color: 'blue'
    },
    {
      name: 'Mandarix',
      role: 'Full Stack Developer',
      startDate: 'Jun 2021',
      endDate: 'Feb 2022',
      location: 'Remote',
      description: 'Developed enterprise solutions for international clients.',
      achievements: [
        'Built and maintained enterprise-level web applications',
        'Integrated third-party APIs improving system functionality',
        'Mentored 3 junior developers in best coding practices',
        'Reduced bug reports by 45% through comprehensive testing'
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      images: [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
      ],
      color: 'purple'
    },
    {
      name: 'himalayascraftnepal',
      role: 'Tech Consultant',
      startDate: 'Jan 2021',
      endDate: 'May 2021',
      location: 'Kathmandu, Nepal',
      description: 'Digitizing traditional Nepali crafts for global markets.',
      achievements: [
        'Digitized traditional craft business increasing online sales by 150%',
        'Developed e-commerce platform with payment gateway integration',
        'Trained staff on digital marketing and social media management',
        'Implemented inventory management system'
      ],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      images: [
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop'
      ],
      color: 'green'
    },
    {
      name: 'Hyperce',
      role: 'Frontend Developer',
      startDate: 'Aug 2020',
      endDate: 'Dec 2020',
      location: 'Remote',
      description: 'Built modern web interfaces for startup clients.',
      achievements: [
        'Created responsive UI components using React and Tailwind',
        'Improved website loading speed by 50% through optimization',
        'Collaborated with designers to implement pixel-perfect designs',
        'Contributed to open-source component library'
      ],
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
      images: [
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop'
      ],
      color: 'orange'
    }
  ];

  // Detailed community work
  const communities = [
    {
      name: 'GDG Kathmandu',
      role: 'Core Team Member & Speaker',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: 'Leading Google Developer Group community initiatives in Nepal.',
      contributions: [
        'Organized 10+ tech workshops reaching 500+ developers',
        'Delivered talks on React, Cloud Computing, and Web Development',
        'Mentored 30+ aspiring developers in their tech journey',
        'Led DevFest Kathmandu 2024 with 1000+ attendees',
        'Built partnerships with tech companies for community growth'
      ],
      impact: '1000+ Developers Reached',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop'
      ],
      color: 'blue'
    },
    {
      name: 'NOSK',
      role: 'Community Organizer',
      startDate: 'Sep 2022',
      endDate: 'Present',
      description: 'Building open-source culture in Nepal.',
      contributions: [
        'Coordinated monthly meetups fostering tech community in Nepal',
        'Created educational content on emerging technologies',
        'Connected students with industry professionals for mentorship',
        'Organized hackathons engaging 200+ participants',
        'Promoted open-source culture among local developers'
      ],
      impact: '200+ Active Members',
      images: [
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
      ],
      color: 'purple'
    }
  ];

  // Podcast episodes
  const podcasts = [
    {
      title: 'Building Startups in Nepal',
      show: 'Tech Talk Nepal',
      platforms: [
        { name: 'Apple Podcasts', url: '#' },
        { name: 'Spotify', url: '#' }
      ],
      description: 'Discussing the challenges and triumphs of building a food-tech startup in an emerging market.',
      date: 'Mar 2025'
    },
    {
      title: 'From Code to CEO',
      show: 'Founder Stories',
      platforms: [
        { name: 'Spotify', url: '#' }
      ],
      description: 'How a developer mindset shapes entrepreneurial decisions and product strategy.',
      date: 'Jan 2025'
    },
    {
      title: 'Community-Driven Development',
      show: 'DevChat Podcast',
      platforms: [
        { name: 'Apple Podcasts', url: '#' },
        { name: 'Spotify', url: '#' }
      ],
      description: 'Why investing in developer communities is the best growth hack for the tech ecosystem.',
      date: 'Nov 2024'
    },
    {
      title: 'The Future of Tech in South Asia',
      show: 'Global Dev Voices',
      platforms: [
        { name: 'Apple Podcasts', url: '#' },
        { name: 'Spotify', url: '#' }
      ],
      description: 'A deep dive into the rapidly evolving South Asian tech landscape and emerging opportunities.',
      date: 'Sep 2024'
    }
  ];

  // YouTube videos
  const videos = [
    {
      title: 'DevFest Kathmandu 2024 — Keynote Recap',
      date: 'Dec 2024',
      url: '#',
      thumbnail: null
    },
    {
      title: 'Building Scalable Apps with React & Firebase',
      date: 'Oct 2024',
      url: '#',
      thumbnail: null
    },
    {
      title: 'CollegeTiffin — Our Startup Journey',
      date: 'Aug 2024',
      url: '#',
      thumbnail: null
    },
    {
      title: 'Open Source in Nepal — Panel Discussion',
      date: 'Jun 2024',
      url: '#',
      thumbnail: null
    },
    {
      title: 'Getting Started with Cloud Computing',
      date: 'Apr 2024',
      url: '#',
      thumbnail: null
    },
    {
      title: 'How I Built My Portfolio Website',
      date: 'Feb 2024',
      url: '#',
      thumbnail: null
    }
  ];

  // Blog posts
  const BLOG_POSTS = [
    {
      title: 'What I Learned Building a Food-Tech Startup in Nepal',
      platform: 'Medium',
      date: 'Apr 2025',
      excerpt: 'From late-night coding sessions to managing a team of 15 — the unfiltered reality of bootstrapping in an emerging market.',
      url: '#',
      category: 'Entrepreneurship'
    },
    {
      title: 'React Server Components: A Practical Guide for Real Projects',
      platform: 'Dev.to',
      date: 'Feb 2025',
      excerpt: 'Cutting through the hype — when RSCs actually help and when you should stick with client components.',
      url: '#',
      category: 'Tech'
    },
    {
      title: 'Why Every Developer Should Organize a Meetup at Least Once',
      platform: 'Hashnode',
      date: 'Dec 2024',
      excerpt: 'Lessons on leadership, logistics, and the unexpected career benefits of community organizing.',
      url: '#',
      category: 'Community'
    },
    {
      title: 'Scaling Firebase for 2,000+ Daily Active Users on a Budget',
      platform: 'Medium',
      date: 'Oct 2024',
      excerpt: 'Practical strategies that kept our Firestore bill under $50/month while handling thousands of orders.',
      url: '#',
      category: 'Tech'
    },
    {
      title: 'The Startup World Cup Experience — Competing on a Global Stage',
      platform: 'LinkedIn',
      date: 'Aug 2024',
      excerpt: 'Behind the scenes of preparing, pitching, and winning Nepal\'s national startup competition.',
      url: '#',
      category: 'Entrepreneurship'
    },
    {
      title: 'Open Source in Nepal: Where We Are and Where We Need to Go',
      platform: 'Dev.to',
      date: 'Jun 2024',
      excerpt: 'A candid look at Nepal\'s open source landscape and how communities like NOSK are changing the culture.',
      url: '#',
      category: 'Community'
    }
  ];

  // Gallery photos for Recognition section
  const GALLERY = [
    {
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      caption: 'Winning moment at the national finale',
      event: 'Startup World Cup Nepal Finale',
      year: '2025'
    },
    {
      src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      caption: 'Receiving the entrepreneurship award on stage',
      event: 'Global Student Entrepreneurship Award',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
      caption: 'Presenting at the annual developer conference',
      event: 'DevFest Kathmandu',
      year: '2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
      caption: 'Panel discussion on the future of tech startups',
      event: 'Nepal Tech Summit',
      year: '2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
      caption: 'Community meetup and networking event',
      event: 'NOSK Open Source Day',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
      caption: 'Team celebration after a successful launch',
      event: 'CollegeTiffin Launch Party',
      year: '2023'
    }
  ];

  // Category color mapping for blog pills
  const categoryColors = {
    Entrepreneurship: 'from-orange-400 to-red-500',
    Tech: 'from-cyan-400 to-blue-500',
    Community: 'from-purple-400 to-pink-500'
  };

  // Recognition and awards
  const recognitions = [
    {
      title: 'Huawei Seeds for the Future Program',
      year: '2024',
      description: 'Selected for prestigious tech leadership program'
    },
    {
      title: 'NCIT Entrepreneurship Program',
      year: '2023',
      description: 'Graduate of Nepal\'s premier startup incubator'
    },
    {
      title: 'Global Student Entrepreneurship Award',
      year: '2023',
      description: 'Recognized for innovative student ventures'
    },
    {
      title: 'Startup Worldcup Nepal 2025',
      year: '2025',
      description: 'Winner of national startup competition'
    }
  ];

  // Helper function to get gradient colors
  const getGradientColors = (color) => {
    const gradients = {
      cyan: 'from-cyan-400 to-blue-500',
      blue: 'from-blue-400 to-indigo-500',
      purple: 'from-purple-400 to-pink-500',
      green: 'from-green-400 to-emerald-500',
      orange: 'from-orange-400 to-red-500',
      yellow: 'from-yellow-400 to-orange-500'
    };
    return gradients[color] || gradients.cyan;
  };

  // Open image in simple lightbox (for experience/community images)
  const openLightbox = (image, title) => {
    setGalleryIndex(null);
    setLightboxImage(image);
    setLightboxTitle(title);
  };

  // Open gallery lightbox with navigation
  const openGalleryLightbox = (index) => {
    setLightboxImage(null);
    setGalleryIndex(index);
  };

  // Navigate gallery
  const galleryPrev = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev > 0 ? prev - 1 : GALLERY.length - 1));
  };
  const galleryNext = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev < GALLERY.length - 1 ? prev + 1 : 0));
  };

  // Close any lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    setGalleryIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block px-6 py-2 mb-6 border-2 border-cyan-400 rounded-full text-cyan-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm bg-cyan-400/10">
            Full Stack Developer & Entrepreneur
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight" style={{fontFamily: '"Space Mono", monospace'}}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bibek Dhakal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            Building innovative solutions across multiple ventures, leading communities, and recognized globally for entrepreneurship
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href={`mailto:${socialLinks.email}`} className="group p-3 bg-white/5 border border-slate-700 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 border border-slate-700 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 border border-slate-700 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 border border-slate-700 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Projects
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-4xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="text-center p-6 backdrop-blur-md bg-white/5 border border-slate-700 rounded-xl">
            <div className="text-4xl font-black text-cyan-400 mb-2">5+</div>
            <div className="text-sm text-slate-400">Companies</div>
          </div>
          <div className="text-center p-6 backdrop-blur-md bg-white/5 border border-slate-700 rounded-xl">
            <div className="text-4xl font-black text-purple-400 mb-2">2</div>
            <div className="text-sm text-slate-400">Communities</div>
          </div>
          <div className="text-center p-6 backdrop-blur-md bg-white/5 border border-slate-700 rounded-xl">
            <div className="text-4xl font-black text-yellow-400 mb-2">4</div>
            <div className="text-sm text-slate-400">Awards</div>
          </div>
          <div className="text-center p-6 backdrop-blur-md bg-white/5 border border-slate-700 rounded-xl">
            <div className="text-4xl font-black text-green-400 mb-2">1000+</div>
            <div className="text-sm text-slate-400">Impact</div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <section className="mb-20 animate-slideUp">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Experience</h2>
                <p className="text-slate-400 text-sm mt-1">Scroll horizontally to explore →</p>
              </div>
            </div>
            {/* Scroll indicator */}
            <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
              <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Swipe</span>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-6 scrollbar-custom">
            <div className="flex gap-6" style={{width: 'max-content'}}>
              {experiences.map((exp, index) => (
                <div 
                  key={index}
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
                          {exp.name}
                        </h3>
                        <p className="text-sm text-slate-400">{exp.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradientColors(exp.color)} text-white whitespace-nowrap`}>
                        {exp.endDate === 'Present' ? '● Active' : 'Completed'}
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 font-medium mb-1">{exp.role}</p>
                    <p className="text-sm text-slate-400 mb-3">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-sm text-slate-400 italic">{exp.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-white/10 border border-slate-600 rounded-full text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mb-4 overflow-x-auto scrollbar-thin">
                    <div className="flex gap-2" style={{width: 'max-content'}}>
                      {exp.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="relative overflow-hidden rounded-lg flex-shrink-0 group/img cursor-pointer"
                          style={{width: '160px', height: '120px'}}
                          onClick={() => openLightbox(image, `${exp.name} - Image ${imgIndex + 1}`)}
                        >
                          <img 
                            src={image} 
                            alt={`${exp.name} highlight ${imgIndex + 1}`}
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
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradientColors(exp.color)} mt-1.5 flex-shrink-0`}></span>
                          <span style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY SECTION */}
        <section className="mb-20 animate-slideUp" style={{animationDelay: '0.3s'}}>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Community Work</h2>
                <p className="text-slate-400 text-sm mt-1">Scroll horizontally to explore →</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
              <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Swipe</span>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-6 scrollbar-custom">
            <div className="flex gap-6" style={{width: 'max-content'}}>
              {communities.map((community, index) => (
                <div 
                  key={index}
                  className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{
                    width: '450px',
                    animation: `slideRight 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1" style={{fontFamily: '"Space Mono", monospace'}}>
                          {community.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradientColors(community.color)} text-white`}>
                            {community.impact}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradientColors(community.color)} text-white whitespace-nowrap ml-2`}>
                        {community.endDate === 'Present' ? '● Active' : 'Completed'}
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 font-medium mb-1">{community.role}</p>
                    <p className="text-sm text-slate-400 mb-3">
                      {community.startDate} - {community.endDate}
                    </p>
                    <p className="text-sm text-slate-400 italic">{community.description}</p>
                  </div>

                  {/* Image gallery */}
                  <div className="mb-4 overflow-x-auto scrollbar-thin">
                    <div className="flex gap-2" style={{width: 'max-content'}}>
                      {community.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="relative overflow-hidden rounded-lg flex-shrink-0 group/img cursor-pointer"
                          style={{width: '160px', height: '120px'}}
                          onClick={() => openLightbox(image, `${community.name} - Event ${imgIndex + 1}`)}
                        >
                          <img 
                            src={image} 
                            alt={`${community.name} event ${imgIndex + 1}`}
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

                  {/* Contributions */}
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-wide">Key Contributions</h4>
                    <ul className="space-y-2">
                      {community.contributions.map((contribution, conIndex) => (
                        <li 
                          key={conIndex}
                          className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradientColors(community.color)} mt-1.5 flex-shrink-0`}></span>
                          <span style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT & MEDIA SECTION */}
        <section className="mb-20 animate-slideUp" style={{animationDelay: '0.45s'}}>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Content & Media</h2>
                <p className="text-slate-400 text-sm mt-1">Podcasts, talks, and video content</p>
              </div>
            </div>
          </div>

          {/* PODCASTS SUBSECTION */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-rose-400 mb-5 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM9 4a3 3 0 016 0v8a3 3 0 01-6 0V4z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2H3v2a9 9 0 004 7.46V22h2v-2.54a8.96 8.96 0 002 .54 8.96 8.96 0 002-.54V22h2v-2.54A9 9 0 0021 12v-2h-2z" />
              </svg>
              Podcasts
            </h3>
            <div className="overflow-x-auto pb-6 scrollbar-custom">
              <div className="flex gap-6" style={{width: 'max-content'}}>
                {podcasts.map((podcast, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-rose-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 flex flex-col"
                    style={{
                      width: '380px',
                      animation: `slideRight 0.6s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    {/* Show name & date */}
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">{podcast.show} · {podcast.date}</p>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3 leading-snug" style={{fontFamily: '"Space Mono", monospace'}}>
                      {podcast.title}
                    </h4>

                    {/* Platform pills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {podcast.platforms.map((platform, pIndex) => (
                        <a
                          key={pIndex}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-200 hover:scale-105 ${
                            platform.name === 'Spotify'
                              ? 'bg-green-500/15 border-green-500/40 text-green-400 hover:bg-green-500/25'
                              : 'bg-white/10 border-slate-600 text-slate-300 hover:bg-white/20'
                          }`}
                        >
                          {platform.name}
                        </a>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontFamily: '"IBM Plex Sans", sans-serif'
                    }}>
                      {podcast.description}
                    </p>

                    {/* Listen button */}
                    <button className="self-start px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                      Listen →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* YOUTUBE SUBSECTION */}
          <div>
            <h3 className="text-lg font-bold text-rose-400 mb-5 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-cyan-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards`,
                    animationDelay: `${0.45 + index * 0.08}s`,
                    opacity: 0
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full bg-slate-800/60 flex items-center justify-center" style={{aspectRatio: '16/9'}}>
                    {video.thumbnail ? (
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-cyan-400/15 border-2 border-cyan-400/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/25 transition-all duration-300">
                          <svg className="w-7 h-7 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors" style={{fontFamily: '"Space Mono", monospace'}}>
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-500">{video.date}</p>
                    <span className="inline-block mt-3 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">
                      Watch →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WRITING SECTION */}
        <section className="mb-20 animate-slideUp" style={{animationDelay: '0.55s'}}>
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Writing</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">Thoughts on building, shipping, and community</p>
            </div>
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
                  <span className={`mt-1 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[post.category] || 'from-cyan-400 to-blue-500'} text-white whitespace-nowrap`}>
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

        {/* RECOGNITION SECTION */}
        <section className="mb-20 max-w-4xl mx-auto animate-slideUp" style={{animationDelay: '0.6s'}}>
          <div className="backdrop-blur-md bg-white/5 border-2 border-slate-700 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Recognition & Awards</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recognitions.map((recognition, index) => (
                <div 
                  key={index} 
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
                        {recognition.title}
                      </h3>
                      <p className="text-xs text-yellow-400 font-bold mb-1">{recognition.year}</p>
                      <p className="text-sm text-slate-400">{recognition.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOMENTS & MILESTONES GALLERY */}
            <div className="mt-8 pt-8 border-t border-white/[0.08]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Moments & Milestones</h3>
              </div>

              <div className="gallery-masonry">
                {GALLERY.map((photo, index) => (
                  <div
                    key={index}
                    className="gallery-masonry-item group cursor-pointer overflow-hidden rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                    onClick={() => openGalleryLightbox(index)}
                    style={{
                      animation: `fadeIn 0.5s ease-out forwards`,
                      animationDelay: `${0.7 + index * 0.08}s`,
                      opacity: 0
                    }}
                  >
                    <div className="relative">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Caption overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
                        <p className="text-white text-sm font-semibold leading-snug" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>{photo.event}</p>
                        <p className="text-white/60 text-xs mt-0.5">{photo.year}</p>
                      </div>
                      {/* Hover zoom icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center animate-fadeIn" style={{animationDelay: '0.9s'}}>
          <h3 className="text-3xl font-bold mb-4" style={{fontFamily: '"Space Mono", monospace'}}>
            Let's Build Something Amazing Together
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Simple Image Lightbox Modal (experience/community) */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={lightboxImage} 
              alt={lightboxTitle}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">{lightboxTitle}</p>
          </div>
        </div>
      )}

      {/* Gallery Lightbox with Navigation */}
      {galleryIndex !== null && GALLERY[galleryIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
          style={{backgroundColor: 'rgba(0,0,0,0.9)'}}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={galleryPrev}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{color: '#22d3ee'}}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="flex flex-col items-center px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[galleryIndex].src}
              alt={GALLERY[galleryIndex].caption}
              className="rounded-lg shadow-2xl"
              style={{maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain'}}
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-semibold" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                {GALLERY[galleryIndex].event}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                {GALLERY[galleryIndex].caption} · {GALLERY[galleryIndex].year}
              </p>
            </div>
            {/* Counter */}
            <p className="text-slate-600 text-xs mt-3">{galleryIndex + 1} / {GALLERY.length}</p>
          </div>

          {/* Next arrow */}
          <button
            onClick={galleryNext}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{color: '#22d3ee'}}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }

        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #0891b2, #2563eb);
        }

        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .gallery-masonry {
          columns: 1;
          column-gap: 1rem;
        }

        @media (min-width: 768px) {
          .gallery-masonry {
            columns: 2;
          }
        }

        .gallery-masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}