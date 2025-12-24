import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Responsive Design','React'],
  },
  {
    title: 'Programming',
    skills: ['SQL', 'MySQL', 'PHP'],
  },
  {
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub'],
  },
];

const allSkills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Bootstrap', level: 88 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'MySQL', level: 90 },
  { name: 'PHP', level: 80 },
  { name: 'Git/GitHub', level: 80 },
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
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill badges */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill, idx) => (
              <span
                key={skill}
                className="skill-badge"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {skill}
              </span>
            ))
          )}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${400 + index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
