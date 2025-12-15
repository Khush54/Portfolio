import { Code2, Palette, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful user interfaces',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies',
  },
  {
    icon: Target,
    title: 'Detail Oriented',
    description: 'Focusing on every small detail',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 hero-bg opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dynamic and results-driven intern with hands-on experience in responsive web design 
                and UI/UX enhancement. Proficient in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. 
                Passionate about creating clean, user-friendly, and visually appealing interfaces that 
                deliver exceptional user experiences.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-gradient">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of well-crafted web experiences. Every pixel matters, 
                and every interaction should feel intuitive. I'm constantly learning and 
                exploring new technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
