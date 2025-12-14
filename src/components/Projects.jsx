import React, { useState, useEffect } from 'react';
import { ShoppingCart, ClipboardList, Briefcase, CloudSun, Film, Utensils } from 'lucide-react';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with product filtering, cart management, and responsive layout.",
      category: "Web Development",
      image: <ShoppingCart className="w-24 h-24 text-accent-600" />,
      technologies: ["React", "Redux", "Tailwind CSS", "Fake Store API"],
      features: ["Product Filtering & Search", "Shopping Cart", "Responsive Checkout", "API Integration"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for tracking tasks with local storage persistence and drag-and-drop features.",
      category: "Web Application",
      image: <ClipboardList className="w-24 h-24 text-accent-600" />,
      technologies: ["React", "Context API", "LocalStorage", "CSS Modules"],
      features: ["CRUD Operations", "Data Persistence", "Dark Mode Toggle", "Drag & Drop"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing professional work and skills.",
      category: "Web Development",
      image: <Briefcase className="w-24 h-24 text-accent-600" />,
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive Design", "Smooth Animations", "Contact Form", "Performance Optimized"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A real-time weather tracking application providing current conditions and forecasts for global locations.",
      category: "API Integration",
      image: <CloudSun className="w-24 h-24 text-accent-600" />,
      technologies: ["JavaScript", "OpenWeatherMap API", "CSS Grid", "HTML5"],
      features: ["Real-time Data Fetching", "Location Search", "Dynamic Backgrounds", "Error Handling"]
    },
    {
      id: 5,
      title: "Movie Database App",
      description: "An interactive movie discovery platform allowing users to search and view movie details.",
      category: "Web Application",
      image: <Film className="w-24 h-24 text-accent-600" />,
      technologies: ["React", "TMDB API", "Responsive CSS", "React Router"],
      features: ["Search Functionality", "Dynamic Routing", "Pagination", "Favorite List"]
    },
    {
      id: 6,
      title: "Restaurant Landing Page",
      description: "A high-conversion landing page for a restaurant with menu display and reservation form.",
      category: "Web Development",
      image: <Utensils className="w-24 h-24 text-accent-600" />,
      technologies: ["HTML5", "SASS", "JavaScript", "AOS Library"],
      features: ["Mobile Responsive", "Smooth Scroll", "Image Gallery", "Form Validation"]
    }
  ];

  const categories = ["All", "Web Development", "Web Application", "API Integration"];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-900 font-display tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed font-light">
            These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-lightBlue-500 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-primary-100 ${isVisible ? 'animate-tilt-3d' : 'opacity-0'
                }`}
              style={{
                animationDelay: `${index * 300}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = 'projectHover 0.6s ease-out forwards';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animation = 'none';
              }}
            >
              {/* Project Image/Icon with Zoom Animation */}
              <div className="h-48 bg-gradient-to-br from-lightBlue-50 to-purple-50 flex items-center justify-center p-6">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-lightBlue-100 text-lightBlue-800 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lightBlue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-lightBlue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project Button */}
                <button className="w-full py-2 px-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-white font-semibold rounded-lg transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            Browse All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
