import React from 'react';
import { Code, Server, Cloud, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full blur-2xl absolute inset-0"></div>
                <div className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center relative">
                  <img
                    src="/mypic.png"
                    alt="Nallamothu Rahul"
                    className="w-70 h-70 rounded-full object-cover border-4 border-white/20 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate Full Stack Developer and DevOps Engineer with a strong foundation in
              building scalable web applications and optimizing cloud infrastructure. My journey spans
              across modern web technologies, cloud platforms, and automation tools.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              With hands-on experience from internships at Zynlogic Technologies and Mactores,
              I've developed expertise in both development and operations, enabling me to deliver
              end-to-end solutions that are robust, scalable, and maintainable.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="text-yellow-400" size={24} />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <p className="text-white/70">React, HTML5, CSS3, JavaScript, TypeScript</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Server className="text-red-500" size={24} />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <p className="text-white/70">Python, Django, REST APIs</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Cloud className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
                </div>
                <p className="text-white/70">AWS, Docker, Jenkins, CI/CD, Kubernetes, Azure Basics</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="text-green-400" size={24} />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <p className="text-white/70">PostgreSQL, MySQL, MongoDB, SQL Lite, Supabase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
