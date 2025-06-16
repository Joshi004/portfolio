import React from 'react';
import { Heart, Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naresh-joshi-004",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/Joshi004",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: Mail,
      href: "mailto:thinkjoshi@gmail.com",
      label: "Email",
      color: "hover:bg-blue-500"
    },
    {
      icon: Phone,
      href: "tel:+918377862707",
      label: "Phone",
      color: "hover:bg-green-500"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Naresh Joshi</h3>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Lead Software Engineer passionate about building scalable, event-driven systems 
              and AI-powered solutions. Turning complex challenges into elegant technical solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('#') ? '_self' : '_blank'}
                  rel={social.href.startsWith('#') ? '' : 'noopener noreferrer'}
                  className={`w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Highlights</h4>
            <ul className="space-y-2 text-secondary-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>8+ Years Experience</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Team Leadership</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>AI & ML Specialist</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>System Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Event-Driven Systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-secondary-400">
              <span>© {currentYear} Naresh Joshi. Made with</span>
              <Heart size={16} className="text-red-500 animate-bounce" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-secondary-400">
                <span>Currently: </span>
                <span className="text-green-400">Open to opportunities</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600"></div>
    </footer>
  );
};

export default Footer; 