import { Code2, Database, Server, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'React Router', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'Vite'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Mongoose', 'PHP', 'MongoDB Atlas', 'MySQL'],
  },
  {
    title: 'Cloud, AI & Tools',
    icon: Sparkles,
    skills: ['Firebase Auth', 'Vercel', 'Netlify', 'Gemini API', 'Groq', 'Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Data Modelling',
    icon: Database,
    skills: ['Schema Design', 'CRUD', 'Relational Modelling', 'MongoDB Collections', 'Server-Side Validation'],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Technologies and tools I use to build web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
