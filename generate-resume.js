const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
});

const output = fs.createWriteStream(path.join(__dirname, 'public', 'SyedSaribAhmed-Resume.pdf'));
doc.pipe(output);

// Helper function to add section
function addSection(title, items) {
  doc.fontSize(12).font('Helvetica-Bold').text(title.toUpperCase(), { underline: true });
  doc.moveDown(0.5);
}

// Header
doc.fontSize(18).font('Helvetica-Bold').text('Syed Sarib Ahmed', { align: 'center' });
doc.fontSize(9).font('Helvetica').text('+92 310 2233446 | saribahmed974@gmail.com | syed-sarib-ahmed | SyedSaribAhmed', { align: 'center' });
doc.fontSize(9).text('Full-Stack AI Engineer · AI Automation Specialist · LLM Systems · Remote-Ready', { align: 'center' });
doc.moveDown(1);

// Skills
addSection('Skills');
doc.fontSize(9).font('Helvetica').text('AI / LLM: Prompt Engineering, LLM Evaluation, RLHF, RAG, AI Data Pipelines, OpenAI API, LangChain (basics), Make.com/n8n');
doc.text('Languages: Python, TypeScript, JavaScript, Dart');
doc.text('Backend: Node.js, Express, RESTful APIs, WebSockets, Firebase Cloud Functions, JWT Auth');
doc.text('Frontend / Mobile: Flutter, React (basics), Dart, HTML/CSS');
doc.text('Databases: MySQL, Firestore, Firebase Realtime DB');
doc.text('Cloud & DevOps: AWS, Azure, Docker, CI/CD, GitHub Actions');
doc.moveDown(0.5);

// Education
addSection('Education');
doc.fontSize(9).font('Helvetica-Bold').text('Air University, Islamabad', { continued: true });
doc.font('Helvetica').text(' — Sept 2020 – June 2024');
doc.fontSize(9).text('Bachelor of Science in Information Technology | CGPA: 3.01/4.0');
doc.text('Courses: Cloud Computing, DevOps, Artificial Intelligence and Machine Learning, Data Structures, Discrete Structures, Internet of Things, Database Management Systems, Computer Networks, Switching and Routing');
doc.moveDown(0.5);

// Work Experience
addSection('Work Experience');
doc.fontSize(9).font('Helvetica-Bold').text('Full Stack AI Trainer', { continued: true });
doc.font('Helvetica').text(' — Jan 2025 – Feb 2026');
doc.fontSize(9).text('Freelance (Remote) – LLM, Python, JavaScript, TypeScript');
doc.text('• Designed and evaluated 100+ coding tasks across Python and TypeScript to train frontier LLMs, scoring model outputs on accuracy, instruction-following, edge-case handling, and code quality using structured rubrics aligned with RLHF methodologies.');
doc.text('• Authored gold-standard responses and adversarial multi-turn prompt scenarios used to stress-test model behavior, directly improving output consistency and task relevance across production AI pipelines.');
doc.text('• Operated fully asynchronously across international time zones, consistently meeting quality benchmarks and delivery deadlines; demonstrating readiness for high-performance remote engineering roles.');
doc.moveDown(0.3);

doc.fontSize(9).font('Helvetica-Bold').text('AI Associate', { continued: true });
doc.font('Helvetica').text(' — July 2024 – Dec 2024');
doc.fontSize(9).text('NBP – AI Integration, Process Automation, Data Pipelines, Python');
doc.text('• Identified and scoped automation opportunities across internal banking workflows, reducing manual reporting overhead by streamlining data collection and processing pipelines.');
doc.text('• Built and maintained structured data systems to support decision-making, applying Python scripting to automate repetitive data tasks and generate actionable insights.');
doc.moveDown(1);

// Projects
addSection('Projects');
doc.fontSize(9).font('Helvetica-Bold').text('AI-Powered Voting Platform', { continued: true });
doc.font('Helvetica').text(' — Feb 2025 – May 2025');
doc.fontSize(9).text('Node.js, Express, MySQL, WebSockets, JWT Auth, OpenAI API, NLP');
doc.text('• Built a full-stack voting platform with role-based auth (admin, candidate, voter) and a live WebSocket dashboard delivering sub-second real-time vote analytics.');
doc.text('• Integrated an AI-powered sentiment analysis module using OpenAI API to process voter comments, surfacing opinion trends and engagement insights for administrators.');
doc.moveDown(0.3);

doc.fontSize(9).font('Helvetica-Bold').text('AI-Powered Supply Chain Lead Qualification & Outreach Automation', { continued: true });
doc.font('Helvetica').text(' — Jan 2026 – March 2026');
doc.fontSize(9).text('Make.com, Claude API, Apify, Apollo.io, Perplexity API, HubSpot, Instantly.ai');
doc.text('• Architected a 5-agent Waterfall pipeline to autonomously qualify and route inbound supply-chain leads, cutting response time from 54 hrs to 6 hrs and reducing rep qualification workload by 83%.');
doc.text('• Built a domain-specific BANT-S scoring model with Claude API prompt chaining, lifting lead-to-meeting conversion from 11% to 17% and reducing cost per qualified lead from $42 to $11; included a human-in-the-loop Slack approval flow achieving 83% rep acceptance rate.');

doc.end();

output.on('finish', () => {
  console.log('Resume PDF generated successfully at public/SyedSaribAhmed-Resume.pdf');
});
