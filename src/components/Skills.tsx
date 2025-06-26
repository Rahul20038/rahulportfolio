import React from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor,
  Smartphone,
  Settings,
  Terminal,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-yellow-400" size={32} />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-yellow-400/20 to-orange-500/20'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-red-500" size={32} />,
      skills: ['Python', 'Django', 'REST APIs', 'FastAPI'],
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-blue-400" size={32} />,
      skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Kubernetes', 'Terraform', 'Azure', 'SonarQube', 'Linux', 'Bash', 'PowerShell'],
      color: 'from-blue-400/20 to-cyan-500/20'
    },
    {
      title: 'Databases',
      icon: <Database className="text-green-400" size={32} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Superbase'],
      color: 'from-green-400/20 to-emerald-500/20'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="text-purple-400" size={32} />,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'AWS Codecommit'],
      color: 'from-purple-400/20 to-violet-500/20'
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="text-orange-400" size={32} />,
      skills: ['VS Code', 'Postman', 'Figma', 'Linux', 'Bash', 'PowerShell'],
      color: 'from-orange-400/20 to-red-400/20'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and managing cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Monitor className="text-blue-400 mx-auto" size={32} />
                <h4 className="font-semibold">Full Stack Development</h4>
                <p className="text-white/70 text-sm">End-to-end web application development with modern frameworks</p>
              </div>
              <div className="space-y-2">
                <Terminal className="text-green-400 mx-auto" size={32} />
                <h4 className="font-semibold">DevOps & Automation</h4>
                <p className="text-white/70 text-sm">CI/CD pipelines, containerization, and infrastructure automation</p>
              </div>
              <div className="space-y-2">
                <Globe className="text-purple-400 mx-auto" size={32} />
                <h4 className="font-semibold">Cloud Solutions</h4>
                <p className="text-white/70 text-sm">Scalable cloud architecture and deployment strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;