
import React from 'react';
import { ExternalLink, Star, Users, Award } from 'lucide-react';

const InternationalPresenceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">International Presence</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve clients worldwide through our global freelancing platform presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Trusted by Clients Globally
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With our presence on international freelancing platforms, we've successfully 
                delivered projects to clients across different continents, building a reputation 
                for quality, reliability, and excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">5.0</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Global Clients</div>
                </div>
              </div>
              
              <a 
                href="https://www.fiverr.com/jamil123897?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group"
              >
                Visit Our Fiverr Profile
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg animate-scale-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Fiverr Pro Seller</h4>
                  <p className="text-gray-600">Verified Professional</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Completed Projects</span>
                  <span className="font-semibold">200+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">&lt; 1 Hour</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Delivery Rate</span>
                  <span className="font-semibold">100% On Time</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Client Satisfaction</span>
                  <span className="font-semibold text-green-600">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPresenceSection;
