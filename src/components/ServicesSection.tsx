import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Real Estate Lead Generation',
      description: 'Hyper-targeted buyer & seller leads for realtors and brokers.',
      features: ['Qualified Prospects', 'Advanced Targeting', 'High Conversion Rates', '24/7 Support']
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing for influencers, businesses, and ads.',
      features: ['Social Media Videos', 'Commercial Ads', 'YouTube Content', 'Motion Graphics']
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'Eye-catching visuals that elevate your brand.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites designed for performance and conversions.',
      features: ['Responsive Design', 'E-commerce Sites', 'SEO Optimized', 'Fast Loading']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in today's competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                We understand that every business is unique. That's why we offer custom solutions 
                tailored to your specific needs and goals.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
