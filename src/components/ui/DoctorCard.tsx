
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
  fee: string;
  availability?: string;
}

const DoctorCard = ({ 
  name, 
  specialty, 
  experience, 
  rating, 
  image, 
  fee, 
  availability = 'Available today' 
}: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center sm:object-top"
          />
        </div>
        <div className="p-6 sm:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              <p className="text-healthcare-teal font-medium">{specialty}</p>
            </div>
            <div className="flex items-center bg-healthcare-lightBlue text-healthcare-blue px-2 py-1 rounded">
              <Star className="h-4 w-4 fill-healthcare-orange text-healthcare-orange mr-1" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-600"><span className="font-medium">Experience:</span> {experience}</p>
            <p className="text-gray-600 mt-1"><span className="font-medium">Fee:</span> {fee}</p>
          </div>
          
          <div className="mt-4 flex items-center text-green-600">
            <div className="h-2 w-2 rounded-full bg-green-600 mr-2"></div>
            <span className="text-sm">{availability}</span>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="bg-healthcare-teal hover:bg-opacity-90">Book Video Consult</Button>
            <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
              Book Clinic Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
