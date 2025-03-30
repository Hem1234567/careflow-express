
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DoctorCard from '@/components/ui/DoctorCard';

const specialties = [
  'All Specialties',
  'Cardiology',
  'Dermatology',
  'Endocrinology',
  'Gastroenterology',
  'Neurology',
  'Obstetrics & Gynecology',
  'Oncology',
  'Ophthalmology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Pulmonology',
  'Urology'
];

const DoctorsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [showSpecialties, setShowSpecialties] = useState(false);
  const [sortBy, setSortBy] = useState('Relevance');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15+ Years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&h=500',
      fee: '$50',
      availability: 'Available today'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      experience: '12+ Years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&h=500',
      fee: '$45',
      availability: 'Available today'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatologist',
      experience: '10+ Years',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&h=500',
      fee: '$60',
      availability: 'Available tomorrow'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ Years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&h=500',
      fee: '$65',
      availability: 'Available today'
    },
    {
      id: 5,
      name: 'Dr. Sophia Patel',
      specialty: 'Gynecologist',
      experience: '14+ Years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=500&h=500',
      fee: '$55',
      availability: 'Available in 2 days'
    }
  ];

  return (
    <main className="py-8">
      <div className="healthcare-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-healthcare-blue mb-4">Consult with Doctors</h1>
          <p className="text-gray-600">
            Book appointments with top doctors for video consultation or clinic visits.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input 
                type="text" 
                placeholder="Search doctors, specialties..." 
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center justify-between w-full md:w-auto"
                onClick={() => setShowSpecialties(!showSpecialties)}
              >
                <span>{selectedSpecialty}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              {showSpecialties && (
                <div className="absolute top-full left-0 mt-1 w-56 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setSelectedSpecialty(specialty);
                        setShowSpecialties(false);
                      }}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center justify-between w-full md:w-auto"
                onClick={() => setShowSortOptions(!showSortOptions)}
              >
                <Filter className="mr-2 h-4 w-4" />
                <span>Sort: {sortBy}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              {showSortOptions && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {['Relevance', 'Rating: High to Low', 'Experience: High to Low', 'Fee: Low to High'].map((option) => (
                    <button
                      key={option}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setSortBy(option);
                        setShowSortOptions(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {doctors.map((doctor) => (
            <DoctorCard 
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              rating={doctor.rating}
              image={doctor.image}
              fee={doctor.fee}
              availability={doctor.availability}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
            Load More Doctors
          </Button>
        </div>
      </div>
    </main>
  );
};

export default DoctorsPage;
