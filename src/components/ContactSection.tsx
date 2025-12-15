import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';


const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khushkaur023@gmail.com',
    href: 'mailto:khushkaur023@gmail.com',
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const data = {
    access_key: "4c5434aa-c260-4283-923f-4f607aba62a2", // 👈 Web3Forms key
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon 😊",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      throw new Error();
    }
  } catch {
    toast({
      title: "Failed to send",
      description: "Please try again later",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 hero-bg opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium hover:text-primary transition-colors"
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
            </div>

            {/* Social links */}
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Khush54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khushpreet-kaur-325542325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:khushkaur023@gmail.com"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="glass-card space-y-6">
              <h3 className="text-xl font-semibold mb-2 text-gradient">Send a Message</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Have a question or want to work together? Drop me a message!
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
