
import React from 'react';
import { Youtube, Facebook } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About AdvertiseBazar</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dynamic digital marketing agency specializing in real estate lead generation, 
              video editing, graphic design, and web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Transforming Businesses Through Digital Excellence
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                At AdvertiseBazar, we believe in the power of creative digital solutions to drive real business results. 
                Our team combines technical expertise with creative vision to deliver campaigns that not only look 
                great but also convert.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  <span className="text-gray-700">Data-driven strategies that deliver measurable results</span>
                </div>
                <div className="flex items-center animate-slide-in-right" style={{animationDelay: '0.7s'}}>
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  <span className="text-gray-700">Creative excellence that captures your brand essence</span>
                </div>
                <div className="flex items-center animate-slide-in-right" style={{animationDelay: '0.8s'}}>
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  <span className="text-gray-700">24/7 support and dedicated project management</span>
                </div>
                <div className="flex items-center animate-slide-in-right" style={{animationDelay: '0.9s'}}>
                  <span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
                  <span className="text-gray-700">Cutting-edge technology and industry best practices</span>
                </div>
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl animate-scale-in"
                style={{animationDelay: '1s'}}
              >
                Get Started Today
              </button>
            </div>
            
            <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="relative inline-block mb-6 group">
                      <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                          alt="Founder" 
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Jamil Ahmad</h4>
                    <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      "Our mission is to empower businesses with digital solutions that drive growth, 
                      enhance brand presence, and deliver exceptional ROI."
                    </p>
                    
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Follow Us</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.instagram.com/advertisebazarofficial?igsh=bjU0MzRqdGhwZmt6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                          title="Follow us on Instagram"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296c-.867-.805-1.384-1.907-1.384-3.124c0-1.218.517-2.319 1.384-3.124c.868-.806 2.019-1.296 3.316-1.296c1.297 0 2.448.49 3.316 1.296c.867.805 1.384 1.906 1.384 3.124c0 1.217-.517 2.319-1.384 3.124c-.868.806-2.019 1.296-3.316 1.296zm7.072-2.665l-.028-.016l-.016-.028c-.8-.8-1.276-1.904-1.276-3.123c0-1.218.476-2.322 1.276-3.122l.016-.029l.028-.016c.8-.8 1.904-1.276 3.123-1.276c1.218 0 2.322.476 3.122 1.276l.029.016l.016.029c.8.8 1.276 1.904 1.276 3.122c0 1.219-.476 2.323-1.276 3.123l-.016.028l-.029.016c-.8.8-1.904 1.276-3.122 1.276c-1.219 0-2.323-.476-3.123-1.276z"/>
                          </svg>
                        </a>
                        <a 
                          href="#"
                          className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                          title="Follow us on Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a 
                          href="#"
                          className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                          title="Subscribe to our YouTube"
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
