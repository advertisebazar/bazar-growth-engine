
import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Agent",
      company: "Johnson Properties",
      content: "AdvertiseBazar transformed our lead generation. We went from 10 leads per month to over 150 qualified prospects. The ROI has been incredible!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "The video content they created for our social media campaigns increased our engagement by 300%. Highly professional and creative team!",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      company: "Rodriguez Boutique",
      content: "Our new website design not only looks amazing but also increased our online sales by 85%. The team understood our vision perfectly.",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Real Estate Broker",
      company: "Thompson Realty",
      content: "The graphic designs and marketing materials have elevated our brand significantly. We now stand out in a competitive market.",
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "Influencer",
      company: "LifestyleLisa",
      content: "The video editing services are top-notch! My content quality improved dramatically and my follower engagement skyrocketed.",
      avatar: "LW"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-primary/20">"</div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    {testimonials[currentIndex].content}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-primary font-semibold">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="text-center mt-12">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-600">Average rating: 4.9/5 based on 150+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
