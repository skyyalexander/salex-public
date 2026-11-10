// Your résumé, shown on the Resume page (and summarized on About). Newest first.

export const profile =
  'A recent non-traditional graduate with a varied background: the Army, logistics and e-commerce, policy research, flight instruction, and now AI training. I like finding creative solutions to complex problems that demand attention to detail, and bringing teams together to solve them.';

export const experience: {
  role: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
}[] = [
  {
    role: 'AI Trainer',
    org: 'DataAnnotation',
    place: 'Remote',
    dates: 'May 2025–Present',
    points: [
      'Evaluate and optimize LLM responses for factual accuracy, logic, syntax, and constraint adherence.',
      'Author complex, targeted prompts to test model limits, identify edge cases, and refine adversarial robustness.',
      'Review, debug, and validate Python code and web development outputs to train generative AI models.',
      'Analyze data quality and deliver detailed feedback to engineering teams to ensure high-fidelity training datasets.',
    ],
  },
  {
    role: 'Flight Coach',
    org: 'Take Flight Ohio',
    place: 'Columbus, OH',
    dates: 'Jan 2024–Mar 2025',
    points: [
      'Provided technical flight instruction in a full-scale, fixed-base B737 flight simulator, adapting complex aeronautical instruction to diverse client skill levels and technical interests.',
      'Maintained high instructional standards, consistently earning top-tier reviews across corporate and public platforms.',
    ],
  },
  {
    role: 'Researcher',
    org: 'Rowe Policy Media',
    place: 'Remote',
    dates: 'Aug 2022–Jan 2023',
    points: [
      'Conducted qualitative research on equity, compliance, and policy reform for media production and interviewed industry experts, translating complex legal and policy data into educational media.',
      'Collaborated with a cross-functional team to produce, edit, and audit transcripts under a strict NDA.',
    ],
  },
  {
    role: 'E-Commerce Coordinator',
    org: 'Surplus World',
    place: 'Columbus, OH',
    dates: 'Jan 2021–Aug 2022',
    points: [
      'Managed direct sales of defense and tactical equipment, driving revenue growth through strategic client relationship management.',
      'Promoted to manage digital commerce operations, processing and fulfilling hundreds of online orders daily.',
    ],
  },
  {
    role: 'Warehouse Manager',
    org: 'Erie Bone Broth',
    place: 'Cleveland, OH',
    dates: 'Jan 2020–Jun 2020',
    points: ['Managed supply chain logistics and implemented new SOPs to maintain precise inventory accuracy.'],
  },
  {
    role: 'Infantryman',
    org: 'Ohio Army National Guard',
    place: 'Fort Benning, GA',
    dates: 'Feb 2019–Aug 2019',
    points: [
      'Completed One Station Unit Training (OSUT) at the U.S. Army Infantry School, focusing on small-team leadership and tactical operations. Honorable medical discharge.',
    ],
  },
];

export const education = [
  { title: 'A.A., International Studies', org: 'Columbus State Community College, Columbus, OH', year: '2026' },
];

export const certifications = ['FAA Part 107 Small UAS Remote Pilot', 'FAA Part 61 Student Pilot (~30 flight hours)'];

export const skills = {
  Technical: ['Python programming', 'Web development', 'MS Office Suite', 'Software & troubleshooting'],
  Operations: ['Project management', 'Team management', 'Technical training & instruction', 'Research'],
};
