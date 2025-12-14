import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Zap } from 'lucide-react';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect websites and single-page applications using modern technologies.",
      features: [
        "React.js & Application Development",
        "Responsive Web Design",
        "Component-Based Architecture",
        "Clean & Semantic Code"
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Web App Optimization",
      description: "Enhancing the performance, accessibility, and user experience of web applications.",
      features: [
        "Performance Optimization",
        "SEO Best Practices",
        "Cross-Browser Compatibility",
        "Accessibility (a11y) Implementation"
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 3,
      title: "API Integration",
      description: "Connecting frontend interfaces with backend services to create dynamic, data-driven applications.",
      features: [
        "RESTful API Integration",
        "State Management (Redux/Context)",
        "Real-time Data Updates",
        "Third-party Service Integration"
      ],
      icon: <Smartphone className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-900 font-display tracking-tight mb-6">
            What I can do
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed font-light">
            As a Frontend Developer, I craft experiences that connect deeply and spark creativity through thoughtful design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover-lift border border-primary-100 transform hover:scale-105 ${isVisible ? 'animate-card-flip' : 'opacity-0'
                }`}
              style={{
                animationDelay: `${index * 400}ms`
              }}
            >
              {/* Service Number with Wave Ripple */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-white shadow-lg animate-float">
                  {service.icon}
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-accent-400 animate-wave-ripple opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-primary-900 mb-4 font-display">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-primary-600 mb-8 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group/item">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-accent-500 rounded-full mt-2.5 mr-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-primary-700 text-sm leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-full h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-primary-600 mb-8 font-light">
            Ready to bring your ideas to life?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
