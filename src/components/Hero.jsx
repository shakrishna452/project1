import React, { useState, useEffect } from 'react';
import shaKrishnaPhoto from '../assets/krishna-image.jpeg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation step to restart animations
          setAnimationStep(0);
          setIsVisible(true);

          // Trigger animations when section comes into view
          const timer1 = setTimeout(() => setAnimationStep(1), 300);
          const timer2 = setTimeout(() => setAnimationStep(2), 600);
          const timer3 = setTimeout(() => setAnimationStep(3), 900);
          const timer4 = setTimeout(() => setAnimationStep(4), 1200);
          const timer5 = setTimeout(() => setAnimationStep(5), 1500);

          return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
          };
        } else {
          // Reset when section goes out of view
          setAnimationStep(0);
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('home');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Unique Morphing Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 blur-2xl animate-morphing-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-15 blur-2xl animate-morphing-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl animate-morphing-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Magnetic Pull Avatar */}
          <div className={`mb-12 flex justify-center ${animationStep >= 1 ? 'animate-magnetic-pull' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl hover-lift">
                <img
                  src={shaKrishnaPhoto}
                  alt="Sha Krishna"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
            </div>
          </div>

          {/* Typewriter Greeting */}
          <div className={`mb-8 ${animationStep >= 2 ? 'animate-typewriter' : 'opacity-0'}`}>
            <p className="text-lg text-primary-600 font-medium tracking-wide uppercase inline-block">
              Hello, I'm
            </p>
          </div>

          {/* Glitch Name Effect */}
          <div className={`mb-8 ${animationStep >= 3 ? 'animate-glitch' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary-900 font-display tracking-tight">
              Sha Krishna
            </h1>
          </div>

          {/* Elastic Bounce Title */}
          <div className={`mb-12 ${animationStep >= 4 ? 'animate-elastic-bounce' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-700 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed font-light">
              Creating intuitive and beautiful user experiences that engage and delight users,
              with a focus on user-centered design and visual storytelling.
            </p>
          </div>

          {/* Cascade Up Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${animationStep >= 5 ? 'animate-cascade-up' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="btn-primary group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <button
              onClick={scrollToProjects}
              className="btn-secondary group transform hover:scale-105 transition-all duration-300"
            >
              <span className="group-hover:text-accent-600 transition-colors duration-300">View My Work</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
