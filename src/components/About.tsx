import React from 'react';
import { Award, Users, TrendingUp, Zap } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "60% Cost Reduction",
      description: "Delivered significant cost reductions at Pramata through architecture optimization"
    },
    {
      icon: Award,
      title: "0→Production Expert",
      description: "Complete SDLC ownership from requirement gathering to scalable deployment"
    },
    {
      icon: Users,
      title: "Startup Tech Leader",
      description: "Single-person tech stack ownership for rapid MVP to market deployment"
    },
    {
      icon: Zap,
      title: "High-Scale Systems",
      description: "Architected systems processing 10+ million daily events"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              Full-Stack Architect & Startup Tech Leader
            </h3>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              Experienced Lead Software Engineer with around 8 years of industry experience and 3 years 
              of success architecting and leading Event Driven solutions including AI-Powered 
              High-Frequency Algorithmic Trading Systems that handle millions of messages per day.
            </p>

            <p className="text-lg text-secondary-700 leading-relaxed">
              <strong className="text-secondary-900">From Startup MVP to Enterprise Scale:</strong> I specialize in creating applications 
              from scratch and shepherding them through the complete development lifecycle to highly scalable 
              production systems. My deep understanding spans requirement gathering, architecture design, 
              development, testing, DevOps, and CI/CD deployment.
            </p>

            <p className="text-lg text-secondary-700 leading-relaxed">
              <strong className="text-secondary-900">Perfect for Startup Builders:</strong> As a one-person tech powerhouse, 
              I can single-handedly handle your entire technology stack - from frontend to backend, 
              database design to cloud deployment, ensuring your startup gets to market faster while 
              building on a foundation that scales with your growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                0 → Production
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Startup Tech Leadership
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Event-Driven Architecture
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                DevOps & CI/CD
              </span>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <achievement.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {achievement.description}
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