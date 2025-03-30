
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MedicineCardProps {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  prescription?: boolean;
}

const MedicineCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  discount, 
  prescription = false 
}: MedicineCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain p-4"
        />
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-400 hover:text-healthcare-teal" />
        </button>
        {discount && (
          <div className="absolute top-2 left-2 bg-healthcare-orange text-white text-xs font-medium px-2 py-1 rounded">
            {discount} OFF
          </div>
        )}
        {prescription && (
          <div className="absolute bottom-0 left-0 right-0 bg-healthcare-blue text-white text-xs font-medium py-1 text-center">
            Prescription Required
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-gray-900 font-medium line-clamp-2 h-12">{name}</h3>
        
        <div className="mt-2 flex items-end">
          <span className="text-lg font-bold">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-gray-500 text-sm line-through">{originalPrice}</span>
          )}
        </div>
        
        <div className="mt-4">
          <Button className="w-full bg-healthcare-teal hover:bg-opacity-90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
