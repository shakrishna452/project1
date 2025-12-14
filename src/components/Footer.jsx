import React from 'react';
import { Linkedin, Github, Twitter, Dribbble, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Dribbble', href: '#', icon: <Dribbble className="w-5 h-5" /> }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sha Krishna</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Frontend Developer creating meaningful digital experiences that connect, engage, and inspire through thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lightBlue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-white hover:text-lightBlue-400 transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-lightBlue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-lightBlue-400 mr-2" />
                <span className="text-gray-300">er.shakrishna56@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-lightBlue-400 mr-2" />
                <span className="text-gray-300">+91 86680 48388</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-lightBlue-400 mr-2" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright {currentYear}. All Rights Reserved by Sha Krishna
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
