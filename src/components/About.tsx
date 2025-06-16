import React from 'react';
import { Code, Rocket, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "End-to-end development from frontend to backend, databases to deployment"
    },
    {
      icon: Rocket,
      title: "Startup to Enterprise",
      description: "Scaled applications from MVP to millions of users across different domains"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led teams and architected systems processing millions of events daily"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Delivered 60% cost reductions and 70% performance improvements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              Transforming Ideas into Scalable Solutions
            </h3>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              I'm a passionate Lead Software Engineer with 8+ years of experience building 
              systems that matter. From high-frequency trading platforms to enterprise contract 
              management systems, I've architected solutions that handle millions of operations daily.
            </p>

            <p className="text-lg text-secondary-700 leading-relaxed">
              What sets me apart is my ability to take complete ownership of the technology stack - 
              whether it's a startup needing rapid MVP development or an enterprise requiring 
              complex system architecture. I bridge the gap between business needs and technical solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Event-Driven Architecture
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                System Design
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                DevOps & CI/CD
              </span>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <highlight.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 