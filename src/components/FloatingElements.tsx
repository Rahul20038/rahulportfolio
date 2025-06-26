import React from 'react';
import { Code, Server, Cloud, Database, GitBranch, Monitor } from 'lucide-react';

const FloatingElements = () => {
  const techIcons = [
    { Icon: Code, delay: '0s', duration: '20s' },
    { Icon: Server, delay: '5s', duration: '25s' },
    { Icon: Cloud, delay: '10s', duration: '30s' },
    { Icon: Database, delay: '15s', duration: '35s' },
    { Icon: GitBranch, delay: '20s', duration: '40s' },
    { Icon: Monitor, delay: '25s', duration: '45s' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, delay, duration }, index) => (
        <div
          key={index}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon size={40} />
        </div>
      ))}

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Animated Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 Q250,300 500,400 T1000,400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,600 Q250,700 500,600 T1000,600"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-1000"
        />
      </svg>
    </div>
  );
};

export default FloatingElements;