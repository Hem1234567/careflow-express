
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  bgColor?: string;
}

const ServiceCard = ({ title, description, icon, link, bgColor = 'bg-white' }: ServiceCardProps) => {
  return (
    <div className={`${bgColor} rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300`}>
      <div className="mb-4 text-healthcare-teal">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-healthcare-blue font-medium hover:text-healthcare-teal transition-colors"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
