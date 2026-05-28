import { FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khushkaur023@gmail.com',
    href: 'mailto:khushkaur023@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9915843118',
    href: 'tel:+919915843118',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mohali, India',
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Khush54',
    href: 'https://github.com/Khush54',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Khushpreet Kaur',
    href: 'https://www.linkedin.com/in/khushpreet-kaur-325542325/',
  },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 hero-bg opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Direct links for opportunities, collaborations, and interviews
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="glass-card">
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:khushkaur023@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/Khushpreet_Kaur.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
