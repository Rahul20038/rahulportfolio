import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Mactores',
      position: 'Cloud/DevOps Engineering Intern',
      duration: 'Feb-2025 to Apr-2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Focused on cloud infrastructure automation and DevOps practices',
      responsibilities: [
        'Designed and implemented CI/CD pipelines using Jenkins and GitLab',
        'Automated infrastructure deployment using Terraform and Ansible',
        'Optimized cloud costs and improved system reliability by 30%',
        'Worked with containerization technologies (Docker, Kubernetes)',
        'Implemented monitoring and logging solutions for production systems'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible', 'Prometheus'],
      color: 'from-blue-400/20 to-cyan-500/20'
    },
    {
      company: 'Zynlogic Technologies',
      position: 'Full Stack Development Intern',
      duration: 'Mar-2025 to Present',
      location: 'Hyderabad, India',
      type: 'Internship',
      description: 'Developed and maintained web applications using modern frameworks',
      responsibilities: [
        'Built responsive web applications using React and Django',
        'Developed RESTful APIs and integrated third-party services',
        'Collaborated with cross-functional teams in Agile environment',
        'Implemented user authentication and authorization systems',
        'Optimized application performance and user experience'
      ],
      technologies: ['React', 'Django', 'PostgreSQL', 'Python', 'JavaScript', 'HTML/CSS', 'Git'],
      color: 'from-yellow-400/20 to-orange-500/20'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Hands-on experience in both development and operations, building real-world solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-red-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-4 border-black z-10 hidden lg:block"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-medium mb-2">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                          <div className="flex items-center space-x-4 text-white/70 text-sm">
                            <div className="flex items-center space-x-1">
                              <Building size={14} />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-yellow-400 mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2 text-white/70 text-sm">
                              <ChevronRight size={12} className="text-yellow-400 mt-1 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-yellow-400 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-white/80 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">What I Learned</h3>
            <p className="text-white/80 leading-relaxed">
              Through these experiences, I've gained valuable insights into both development and operations. 
              I've learned the importance of writing clean, maintainable code, implementing robust CI/CD pipelines, 
              and building scalable cloud infrastructure. These roles have shaped my understanding of the complete 
              software development lifecycle and the critical role of DevOps in modern application delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;