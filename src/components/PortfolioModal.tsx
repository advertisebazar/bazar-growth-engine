
import React from 'react';
import { X } from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    details?: {
      challenge: string;
      solution: string;
      results: string[];
      technologies?: string[];
    };
  } | null;
}

const PortfolioModal = ({ isOpen, onClose, project }: PortfolioModalProps) => {
  if (!isOpen || !project) return null;

  const getProjectDetails = (category: string) => {
    switch (category) {
      case 'Video':
        return {
          challenge: 'Client needed engaging video content for social media marketing',
          solution: 'Created dynamic video content with motion graphics and professional editing',
          results: ['1M+ views achieved', '300% increase in engagement', 'Viral content creation'],
          technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve']
        };
      case 'Design':
        return {
          challenge: 'Brand needed complete visual identity overhaul',
          solution: 'Developed comprehensive brand guidelines and visual assets',
          results: ['40% increase in brand recognition', 'Consistent brand presence', 'Professional image'],
          technologies: ['Adobe Illustrator', 'Photoshop', 'Figma']
        };
      case 'Websites':
        return {
          challenge: 'Business needed modern, conversion-optimized website',
          solution: 'Built responsive website with advanced features and SEO optimization',
          results: ['40% conversion rate', '60% faster loading', 'Mobile-first design'],
          technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
        };
      case 'Real Estate':
        return {
          challenge: 'Realtor needed qualified leads and professional marketing materials',
          solution: 'Created targeted lead generation campaigns and professional designs',
          results: ['500+ qualified leads', '25% increase in closings', 'Professional brand presence'],
          technologies: ['Facebook Ads', 'Google Ads', 'CRM Integration']
        };
      default:
        return {
          challenge: 'Project required custom solution',
          solution: 'Delivered tailored approach based on client needs',
          results: ['Successful project delivery', 'Client satisfaction', 'Goal achievement'],
          technologies: ['Various tools and technologies']
        };
    }
  };

  const details = getProjectDetails(project.category);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <span className="text-primary font-semibold text-sm">{project.category}</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">{project.title}</h2>
            <p className="text-gray-600 text-lg">{project.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Challenge</h3>
              <p className="text-gray-600 mb-6">{details.challenge}</p>
              
              <h3 className="text-xl font-bold mb-3">Solution</h3>
              <p className="text-gray-600">{details.solution}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Results</h3>
              <ul className="space-y-2 mb-6">
                {details.results.map((result, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {result}
                  </li>
                ))}
              </ul>
              
              {details.technologies && (
                <>
                  <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
