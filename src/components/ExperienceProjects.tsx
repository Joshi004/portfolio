import React from 'react';
import { Building, Calendar, MapPin, ExternalLink, Github, Zap, Users } from 'lucide-react';

// Import images
import atsLogo from '../assets/ats_logo.png';
import deletemeLogo from '../assets/deleteme.png';
import appleLogo from '../assets/apple.jpg';

const ExperienceProjects: React.FC = () => {
  const experienceProjects = [
    {
      id: 1,
      title: "Algorithmic Trading Application",
      type: "Personal Project",
      period: "2023 – Present",
      location: "Independent Project",
      company: "Personal",
      description: "A scalable, event-driven trading platform integrated with Broker APIs, executing 40,000+ trading decisions per session on the National Stock Exchange (NSE).",
      achievements: [
        "Built multithreaded architecture to scan 5000+ stocks in real time for multiple users",
        "Engineered modular plug-and-play system supporting 50+ technical indicators and trading strategies",
        "Leveraged Redis Streams and distributed locking for high-throughput, concurrent trade processing",
        "Used WebSockets for real-time, low-latency communication between services"
      ],
      tech: ["Python Django", "FastAPI","Node JS", "WebSockets", "MySQL", "TimeScale DB", "Redis", "Javascript", "React JS", "HTML5", "CSS3"],
      highlights: ["40,000+ trading decisions/session", "5000+ stocks real-time scanning", "50+ technical indicators"],
      image: atsLogo,
      imageAlt: "Algorithmic Trading Application Dashboard",
      links: [
        { type: "github", url: "https://github.com/Joshi004", label: "View on GitHub" }
      ]
    },
    {
      id: 2,
      title: "DeleteMe - Privacy Data Removal Platform",
      type: "Lead Software Engineer",
      period: "2024 – Present",
      location: "Bangalore",
      company: "DeleteMe",
      description: "Engineered event-driven systems processing over 10 million daily events to match, validate, and remove personal data across 500+ data brokers for 100,000+ users. Visit DeleteMe at https://joindeleteme.com/",
      achievements: [
        "Architected event-driven systems processing 10+ million daily events across 500+ data brokers",
        "Spearheaded WebExtension upgrade to Manifest V3 using event-driven architecture",
        "Achieved 70% reduction in JavaScript injection and load time through optimized crawling pipelines",
        "Built high-scale data classification and enrichment systems for privacy protection"
      ],
      tech: ["Event-Driven Architecture", "WebExtensions", "Manifest V3", "Data Processing", "Privacy Tech", "Node.js", "Python", "Java", "JavaScript", "React", "Angular"],
      highlights: ["10M+ daily events", "500+ data brokers", "100K+ users protected"],
      image: deletemeLogo,
      imageAlt: "DeleteMe Privacy Data Removal Dashboard",
      links: [
        { type: "live", url: "https://joindeleteme.com/", label: "View DeleteMe" }
      ]
    },
    {
      id: 3,
      title: "Pramata - Contract Repository Service",
      type: "Lead Software Engineer",
      period: "2020 – 2024",
      location: "Bangalore", 
      company: "Pramata",
      description: "Enterprise-grade document processing and contract management system serving thousands of users with advanced AI-powered digitization capabilities.",
      achievements: [
        "Designed and implemented CNN and LLM-based models for document scanning and entity extraction",
        "Digitized over 100M+ legal contracts through advanced AI/ML pipelines",
        "Implemented micro-frontend architecture across 15+ services for faster development cycles",
        "Achieved 70% increase in digitization speed and 60% reduction in operational costs",
        "Enhanced security by resolving vulnerabilities using Astra's Pentest and Snyk",
        "Increased test coverage to 95% ensuring robust code quality"
      ],
      tech: ["CNN", "LLM", "Microservices", "Microfrontends", "Ruby on Rails", "React", "Python", "MySQL", "Docker", "AWS"],
      highlights: ["100M+ contracts digitized", "15+ microservices", "60% cost reduction"],
      image: "https://cdn-jmhjd.nitrocdn.com/iYqybXnYBBpuzwhtjxvmeysygNLjsJUZ/assets/images/optimized/rev-f62dd94/www.pramata.com/wp-content/uploads/2023/10/contract-repository.gif",
      imageAlt: "Pramata Contract Repository Interface",
      links: [
        { type: "live", url: "https://www.pramata.com/", label: "View Live Project" }
      ]
    },
    {
      id: 4,
      title: "Apple Infrastructure Management System",
      type: "Specialist Programmer (Infosys)",
      period: "2017 – 2019",
      location: "Bangalore",
      company: "Infosys (Apple Inc)",
      description: "Enterprise infrastructure management system for Apple Inc to manage server infrastructure and CI/CD pipelines across global data centers.",
      achievements: [
        "Developed inventory management system for real-time monitoring of 3000+ servers globally",
        "Built CI/CD pipeline management system serving as central repository for 2000+ development stories",
        "Engineered Learning Experience (LEX) platform enabling training for 300K+ users",
        "Implemented real-time monitoring and alerting systems for global server infrastructure",
        "Designed scalable architecture supporting Apple's global e-commerce operations"
      ],
      tech: ["Angular 7", "TypeScript", "Python Django", "MySQL", "CI/CD", "Infrastructure Management"],
      highlights: ["3000+ servers managed", "2000+ CI/CD stories", "300K+ users trained"],
      image: appleLogo,
      imageAlt: "Apple Technology Infrastructure",
      links: [
        { type: "live", url: "https://www.apple.com/", label: "View Apple" },
        { type: "live", url: "https://lex.infosysapps.com/", label: "View Lex" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Experience & Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A comprehensive journey from personal projects to enterprise solutions
          </p>
        </div>

        <div className="space-y-16">
          {experienceProjects.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline Line */}
              {index !== experienceProjects.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-full bg-primary-200 hidden lg:block"></div>
              )}
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    
                    {/* Image Card with Better Aspect Ratio */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.imageAlt}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE2MCAyMDBIMjQwTDIwMCAxNTBaIiBmaWxsPSIjRDFENUU1Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiNEMUQ1RTUiLz4KPC9zdmc+';
                          }}
                        />
                        
                        {/* Subtle Overlay for Better Text Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        
                        {/* Company Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                            <Building size={16} className="text-primary-600" />
                            <span className="text-sm font-medium text-gray-700">{item.company}</span>
                          </div>
                        </div>
                        
                        {/* Action Icon */}
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
                            <Zap size={20} className="text-primary-600" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Footer with Period */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="text-white">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar size={14} />
                            <span className="font-medium">{item.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg font-semibold text-primary-600 mb-3">
                        {item.type}
                      </p>
                      
                      <div className="flex items-center gap-2 text-secondary-600 text-sm mb-4">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                      
                      <p className="text-lg text-secondary-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-secondary-50 p-3 rounded-lg border border-secondary-200">
                          <div className="text-sm font-semibold text-primary-600 text-center">
                            {highlight}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <Users size={18} className="text-primary-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-secondary-700 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-secondary-700 rounded-full text-xs border border-secondary-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {item.links.length > 0 && (
                      <div className="flex gap-3 pt-2">
                        {item.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm"
                          >
                            {link.type === 'github' ? <Github size={16} className="mr-2" /> : <ExternalLink size={16} className="mr-2" />}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjects; 