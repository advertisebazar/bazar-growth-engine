
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-primary mb-4">
                AdvertiseBazar
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Powering your brand with creativity and results. We specialize in real estate lead generation, 
                video editing, graphic design, and web development.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/de3e844f-f504-40cb-a5ee-e722997836a8.png" 
                    alt="Md Jamil - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Md Jamil</h4>
                  <p className="text-gray-300 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">Real Estate Leads</li>
                <li className="text-gray-300">Video Editing</li>
                <li className="text-gray-300">Graphic Design</li>
                <li className="text-gray-300">Web Development</li>
                <li className="text-gray-300">Custom Solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 mb-4 md:mb-0">
                © 2024 AdvertiseBazar. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            
            <div className="text-center mt-6 text-gray-400 text-sm">
              Founded by Md Jamil | Transforming Businesses Through Digital Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
