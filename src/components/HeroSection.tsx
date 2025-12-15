import { useEffect, useState } from 'react';
import { ArrowDown, Download, ExternalLink, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const roles = ['Front-End Developer', 'Web Developer', 'UI/UX Enthusiast', 'B.Tech CSE Student'];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-500" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8 animate-fade-in-down">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Mohali, India</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="text-gradient">Khushpreet Kaur</span>
          </h1>

          {/* Typing effect */}
          <div className="h-12 md:h-14 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono">
              <span className="text-primary">&lt;</span>
              {displayText}
              <span className="animate-pulse">|</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Passionate about creating clean, user-friendly, and visually appealing web interfaces
            with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              <ExternalLink className="w-5 h-5" />
              View Projects
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/Khushpreet_Kaur.pdf" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          
        </div>
      </div>
    </section>
  );
}
