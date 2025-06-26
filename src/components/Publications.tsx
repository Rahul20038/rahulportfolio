import React from 'react';
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';

type Publication = {
  title: string;
  journal: string;
  authors: string[];
  year: string;
  abstract: string;
  tags: string[];
  link: string;
  status: 'Published' | 'Under Review';
};

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: 'Research Paper on Crop Yield Seasonality Measurement',
      journal: 'International Journal of Research and Analytical Reviews (IJRAR), Vol 11, Issue 1',
      authors: [
        'P. Sai Yaswanth',
        'N. Harsha Vardhan Reddy',
        'N. Narasimha Reddy',
        'N. Rahul',
        'C. Raja Bhushanam',
      ],
      year: '2024',
      abstract:
        'This research paper presents a web-based application that measures and analyzes crop yield seasonality using modern web technologies. It highlights the design, implementation, and impact factor of agricultural insights.',
      tags: ['Crop Yield', 'Web Technologies', 'Data Visualization', 'Agriculture', 'Python'],
      link: 'https://www.ijrar.org/viewfull.php?&p_id=IJRAR24A3340',
      status: 'Published',
    },
  ];

  return (
    <section id="publications" className="py-20 bg-black backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Research & Publications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-white mt-6 max-w-2xl mx-auto">
            Contributing to the academic community through research in cloud computing, DevOps, and software engineering
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="group bg-black backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <BookOpen className="text-yellow-400" size={24} />
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            publication.status === 'Published'
                              ? 'bg-green-400/10 border border-green-400/20 text-green-400'
                              : 'bg-yellow-400/10 border border-yellow-400/20 text-yellow-400'
                          }`}
                        >
                          {publication.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {publication.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-white/70 text-sm">
                          <BookOpen size={14} />
                          <span className="font-medium">{publication.journal}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/70 text-sm">
                          <Users size={14} />
                          <span>{publication.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/70 text-sm">
                          <Calendar size={14} />
                          <span>{publication.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-6">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>View Paper</span>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">Abstract:</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{publication.abstract}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-white/80 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Research Interests</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Cloud Computing</h4>
                <p className="text-white/70 text-sm">Scalable architecture, microservices, and serverless computing</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">DevOps & Automation</h4>
                <p className="text-white/70 text-sm">CI/CD optimization, infrastructure as code, and deployment strategies</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">AI/ML Integration</h4>
                <p className="text-white/70 text-sm">Machine learning in infrastructure monitoring and predictive analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
