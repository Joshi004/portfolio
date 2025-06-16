import React from 'react';
import { ExternalLink, Github, Zap, BarChart3, Shield, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Algorithmic Trading Application",
      type: "Personal Project | Architect & Lead Developer",
      description: "A scalable, event-driven trading platform integrated with Broker APIs, executing 40,000+ trading decisions per session on the National Stock Exchange (NSE).",
      image: "/api/placeholder/600/400",
      achievements: [
        "Built multithreaded architecture to scan 5000+ stocks in real time for multiple users",
        "Engineered modular plug-and-play system supporting 50+ technical indicators and trading strategies",
        "Leveraged Redis Streams and distributed locking for high-throughput, concurrent trade processing",
        "Used WebSockets for real-time, low-latency communication between services"
      ],
      tech: ["Python Django", "FastAPI", "WebSockets", "MySQL", "TimeScale DB", "Redis", "React JS", "HTML5", "CSS3"],
      highlights: ["40,000+ trading decisions/session", "5000+ stocks real-time scanning", "50+ technical indicators"],
      icon: BarChart3,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Contract Repository As Service",
      type: "Product Of Pramata",
      description: "Enterprise-grade document processing and contract management system serving thousands of users with advanced AI-powered digitization capabilities.",
      image: "/api/placeholder/600/400",
      achievements: [
        "Implemented Micro-frontend architecture across 15+ services for faster development cycles",
        "Enhanced session management and fortified APIs with robust authorization controls",
        "Switched from PDFs to converted images for contract digitization, reducing initial load time by 80%",
        "Implemented caching strategies that dropped response time by 90% for core APIs"
      ],
      tech: ["Python", "Ruby on Rails", "MySQL", "React JS", "HTML", "SCSS", "Docker", "AWS"],
      highlights: ["15+ microservices", "80% load time reduction", "90% response time improvement"],
      icon: Shield,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Apple Online Store Infrastructure",
      type: "Product Of Apple Inc",
      description: "Enterprise infrastructure management system for Apple Inc to manage server infrastructure and CI/CD pipelines across global data centers.",
      image: "/api/placeholder/600/400",
      achievements: [
        "Created application to manage 3000+ host servers deployed at different geographical locations",
        "Built comprehensive CI/CD pipeline management system for 2000+ development stories",
        "Implemented real-time monitoring and alerting systems for global server infrastructure",
        "Designed scalable architecture supporting Apple's global e-commerce operations"
      ],
      tech: ["Angular 7", "TypeScript", "Python Django", "MySQL"],
      highlights: ["3000+ servers managed", "2000+ CI/CD stories", "Global deployment"],
      icon: Database,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that have made significant impact in their respective domains
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Project Image/Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} p-8`}>
                  <div className="flex items-center justify-center h-64 text-white">
                    <project.icon size={120} className="opacity-80" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full">
                      <Zap size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4">
                      {project.type}
                    </p>
                    <p className="text-lg text-secondary-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-secondary-200">
                        <div className="text-sm font-semibold text-primary-600 text-center">
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white text-secondary-700 rounded-full text-sm border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.id === 1 && (
                      <a 
                        href="https://github.com/Joshi004" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Github size={20} className="mr-2" />
                        View on GitHub
                      </a>
                    )}
                    {project.id === 2 && (
                      <a 
                        href="https://www.pramata.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Live Project
                      </a>
                    )}
                    {project.id === 3 && (
                      <a 
                        href="https://www.apple.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Live Site
                      </a>
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

export default Projects; 