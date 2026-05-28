import { ExternalLink, Github, Book, BrainCircuit } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Smriti AI',
    description:
      'AI-powered dementia screening platform with multilingual assessments, role-based portals, JWT and Firebase authentication, MongoDB analytics, and Chart.js visualizations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Gemini API'],
    icon: BrainCircuit,
    color: 'from-blue-500 to-cyan-500',
    highlights: ['10 Indian languages', '3 role-based portals', '29/29 tests passed'],
    github: 'https://github.com/Khush54/SmritiAI',
    demo: 'https://smriti-ai-tau.vercel.app/',
  },
  {
    title: 'Libra Sphere',
    description:
      'Full-stack library management system for books, copies, borrowing records, and separate Admin and Student portal views with session-based authentication.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    icon: Book,
    color: 'from-emerald-500 to-teal-500',
    highlights: ['40+ book titles', '280+ copy records', '6-table MySQL schema'],
    github: 'https://github.com/Khush54/LMS',
    demo: 'https://lms-easy.infinityfreeapp.com/',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 hero-bg opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Selected work from my resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card group overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">Featured resume project</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid gap-2 mb-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="text-xs text-muted-foreground bg-secondary/70 border border-border rounded-lg px-3 py-2">
                    {highlight}
                  </div>
                ))}
              </div>


              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
             
              
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                  </a>
                </Button>
                </div>
            </div>
          ))}
        </div>

        {/* View all projects */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Khush54" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
