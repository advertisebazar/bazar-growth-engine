
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 md:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in px-2">
            Powering Your Brand with{' '}
            <span className="text-primary animate-pulse">Creativity</span> & Results
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right px-4">
            From Real Estate Leads to Stunning Videos – We Deliver Digital Growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in px-4">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Book a Free Call
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl md:text-3xl font-bold text-primary animate-scale-in">500+</div>
              <div className="text-sm md:text-base text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="text-2xl md:text-3xl font-bold text-primary animate-scale-in">150+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <div className="text-2xl md:text-3xl font-bold text-primary animate-scale-in">4+</div>
              <div className="text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.8s'}}>
              <div className="text-2xl md:text-3xl font-bold text-primary animate-scale-in">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support</div>
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
