// Everything personal about the site lives here. Edit this file first.

export const site = {
  name: 'Skyy Alexander',
  // One line that shows under your name on the home page.
  tagline: 'AI trainer · Pilot in training · Builder',
  location: 'Columbus, OH',
  // Used for search results and link previews.
  description: 'The personal site of Skyy Alexander: projects, writing, flying, and what I’m working on now.',
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Aviation', href: '/aviation' },
  { label: 'Now', href: '/now' },
];

// Shown on the home page and in the footer. Add or remove freely.
export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/skyyalexander' },
  // { label: 'GitHub', href: 'https://github.com/skyyalexander' },
  // { label: 'Instagram', href: 'https://instagram.com/...' },
  // { label: 'X', href: 'https://x.com/...' },
  // { label: 'Email', href: 'mailto:you@example.com' },
];

// The "Now" page: what you're focused on at the moment.
// Update the date whenever you change the list.
export const now = {
  updated: '2026-11-10',
  items: [
    'Training and stress-testing AI models at DataAnnotation.',
    'Logging flight hours toward my private pilot certificate.',
    'Building this website, a home for everything I’m working on.',
    'Fresh off finishing my A.A. in International Studies at Columbus State.',
  ],
};

// The stats panel on the About page. Real, countable facts only.
export const stats = [
  { label: 'Base', value: 'Columbus, OH' },
  { label: 'Role', value: 'AI Trainer' },
  { label: 'Degree', value: 'A.A. Intl. Studies' },
  { label: 'Flight time', value: '~30 hrs' },
  { label: 'Certs', value: 'Part 107 · Student Pilot' },
  { label: 'Service', value: 'Ohio Army Natl. Guard' },
];

// The Aviation hub. Rename the two sections here; the slug is the URL
// and must match the `section` field of entries in src/content/aviation/.
export const aviation = {
  intro:
    'Where I keep my flying: training toward my private pilot certificate, drone work under Part 107, and time spent teaching in a 737 simulator.',
  status: [
    { label: 'Base', value: 'Columbus, OH' },
    { label: 'Position', value: '39.96°N 83.00°W' },
    { label: 'Logged', value: '~30 hrs' },
    { label: 'Goal', value: 'Private Pilot' },
  ],
  sections: [
    {
      slug: 'pilot',
      label: 'Pilot',
      summary: 'Flight training, hours, and time in the simulator.',
      intro:
        'I’m a student pilot with about 30 hours logged, working toward my private pilot certificate. Before that I spent a year teaching in a full-scale Boeing 737 simulator.',
      facts: [
        { title: 'FAA Part 61 Student Pilot', tag: '~30 hrs' },
        { title: 'Flight Coach, Take Flight Ohio (Boeing 737 simulator)', tag: '2024–2025' },
      ],
    },
    {
      slug: 'remote-pilot',
      label: 'Remote Pilot',
      summary: 'Drone flying under FAA Part 107.',
      intro: 'I hold an FAA Part 107 Small UAS Remote Pilot certificate, which covers commercial drone work.',
      facts: [{ title: 'FAA Part 107 Small UAS Remote Pilot', tag: 'Drone' }],
    },
  ],
} as const;
