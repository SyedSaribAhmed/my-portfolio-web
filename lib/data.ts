export const skills = [
  { name: 'Python', level: 0.92 },
  { name: 'JavaScript', level: 0.88 },
  { name: 'TypeScript', level: 0.86 },
  { name: 'LangChain', level: 0.82 },
  { name: 'LangGraph', level: 0.78 },
  { name: 'n8n', level: 0.85 },
  { name: 'Make', level: 0.78 },
  { name: 'Zapier', level: 0.76 },
  { name: 'OpenAI API', level: 0.9 },
  { name: 'Anthropic API', level: 0.82 },
  { name: 'Computer Vision', level: 0.72 },
  { name: 'RAG', level: 0.81 },
  { name: 'Vector Databases', level: 0.8 },
  { name: 'AI Agents', level: 0.83 },
  { name: 'Workflow Automation', level: 0.88 },
  { name: 'Prompt Engineering', level: 0.9 }
];

export const timeline = [
  {
    role: 'Full Stack AI Trainer',
    company: 'Freelance (Remote)',
    date: 'Jan 2025 - Feb 2026',
    points: [
      'Designed and evaluated 100+ coding tasks across Python and TypeScript to train frontier LLMs, scoring model outputs on accuracy, instruction-following, edge-case handling, and code quality using structured rubrics aligned with RLHF methodologies.',
      'Authored gold-standard responses and adversarial multi-turn prompt scenarios used to stress-test model behavior, directly improving output consistency and task relevance across production AI pipelines.',
      'Operated fully asynchronously across international time zones, consistently meeting quality benchmarks and delivery deadlines; demonstrating readiness for high-performance remote engineering roles.'
    ]
  },
  {
    role: 'AI Associate',
    company: 'NBP',
    date: 'July 2024 - Dec 2024',
    points: [
      'Identified and scoped automation opportunities across internal banking workflows, reducing manual reporting overhead by streamlining data collection and processing pipelines.',
      'Built and maintained structured data systems to support decision-making, applying Python scripting to automate repetitive data tasks and generate actionable insights.',
      'Designed and implemented data pipelines for operational efficiency and strategic business intelligence.'
    ]
  }
];

export const projects = [
  {
    title: 'AI-Powered Voting Platform',
    description: 'A secure voting system with role-based access, live WebSocket analytics, and AI sentiment processing for voter comments.',
    outcome: 'Real-time vote monitoring with opinion trends surfaced for admins.',
    hoverText: 'Built sentiment analysis pipeline processing 10K+ comments with OpenAI API. Reduced moderation workload by 65%.',
    visualLabel: 'Live election analytics',
    visualType: 'dashboard',
    tags: ['Node.js', 'Express', 'Dashboards', 'WebSockets', 'JWT Auth', 'OpenAI API', 'NLP'],
    href: '#'
  },
  {
    title: 'AI-Powered Supply Chain Lead Qualification & Outreach Automation',
    description: 'A 5-agent qualification and routing pipeline for inbound supply-chain leads, backed by BANT-S scoring and prompt chaining.',
    outcome: 'Cut response time from 54 hrs to 6 hrs and reduced qualification workload by 83%.',
    hoverText: 'Deployed 5 Claude-powered agents with BANT-S scoring. Integrated with HubSpot CRM for automatic lead routing.',
    visualLabel: 'Agent pipeline',
    visualType: 'pipeline',
    tags: ['AI Agents', 'Automation', 'Claude API', 'Apify', 'Apollo.io', 'HubSpot', 'Instantly.ai'],
    href: '#'
  }
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-sarib-ahmed-5a2a471a8/' },
  { label: 'GitHub', href: 'https://github.com/SyedSaribAhmed' },
  { label: 'Email', href: 'mailto:saribahmed974@gmail.com' }
];
