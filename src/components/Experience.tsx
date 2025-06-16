import React from 'react';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: "DeleteMe",
      location: "Bangalore",
      position: "Lead Software Engineer",
      period: "2024 – Present",
      achievements: [
        "Engineered event-driven systems processing over 10 million daily events to match, validate, and remove personal data across 500+ data brokers for 100,000+ users",
        "Spearheaded the architecture of the application by upgrading the WebExtension code to Manifest V3 using event-driven architecture",
        "Achieved 70% reduction in JavaScript injection and load time on websites through high-scale crawling, enrichment, and data classification pipelines"
      ],
      tech: ["Event-Driven Architecture", "WebExtensions", "Manifest V3", "Data Processing", "Privacy Tech"]
    },
    {
      id: 2,
      company: "Pramata",
      location: "Bangalore",
      position: "Lead Software Engineer",
      period: "2020 – 2024",
      achievements: [
        "Designed and Implemented services leveraging CNN and LLM-based models for document scanning and entity extraction from legal contracts",
        "Digitized over 100M+ legal contracts through advanced AI/ML pipelines",
        "Redesigned application architecture by implementing microservices and microfrontend frameworks",
        "Achieved 70% increase in digitization speed and 60% reduction in operational costs",
        "Mitigated security risks by identifying and resolving dynamic and static vulnerabilities using Astra's Pentest and Snyk",
        "Increased test case coverage to 95% ensuring robust code quality"
      ],
      tech: ["CNN", "LLM", "Microservices", "Microfrontends", "Ruby on Rails", "React", "Security", "DevOps"]
    },
    {
      id: 3,
      company: "Infosys (Apple Inc)",
      location: "Bangalore",
      position: "Specialist Programmer",
      period: "2017 – 2019",
      achievements: [
        "Developed Inventory management system at Apple for real-time monitoring and management of over 3000 servers globally",
        "Built service to facilitate the implementation of CI/CD pipelines serving as a central repository to track the progress of over 2000 stories",
        "Engineered Learning Experience (LEX) for Infosys, enabling seamless training for over 300K users through industry-specific trainings"
      ],
      tech: ["Angular 7", "TypeScript", "Python Django", "MySQL", "CI/CD", "Infrastructure Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A journey of building scalable systems, leading teams, and delivering exceptional results
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-primary-200 hidden md:block"></div>
              )}
              
              <div className="card p-8 hover:shadow-2xl transition-all duration-300 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="text-primary-600" size={24} />
                      <h3 className="text-xl font-bold text-secondary-900">{exp.company}</h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary-600 mb-3">{exp.position}</h4>
                    
                    <div className="space-y-2 text-secondary-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="md:col-span-2">
                    <h5 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                      <TrendingUp size={20} className="text-primary-600" />
                      Key Achievements
                    </h5>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h6 className="font-semibold text-secondary-900 mb-3">Technologies Used</h6>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience; 