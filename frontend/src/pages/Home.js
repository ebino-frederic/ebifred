import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import { Wand2, Shield, Palette, Zap, Mail, MapPin, Github, Linkedin, Twitter, Star, Sparkles, Castle, BookOpen, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';

const iconMap = {
  'wand-2': Wand2,
  'shield': Shield,
  'palette': Palette,
  'zap': Zap
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual email sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-[#e8dcc4] relative overflow-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#d4af37]/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Castle className="w-8 h-8" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Nightshade</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#d4af37] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#d4af37] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 inline-block">
            <Sparkles className="w-16 h-16 text-[#d4af37] mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
            {portfolioData.hero.name}
          </h1>
          <p className="text-2xl md:text-4xl mb-4 text-[#cd7f32]" style={{ fontFamily: 'Crimson Text, serif' }}>
            {portfolioData.hero.title}
          </p>
          <p className="text-lg md:text-xl mb-8 text-[#e8dcc4]/80">
            {portfolioData.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0a0f] font-semibold px-8 py-6 text-lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0f] px-8 py-6 text-lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        {/* Decorative ornaments */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#d4af37]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-[#cd7f32]/20 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              The Chronicle
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a1a2e]/50 border-[#d4af37]/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6 text-[#e8dcc4]/90" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {portfolioData.about.description}
                </p>
                <blockquote className="border-l-4 border-[#d4af37] pl-6 italic text-[#d4af37] text-xl my-8">
                  {portfolioData.about.quote}
                </blockquote>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {portfolioData.about.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-[#0a0a0f]/50 rounded-lg border border-[#d4af37]/20">
                      <div className="text-3xl font-bold text-[#d4af37] mb-2">{stat.value}</div>
                      <div className="text-sm text-[#e8dcc4]/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Mastered Arts
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolioData.skills.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <Card key={skill.id} className="bg-[#1a1a2e]/50 border-[#d4af37]/30 backdrop-blur-sm hover:border-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#0a0a0f]/50 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8" style={{ color: skill.color }} />
                    </div>
                    <CardTitle className="text-center text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#e8dcc4]/80 text-center mb-4">
                      {skill.description}
                    </p>
                    <div className="w-full bg-[#0a0a0f]/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      />
                    </div>
                    <p className="text-center text-sm text-[#d4af37] mt-2">{skill.level}%</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Legendary Quests
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="bg-[#1a1a2e]/50 border-[#d4af37]/30 backdrop-blur-sm hover:border-[#d4af37] transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#d4af37] text-[#0a0a0f]">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#e8dcc4]/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="border-[#cd7f32] text-[#cd7f32]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Words of Wisdom
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#1a1a2e]/50 border-[#d4af37]/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-[#d4af37]"
                    />
                    <div>
                      <h4 className="font-bold text-[#d4af37]">{testimonial.name}</h4>
                      <p className="text-sm text-[#e8dcc4]/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#e8dcc4]/90 italic">" {testimonial.text} "</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#d4af37] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Send an Owl
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#1a1a2e]/50 border-[#d4af37]/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#d4af37] mb-2">Your Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#0a0a0f]/50 border-[#d4af37]/30 text-[#e8dcc4] focus:border-[#d4af37]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#d4af37] mb-2">Your Email</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#0a0a0f]/50 border-[#d4af37]/30 text-[#e8dcc4] focus:border-[#d4af37]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#d4af37] mb-2">Your Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[#0a0a0f]/50 border-[#d4af37]/30 text-[#e8dcc4] focus:border-[#d4af37] min-h-[150px]"
                      placeholder="Write your message here..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0a0f] font-semibold py-6 text-lg">
                    Cast Message
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-[#d4af37]/20">
                  <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-[#e8dcc4]/80">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                      {portfolioData.contact.email}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#e8dcc4]/80">
                      <MapPin className="w-5 h-5 text-[#d4af37]" />
                      {portfolioData.contact.location}
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-4">
                      <a href={portfolioData.contact.social.github} className="text-[#d4af37] hover:text-[#b8941f] transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href={portfolioData.contact.social.linkedin} className="text-[#d4af37] hover:text-[#b8941f] transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href={portfolioData.contact.social.twitter} className="text-[#d4af37] hover:text-[#b8941f] transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#d4af37]/20 bg-[#0a0a0f]/50 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#d4af37] mb-4">
            <Castle className="w-6 h-6" />
            <span className="font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Nightshade</span>
          </div>
          <p className="text-[#e8dcc4]/60 text-sm">
            © 2024 Archibald Nightshade. All magical rights reserved.
          </p>
          <p className="text-[#e8dcc4]/40 text-xs mt-2">
            Crafted with ancient spells and modern sorcery
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;