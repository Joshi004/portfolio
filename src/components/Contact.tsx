import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Trophy, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8377862707",
      link: "tel:+918377862707",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "thinkjoshi@gmail.com",
      link: "mailto:thinkjoshi@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      link: "#",
      color: "bg-red-500"
    }
  ];

  const professionalLinks = [
    {
      icon: Linkedin,
      platform: "LinkedIn",
      username: "naresh-joshi-004",
      link: "https://www.linkedin.com/in/naresh-joshi-004",
      description: "Professional network and career updates",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      platform: "GitHub",
      username: "Joshi004",
      link: "https://github.com/Joshi004",
      description: "Code repositories and open source contributions",
      color: "bg-gray-800"
    }
  ];

  const codingProfiles = [
    {
      icon: Code,
      platform: "StackOverflow",
      username: "naresh-joshi",
      link: "https://stackoverflow.com/users/10516426/naresh-joshi",
      description: "Technical discussions and community contributions",
      color: "bg-orange-500"
    },
    {
      icon: Trophy,
      platform: "HackerRank",
      username: "joshi004",
      link: "https://www.hackerrank.com/profile/joshi004",
      description: "Programming challenges and skill assessments",
      color: "bg-green-600"
    },
    {
      icon: Code,
      platform: "LeetCode",
      username: "thinkjoshi",
      link: "https://leetcode.com/thinkjoshi/",
      description: "Algorithm practice and problem solving",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a technical conversation? 
            I'm always open to connecting with fellow professionals and exploring new possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary-50 transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{contact.label}</div>
                    <div className="text-secondary-600">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-bold text-secondary-900 mb-3">Current Status</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-secondary-700">Open to new opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-secondary-700">Available for consulting</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">Professional Profiles</h3>
            <div className="space-y-6">
              {professionalLinks.map((profile, index) => (
                <a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 block hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${profile.color} rounded-lg flex items-center justify-center text-white`}>
                        <profile.icon size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-secondary-900">{profile.platform}</div>
                        <div className="text-primary-600">@{profile.username}</div>
                        <div className="text-sm text-secondary-600">{profile.description}</div>
                      </div>
                    </div>
                    <ExternalLink size={20} className="text-secondary-400 group-hover:text-primary-600 transition-colors duration-200" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">Coding Profiles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${profile.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <profile.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">{profile.platform}</h4>
                <p className="text-primary-600 font-semibold mb-2">@{profile.username}</p>
                <p className="text-sm text-secondary-600">{profile.description}</p>
                <div className="mt-4 flex items-center justify-center text-primary-600 group-hover:text-primary-700">
                  <ExternalLink size={16} className="mr-1" />
                  <span className="text-sm">View Profile</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a lead engineer, need consultation on system architecture, 
            or want to discuss the latest in AI and event-driven systems, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:thinkjoshi@gmail.com" 
              className="inline-flex items-center px-6 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
            <a 
              href="https://calendar.app.google/dQLZJipaJqHV9gge8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Meeting
            </a>
            <a 
              href="https://www.linkedin.com/in/naresh-joshi-004" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 