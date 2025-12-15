import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Universal Institute of Engineering and Technology, Punjab',
    period: 'Expected Graduation: August 2026',
    grade: 'CGPA: 8.71/10',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Don Bosco Senior Secondary School',
    period: '2022',
    grade: '91%',
    icon: Award,
  },
  {
    degree: 'Secondary (X)',
    institution: 'Don Bosco Senior Secondary School',
    period: '2020',
    grade: '92%',
    icon: Award,
  },
];

const certifications = [
  {
    title: 'Python Programming Internship',
    organization: 'CodSoft',
    period: 'Jan – Feb 2025',
    description:
      'Built console-based applications such as calculator and password generator to improve programming logic.',
  },
  {
    title: 'Front-End Development Training',
    organization: 'Excellence Technology, Mohali',
    period: 'Jun – Sep 2024',
    description:
      'Focused on responsive layouts and modern UI/UX design practices.',
  },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Education & <span className="text-gradient">Training</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            My academic journey and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="glass-card ml-12 relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[3.25rem] top-6 w-4 h-4 rounded-full bg-primary glow" />
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{item.degree}</h4>
                      <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {item.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="text-xs flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Training & Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-primary text-sm">{cert.organization}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full flex-shrink-0">
                      {cert.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
