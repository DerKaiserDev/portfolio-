import { Check } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  reverse?: boolean;
}

const projects: Project[] = [
  {
    name: 'FinanceTrack',
    image: '/financetrack.png',
    description:
      "Application web de gestion de portefeuille financier avec dashboards interactifs et statistiques en temps réel.",
    features: [
      'Gestion budgétaire multi-comptes',
      'Suivi des dépenses et revenus',
      'Tableaux de bord financiers interactifs',
    ],
    stack: ['Angular', 'Tailwind CSS 4', 'Chart.js', 'Firebase Authentication','Firestore' ],
  },
  {
    name: 'TicketPro',
    image: '/ticketpro.png',
    description:
      "Système de gestion des tickets restaurant avec tableau de bord administrateur et authentification sécurisée.",
    features: [
      'Gestion des tickets',
      "Tableau de bord administrateur complet",
      'Authentification JWT sécurisée',
    ],
    stack: [ 'Next.js', 'JWT', 'Springboot'],
    reverse: true,
  },
];


function BrowserMockup({
  isDark,
  image,
}: {
  isDark: boolean;
  image: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${
        isDark
          ? 'bg-[#0a1520] border border-white/8'
          : 'bg-gray-100 border border-gray-200'
      }`}
      style={{
        boxShadow: isDark
          ? '0 20px 60px rgba(0,0,0,0.5)'
          : '0 20px 60px rgba(0,0,0,0.1)',
      }}
    >
      {/* Browser chrome */}
      <div
        className={`flex items-center gap-2 px-3 py-2 border-b ${
          isDark
            ? 'bg-[#0d1b2a] border-white/6'
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Browser buttons */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>

        {/* Address bar */}
        <div
          className={`flex-1 mx-2 h-4 rounded-md text-[10px] flex items-center justify-center font-mono ${
            isDark
              ? 'bg-white/5 text-white/20'
              : 'bg-gray-100 text-gray-300'
          }`}
        >
          localhost:3000
        </div>
      </div>

      {/* Screenshot */}
      <div className="w-full h-52 md:h-72 overflow-hidden">
        <img
          src={image}
          alt="Project Screenshot"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
}

function ProjectCard({ project, isDark }: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-10 ${
        project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center`}
    >
      {/* Browser mockup */}
      <div className="w-full lg:w-1/2">
        <BrowserMockup isDark={isDark} image={project.image} />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <div
          className={`rounded-2xl p-8 project-card-hover ${
            isDark ? 'glass-card-dark' : 'glass-card-light'
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.name}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-6 ${
              isDark ? 'text-white/55' : 'text-gray-500'
            }`}
          >
            {project.description}
          </p>

          {/* Features */}
          <ul className="space-y-2.5 mb-7">
            {project.features.map(f => (
              <li key={f} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/15 flex items-center justify-center">
                  <Check
                    size={11}
                    className="text-cyan-400"
                    strokeWidth={2.5}
                  />
                </div>

                <span
                  className={`text-sm ${
                    isDark ? 'text-white/70' : 'text-gray-600'
                  }`}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-mono rounded-full border ${
                  isDark
                    ? 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400/80'
                    : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span
            className={`font-mono text-xs tracking-widest uppercase ${
              isDark ? 'text-cyan-400/60' : 'text-cyan-600/60'
            }`}
          >
            Projets
          </span>

          <h2
            className={`mt-2 text-3xl md:text-4xl font-medium tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Ce que j'ai construit
          </h2>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-20">
          {projects.map(project => (
            <ProjectCard
              key={project.name}
              project={project}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}