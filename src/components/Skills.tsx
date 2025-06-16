import React from 'react';
import { Code, Palette, Database, Brain, Cloud, Users, Wrench, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-blue-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 95 },
        { name: "Ruby", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Core Java", level: 75 },
        { name: "C/C++", level: 65 }
      ]
    },
    {
      title: "Frontend & Frameworks",
      icon: Palette,
      color: "bg-purple-500",
      skills: [
        { name: "React.JS", level: 95 },
        { name: "Angular", level: 90 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Semantic UI", level: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "bg-green-500",
      skills: [
        { name: "Django", level: 95 },
        { name: "Flask", level: 90 },
        { name: "Ruby on Rails", level: 85 },
        { name: "Node.JS", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "bg-pink-500",
      skills: [
        { name: "CNN", level: 88 },
        { name: "RNN", level: 85 },
        { name: "Transformers (BERT)", level: 85 },
        { name: "GPT-based LLMs", level: 80 },
        { name: "Classification Models", level: 88 },
        { name: "Deep Learning", level: 85 }
      ]
    },
    {
      title: "Infrastructure & DevOps",
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 80 },
        { name: "Linux", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "Git", level: 95 }
      ]
    },
    {
      title: "Leadership & Management",
      icon: Users,
      color: "bg-teal-500",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Agile Methodologies", level: 90 },
        { name: "Mentoring", level: 95 },
        { name: "People Management", level: 90 },
        { name: "System Design", level: 92 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialisation",
      issuer: "Stanford University & Deep Learning AI",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/9ATALVMR9YBF"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      link: "http://aws.amazon.com/verification"
    },
    {
      title: "Programming In C",
      issuer: "IIT Kanpur (NPTEL)",
      year: "2017",
      link: "https://nptel.ac.in/noc/courses/noc17/SEM2/noc17-cs43"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and professional skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-secondary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className={`h-2 ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4 flex items-center justify-center gap-3">
              <Star className="text-primary-600" size={32} />
              Certifications & Awards
            </h3>
            <p className="text-secondary-600">Continuous learning and professional development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">{cert.title}</h4>
                  <p className="text-secondary-600 mb-2">{cert.issuer}</p>
                  <p className="text-primary-600 font-semibold mb-4">{cert.year}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Verify Certificate
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">Other Technical Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Application Design",
              "Data Structures",
              "System Design",
              "Microservices",
              "Event-Driven Architecture",
              "WebSockets",
              "React Native",
              "Shell Scripting",
              "NewRelic",
              "JIRA",
              "Snyk Security",
              "Performance Optimization"
            ].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 