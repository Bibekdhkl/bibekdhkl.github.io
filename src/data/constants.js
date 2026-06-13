// Site-wide constants and configuration tokens

export const SOCIAL_LINKS = {
  email: 'hibibekdhakal@gmail.com',
  github: 'https://github.com/bibekdhkl',
  linkedin: 'https://linkedin.com/in/bibekdhkl',
  twitter: 'https://twitter.com/bibekdhkl',
  portfolio: 'https://bibekdhkl.github.io'
};

export const STATS = [
  { value: '5+', label: 'Companies', color: 'text-cyan-400' },
  { value: '2', label: 'Communities', color: 'text-purple-400' },
  { value: '4', label: 'Awards', color: 'text-yellow-400' },
  { value: '1000+', label: 'Impact', color: 'text-green-400' }
];

export const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'community', label: 'Community' },
  { id: 'media', label: 'Media' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'blog', label: 'Writing' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' }
];

// Helper function to get gradient colors
export const getGradientColors = (color) => {
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

// Category color mapping for blog pills
export const CATEGORY_COLORS = {
  Entrepreneurship: 'from-orange-400 to-red-500',
  Tech: 'from-cyan-400 to-blue-500',
  Community: 'from-purple-400 to-pink-500'
};
