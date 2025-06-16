import React from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, Code, Rocket, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      <div className="container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Naresh 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Joshi</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
                Lead Software Engineer & 
                <span className="text-blue-600 font-semibold"> Full-Stack Architect</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                8+ years architecting scalable systems from startup MVPs to enterprise applications 
                processing 10M+ daily events. I take projects from 
                <span className="font-semibold text-gray-900"> concept to production</span> with 
                complete technical ownership.Currently working on  <span className="font-semibold text-blue-600"> AI powered high frequency Algorithmic Trading Application</span>
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-purple-600">10M+</div>
                <div className="text-sm text-gray-600">Events/Day</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600">60%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  View My Work
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <a 
                  href="mailto:thinkjoshi@gmail.com" 
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Mail size={18} />
                  <span>thinkjoshi@gmail.com</span>
                </a>
                <a 
                  href="tel:+918377862707" 
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 8377862707</span>
                </a>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/naresh-joshi-004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Joshi004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    NJ
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Expertise</h3>
                  <p className="text-gray-600">Full-Stack Development • System Architecture • Team Leadership</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Code className="text-blue-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">0 → Production</div>
                      <div className="text-sm text-gray-600">Complete SDLC ownership</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Rocket className="text-purple-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Startup Ready</div>
                      <div className="text-sm text-gray-600">Single-person tech team</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Users className="text-green-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise Scale</div>
                      <div className="text-sm text-gray-600">Millions of events/day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-xl rotate-12 opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-lg -rotate-12 opacity-60"></div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-purple-400/5 to-blue-400/5 rounded-3xl transform -rotate-3"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 