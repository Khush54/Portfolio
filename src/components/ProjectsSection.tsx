import { ExternalLink, Github, Book, Globe, Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Library Management System',
    description:
      'A web-based application using PHP, MySQL, HTML, CSS, and JavaScript for managing books, students, issue/return records, and previous year questions.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: Book,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Khush54/LMS',
  },
  {
    title: 'Traveller Website',
    description:
      'A responsive tourism website highlighting India\'s cultural diversity using HTML, CSS, and Bootstrap with beautiful layouts and animations.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Responsive Design'],
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/Khush54/Traveller',
  },
  {
    title: 'Mini Web Apps Collection',
    description:
      'Collection of small projects like calculator, word counter, random color generator, password generator, and rock-paper-scissors game showcasing JavaScript DOM skills.',
    tech: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
    icon: Gamepad2,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Khush54/Mini-Web-Apps',
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
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card group overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon header */}
              <div className={`h-32 -mx-6 -mt-6 mb-6 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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


              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
              
                {/* <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button> */}
                
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
