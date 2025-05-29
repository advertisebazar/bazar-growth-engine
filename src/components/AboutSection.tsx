
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                Transforming Businesses Through Digital Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AdvertiseBazar is a digital solutions agency founded by Md Jamil, focused on 
                transforming businesses with high-quality services including real estate leads, 
                creative content, and web development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in the digital marketing landscape, we understand 
                what it takes to drive real results for our clients. Our mission is to bridge 
                the gap between creativity and performance, delivering solutions that not only 
                look great but also convert.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl p-8">
                  <img 
                    src="/lovable-uploads/6e377141-7fc9-418f-a1eb-9ac2626c8c64.png" 
                    alt="Md Jamil - Founder & CEO" 
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Md Jamil</div>
                    <div className="text-sm opacity-90">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
              <p className="text-gray-600">
                To empower businesses with digital solutions that drive measurable growth and success.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
              <p className="text-gray-600">
                To be the leading digital agency that transforms creative ideas into profitable outcomes.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Values</h4>
              <p className="text-gray-600">
                Quality, integrity, innovation, and client success are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
