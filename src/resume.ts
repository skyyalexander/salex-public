// Your résumé, shown on the About page. Newest first.

export const experience: {
  role: string;
  org: string;
  place: string;
  start: string;
  end?: string; // leave out for "Present"
  summary?: string;
}[] = [
  {
    role: 'AI Trainer',
    org: 'DataAnnotation',
    place: 'Remote',
    start: '2025',
    summary:
      'Evaluate and improve LLM responses for accuracy, logic, and constraint adherence; write adversarial prompts to find edge cases; review and debug Python and web code used to train generative models.',
  },
  {
    role: 'Flight Coach',
    org: 'Take Flight Ohio',
    place: 'Columbus, OH',
    start: '2024',
    end: '2025',
    summary:
      'Taught flight in a full-scale, fixed-base Boeing 737 simulator, adapting technical instruction to every skill level, with consistently top-tier reviews.',
  },
  {
    role: 'Researcher',
    org: 'Rowe Policy Media',
    place: 'Remote',
    start: '2022',
    end: '2023',
    summary:
      'Researched equity, compliance, and policy reform for media production; interviewed industry experts and turned complex legal and policy material into educational media.',
  },
  {
    role: 'E-Commerce Coordinator',
    org: 'Surplus World',
    place: 'Columbus, OH',
    start: '2021',
    end: '2022',
    summary:
      'Started in direct sales and was promoted to run digital commerce operations, fulfilling hundreds of online orders a day.',
  },
  {
    role: 'Warehouse Manager',
    org: 'Erie Bone Broth',
    place: 'Cleveland, OH',
    start: '2020',
    end: '2020',
    summary: 'Ran supply-chain logistics and introduced new SOPs for inventory accuracy.',
  },
  {
    role: 'Infantryman',
    org: 'Ohio Army National Guard',
    place: 'Fort Benning, GA',
    start: '2019',
    end: '2019',
    summary: 'Completed One Station Unit Training at the U.S. Army Infantry School, focused on small-team leadership.',
  },
];

export const education = [
  { title: 'A.A., International Studies', org: 'Columbus State Community College', year: '2026' },
];

export const certifications = [
  'FAA Part 107 Small UAS Remote Pilot (licensed drone pilot)',
  'FAA Part 61 Student Pilot (~30 flight hours)',
];

export const skills = {
  Technical: ['Python', 'Web development', 'AI / LLM evaluation', 'Troubleshooting', 'MS Office'],
  Operations: ['Project management', 'Team leadership', 'Technical training & instruction', 'Research'],
};

// Optional: link to a PDF résumé placed in public/, e.g. '/resume.pdf'.
// Remove your phone number from the PDF first: everything in public/ is public.
export const resumePdf: string | undefined = undefined;
