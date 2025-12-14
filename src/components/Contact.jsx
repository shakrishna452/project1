import React, { useState, useEffect } from 'react';
import { Mail, Phone, Globe, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    'Frontend Development',
    'Web Application',
    'API Integration',
    'Performance Optimization'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate network delay
    setTimeout(() => {
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! (Simulation)' });
      setFormData({ name: '', email: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-elastic-bounce' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-900 font-display tracking-tight mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed font-light">
            Let's build something impactful together—whether it's your brand, your website, or your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-primary-50 rounded-3xl p-8 border border-primary-100 ${isVisible ? 'animate-form-slide' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary-900 mb-8 font-display">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-primary-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-primary-900 placeholder-primary-400"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-primary-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-primary-900 placeholder-primary-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service Field */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary-700 mb-3">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-primary-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-primary-900"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-3">
                  What Can I Help You With? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white border border-primary-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none text-primary-900 placeholder-primary-400"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-2xl font-medium text-lg transition-all duration-300 group relative overflow-hidden ${isSubmitting
                  ? 'bg-primary-300 cursor-not-allowed text-primary-600'
                  : 'btn-primary'
                  }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 border border-accent-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-8 font-display">Get in touch</h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300 text-accent-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">Email</h4>
                    <p className="text-primary-600">n.shakrishna2025@vitstudent.ac.in</p>
                    <p className="text-sm text-primary-500">I'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300 text-accent-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">Call Today</h4>
                    <p className="text-primary-600">+91 86680 48388</p>
                    <p className="text-sm text-primary-500">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300 text-accent-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">Social</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-accent-600 hover:text-accent-700 transition-colors duration-200 font-medium">
                        LinkedIn
                      </a>
                      <a href="#" className="text-accent-600 hover:text-accent-700 transition-colors duration-200 font-medium">
                        GitHub
                      </a>
                      <a href="#" className="text-accent-600 hover:text-accent-700 transition-colors duration-200 font-medium">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <h4 className="text-lg font-semibold text-green-800">Available for work</h4>
                  <p className="text-green-600">Currently accepting new projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
