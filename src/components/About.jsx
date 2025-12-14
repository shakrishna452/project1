import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when section goes out of view to re-trigger animations
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const stats = [
    { number: "0.5+", label: "Years of Experience" },
    { number: "5+", label: "Completed Projects" },
    { number: "10+", label: "Happy Clients" },
    { number: "10+", label: "Technologies Mastered" }
  ];

  const skills = [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Tailwind CSS", "Redux Toolkit", "Git & GitHub", "Responsive Design",
    "API Integration", "VS Code", "Performance Optimization", "Framer Motion"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-spiral-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm Sha Krishna, a Frontend Developer with a strong focus on user-centric design, interaction thinking, and visual clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a passionate Frontend Developer with 6 months of hands-on experience, I specialize in building responsive, user-friendly web applications. I transformed my curiosity for how websites work into a professional skillset.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach focuses on writing clean, maintainable code and building seamless user interfaces. I'm constantly learning new technologies to stay current with the ever-evolving web development landscape.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lightBlue-100 rounded-full flex items-center justify-center mr-4 text-lightBlue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Today</p>
                    <p className="text-gray-900 font-semibold">+91 86680 48388</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lightBlue-100 rounded-full flex items-center justify-center mr-4 text-lightBlue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-semibold">n.shakrishna2025@vitstudent.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Skills */}
          <div className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'animate-stat-counter' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-lightBlue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-lightBlue-100 text-lightBlue-800 rounded-full text-sm font-medium hover:bg-lightBlue-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
