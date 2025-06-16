import React from 'react';
import { GraduationCap, BookOpen, Music, Heart } from 'lucide-react';

const Education: React.FC = () => {
  const education = {
    degree: "Bachelor of Technology",
    field: "Mechanical and Automation Engineering",
    duration: "2013 - 2017",
    university: "Indrapastha University New Delhi",
    description: "Strong foundation in engineering principles with focus on automation and mechanical systems, providing analytical thinking and problem-solving skills that translate well to software engineering."
  };

  const interests = [
    {
      icon: BookOpen,
      title: "Mythology & Literature",
      description: "I enjoy reading books about mythology, which surprisingly helps me understand technology patterns and architectural principles from different perspectives.",
      color: "bg-amber-500"
    },
    {
      icon: Music,
      title: "Indian Classical Music",
      description: "I gravitate towards Indian classical music and take great pleasure in playing the bamboo flute, which helps maintain work-life balance and creativity.",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Continuous Learning",
      description: "Passionate about staying updated with the latest technologies, contributing to open source, and sharing knowledge with the developer community.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Education & Interests
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Academic foundation and personal interests that shape my perspective
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-900">Academic Background</h3>
                <p className="text-primary-600 font-semibold">Engineering Foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-secondary-900">{education.degree}</h4>
                <p className="text-lg text-primary-600 font-semibold">{education.field}</p>
              </div>
              
              <div className="flex items-center gap-4 text-secondary-600">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {education.duration}
                </span>
                <span>{education.university}</span>
              </div>

              <p className="text-secondary-700 leading-relaxed">
                {education.description}
              </p>

              <div className="pt-4">
                <h5 className="font-semibold text-secondary-900 mb-2">Key Learning Areas:</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Engineering Mathematics",
                    "System Design",
                    "Problem Solving",
                    "Analytical Thinking",
                    "Project Management",
                    "Process Optimization"
                  ].map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Development */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-900">Professional Growth</h3>
                <p className="text-green-600 font-semibold">Continuous Learning Journey</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-secondary-900 mb-3">Career Progression</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                    <span className="font-medium">Specialist Programmer → Lead Engineer</span>
                    <span className="text-sm text-primary-600">8+ Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                    <span className="font-medium">Individual Contributor → Team Leader</span>
                    <span className="text-sm text-primary-600">6 Developers</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                    <span className="font-medium">Domain Expertise → Architectural Leadership</span>
                    <span className="text-sm text-primary-600">Multiple Domains</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-secondary-900 mb-3">Impact Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">60%</div>
                    <div className="text-sm text-secondary-700">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">10M+</div>
                    <div className="text-sm text-secondary-700">Daily Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Personal Interests</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${interest.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  <interest.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">{interest.title}</h4>
                <p className="text-secondary-700 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-secondary-700 italic mb-6">
              "The intersection of technology and creativity is where innovation thrives. 
              My diverse interests help me approach complex technical challenges with unique perspectives."
            </blockquote>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 