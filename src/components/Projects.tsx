import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Server, Cloud, Smartphone, Database, Code, Monitor, Globe, Shield, Cpu, GitBranch, Sun, LayoutDashboard } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fullStackProjects = [
    {
      title: 'Medico - Mobile Health Appointment App',
      description: 'Full-stack mobile application for booking medical appointments and connecting with doctors',
      longDescription: 'A comprehensive mobile health application built with React Native and Django REST framework. Features secure JWT authentication, department-based navigation, and real-time appointment booking system. Includes doctor profiles, patient management, and secure communication channels.',
      technologies: ['React Native', 'Django', 'JWT Authentication', 'REST API', 'SQLite', 'Python'],
      github: 'https://github.com/Rahul20038/medicoapp',
      demo: '#',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['JWT Authentication', 'Department Navigation', 'Appointment Booking', 'Doctor Profiles', 'User Management', 'Secure API Endpoints'],
      icon: <Smartphone className="text-blue-400" size={24} />,
      category: 'fullstack'
    },
    {
      title: 'Skanda - Industrial Websites',
      description: 'Full-stack web applications for showcasing industrial projects with responsive design',
      longDescription: 'Developed comprehensive web applications for industrial clients including Amasa Industries. Features responsive React.js frontend, Django backend with admin panel, user authentication system, and dynamic content management. Built with scalability and user experience in mind.',
      technologies: ['React.js', 'Django', 'SQLite', 'HTML5', 'CSS3', 'Django REST Framework', 'JWT'],
      github: 'https://github.com/Rahul20038/skanda-nexus-web',
      demo: 'https://skanda-website.vercel.app/',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Responsive Design', 'User Authentication', 'Admin Panel', 'Dynamic Content', 'Client Management', 'Inquiry System'],
      icon: <Globe className="text-green-400" size={24} />,
      category: 'fullstack'
    },
    {
      title: 'Crop Yield Seasonality Measurement',
      description: 'Web-based ML solution for monitoring crop yield seasonality using real-time data',
      longDescription: 'A data-driven machine learning application that helps farmers monitor and predict crop yields based on seasonal patterns and environmental factors. Built with Python Flask, integrated with MongoDB for data storage, and deployed on AWS EC2 for scalability.',
      technologies: ['Python Flask', 'Machine Learning', 'MongoDB', 'AWS EC2', 'Pandas', 'Matplotlib', 'HTML5', 'CSS3'],
      github: 'https://github.com/Rahul20038/Crop-Yield-Seasonality-Measurement',
      demo: '#',
      image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['ML Predictions', 'Seasonal Analysis', 'Real-time Data', 'Farmer Dashboard', 'Weather Integration', 'Yield Forecasting'],
      icon: <Database className="text-yellow-400" size={24} />,
      category: 'fullstack'
    },
    {
    title: 'Project Management Tool',
    description: 'Comprehensive project tracking and collaboration platform for teams',
    longDescription:
      'A full-featured project management tool that enables teams to collaborate, assign tasks, and track project progress. Users can create projects, add team members, assign tasks, update project status, and manage to-do lists. Includes detailed dashboards and secure access control.',
    technologies: ['React.js', 'Tailwind CSS', 'Django', 'REST API', 'Supabase'],
    github: 'https://github.com/Rahul20038/projectmanagementtool',
    demo: 'https://projectmanagementtool-sigma.vercel.app/login',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Team Collaboration', 'Project Tracking', 'Task Assignment', 'To-Do Lists', 'User Roles', 'API Integration'],
    icon: <LayoutDashboard className="text-purple-400" size={24} />,
    category: 'fullstack'
    },
    {
    title: 'Renewable Energy Summit Website 2026',
    description: 'Conference website with speaker listings, abstract submission, and admin control',
    longDescription:
      'A dynamic and visually rich conference website for the Renewable Summit 2026. Includes features such as speaker and venue listings, student registration, abstract submission, photo gallery, and a full admin panel to manage all content. Designed with a client-focused UI and responsive design.',
    technologies: ['React.js', 'Tailwind CSS', 'Django', 'Supabase'],
    github: 'https://github.com/Rahul20038/renewable-web',
    demo: 'https://renewable-web.vercel.app/',
    image: 'https://images.pexels.com/photos/4620867/pexels-photo-4620867.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Speaker Management', 'Registration System', 'Gallery Uploads', 'Abstract Submissions', 'Admin Panel', 'Responsive UI'],
    icon: <Sun className="text-orange-400" size={24} />,
    category: 'fullstack'
  }

  ];

  const devopsProjects = [
    {
      title: 'Jenkins CI/CD Pipeline for Java Web App',
      description: 'Automated deployment pipeline for static Java web application using Jenkins and AWS',
      longDescription: 'Developed a comprehensive four-stage Jenkins CI/CD pipeline to build, test, store artifacts, and deploy a Java web application on Apache Tomcat in AWS EC2. Integrated Maven for build automation, SonarQube for code quality analysis, JFrog Artifactory for artifact management, and Git for version control.',
      technologies: ['Jenkins', 'JFrog Artifactory', 'Git', 'AWS EC2', 'Apache Tomcat', 'SonarQube', 'Maven', 'Java'],
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['4-Stage Pipeline', 'Code Quality Gates', 'Artifact Management', 'Automated Testing', 'AWS Deployment', 'Build Automation'],
      icon: <GitBranch className="text-orange-400" size={24} />,
      category: 'devops'
    },
    {
      title: 'Cloud Native Monitoring Application',
      description: 'Containerized monitoring app using Python Flask and Docker with real-time metrics',
      longDescription: 'Built a cloud-native monitoring application using Python Flask to track system performance metrics. Leveraged psutil library for real-time system monitoring, containerized with Docker for portability, and deployed to AWS ECR for scalable container management.',
      technologies: ['Python Flask', 'Docker', 'AWS ECR', 'psutil', 'HTML5', 'CSS3', 'Containerization'],
      github: 'https://github.com/Rahul20038/cloud-native-monitoring-app',
      demo: '#',
      image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real-time Monitoring', 'System Metrics', 'Docker Containerization', 'Cloud Deployment', 'Performance Tracking', 'Scalable Architecture'],
      icon: <Monitor className="text-purple-400" size={24} />,
      category: 'devops'
    },
    {
      title: 'Azure Cloud Infrastructure Management',
      description: 'Hands-on Azure services implementation and AZ-104 certification preparation',
      longDescription: 'Comprehensive Azure cloud infrastructure project involving Virtual Machines, Storage accounts, Virtual Networks, and Azure AD implementation. Focused on network configurations, identity management, governance, and preparing for Azure Administrator Associate certification.',
      technologies: ['Azure VMs', 'Azure Storage', 'Virtual Networks', 'Azure AD', 'Azure Governance', 'PowerShell', 'ARM Templates'],
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['VM Management', 'Network Configuration', 'Identity Management', 'Storage Solutions', 'Security Policies', 'Cost Optimization'],
      icon: <Cloud className="text-blue-500" size={24} />,
      category: 'devops'
    }
  ];

  const allProjects = [...fullStackProjects, ...devopsProjects];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case 'fullstack':
        return fullStackProjects;
      case 'devops':
        return devopsProjects;
      default:
        return allProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 bg-black backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-white mt-6 max-w-2xl mx-auto">
            Real-world projects showcasing full-stack development and DevOps engineering expertise
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black backdrop-blur-sm border border-white/10 rounded-full p-1 flex space-x-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              <Code size={18} />
              <span>All Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'fullstack'
                  ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              <Server size={18} />
              <span>Full Stack</span>
            </button>
            <button
              onClick={() => setActiveTab('devops')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'devops'
                  ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              <Shield size={18} />
              <span>DevOps</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-black backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-black/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.category === 'fullstack'
                          ? 'bg-blue-400/10 border border-blue-400/20 text-blue-400'
                          : 'bg-orange-400/10 border border-orange-400/20 text-orange-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProject === index && (
                  <div className="mb-4 space-y-3">
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-white/70 text-sm">
                            <ChevronRight size={12} className="text-yellow-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300"
                  >
                    {expandedProject === index ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-black backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Server className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-1">{fullStackProjects.length}</h3>
            <p className="text-white">Full Stack Projects</p>
          </div>
          <div className="bg-black backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Shield className="text-orange-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-1">{devopsProjects.length}</h3>
            <p className="text-white">DevOps Projects</p>
          </div>
          <div className="bg-black backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Cpu className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-1">{allProjects.length}</h3>
            <p className="text-white">Total Projects</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Rahul20038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;