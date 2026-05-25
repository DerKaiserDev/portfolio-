interface Skill {
  name: string;
  icon: string;
  invert?: boolean;
}

interface Category {
  label: string;
  skills: Skill[];
}

const categories: Category[] = [
{
  label: 'Frontend',
  skills: [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      invert: true,
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
  ],
},
{
  label: 'Backend',
  skills: [
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      invert: true,
    },
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    },
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    },
    {
      name: 'REST APIs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    },
  ],
},

    {
  label: 'Langages',
  skills: [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    },
  ],
},

  {
    label: 'Base de données',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    label: 'Outils',
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      },
    ],
  },
];

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-24 md:py-32 ${isDark ? 'bg-[#080d14]' : 'bg-gray-50/70'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span
            className={`font-mono text-xs tracking-widest uppercase ${
              isDark ? 'text-cyan-400/60' : 'text-cyan-600/60'
            }`}
          >
            Compétences
          </span>
          <h2
            className={`mt-2 text-3xl md:text-4xl font-medium tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technologies maîtrisées
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <div
              key={cat.label}
              className={`rounded-2xl p-6 skill-card-hover ${
                isDark ? 'glass-card-dark' : 'glass-card-light'
              }`}
            >
              <p
                className={`text-xs font-mono uppercase tracking-widest mb-5 ${
                  isDark ? 'text-cyan-400/50' : 'text-cyan-600/60'
                }`}
              >
                {cat.label}
              </p>
              <div className="flex flex-col gap-3">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center ${
                        isDark ? 'bg-white/5' : 'bg-gray-100'
                      } ${skill.invert && isDark ? 'invert' : ''}`}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? 'text-white/75' : 'text-gray-700'
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
