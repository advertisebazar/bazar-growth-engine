
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Powering Your Brand with{' '}
            <span className="text-primary animate-pulse">Creativity</span> & Results
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
            From Real Estate Leads to Stunning Videos – We Deliver Digital Growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book a Free Call
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-primary animate-scale-in">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-primary animate-scale-in">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold text-primary animate-scale-in">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl font-bold text-primary animate-scale-in">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
