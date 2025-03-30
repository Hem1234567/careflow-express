
import { Clock, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestCardProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  homeCollection?: boolean;
  reportTime?: string;
}

const TestCard = ({ 
  name, 
  description, 
  price, 
  originalPrice, 
  discount, 
  homeCollection = true,
  reportTime = '24 Hours'
}: TestCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        </div>
        {discount && (
          <div className="bg-healthcare-orange text-white text-xs font-medium px-2 py-1 rounded h-fit">
            {discount} OFF
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-600 space-x-4">
        {homeCollection && (
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1 text-healthcare-teal" />
            <span>Home Collection</span>
          </div>
        )}
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-healthcare-teal" />
          <span>Report in {reportTime}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-end">
        <span className="text-lg font-bold">{price}</span>
        {originalPrice && (
          <span className="ml-2 text-gray-500 text-sm line-through">{originalPrice}</span>
        )}
      </div>
      
      <div className="mt-4 flex space-x-3">
        <Button className="flex-1 bg-healthcare-teal hover:bg-opacity-90">Book Now</Button>
        <Button variant="outline" className="flex-1 border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default TestCard;
