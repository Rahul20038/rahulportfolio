import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Ready to discuss your next project or explore opportunities? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Let's Connect</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                Whether you're looking for a full-stack developer, DevOps engineer, or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300">
                  <Mail className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:rahulchowdarynallamothu@gmail.com"
                    className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
                  >
                    rahulchowdarynallamothu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg group-hover:bg-red-500/20 transition-all duration-300">
                  <Phone className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+919959265198"
                    className="text-white hover:text-red-500 transition-colors duration-300"
                  >
                    +91-9959265198
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-400/10 border border-blue-400/20 rounded-lg group-hover:bg-blue-400/20 transition-all duration-300">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="https://github.com/Rahul20038"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <Github className="text-white hover:text-white" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-n-62285a224/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <Linkedin className="text-white hover:text-white" size={24} />
              </a>
              <a
                href="mail:rahulchowdarynallamothu@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <MessageSquare className="text-white hover:text-white" size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © 2025 Nallamothu Rahul.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;