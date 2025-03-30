
import { useState } from 'react';
import { Search, Filter, ChevronDown, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MedicineCard from '@/components/ui/MedicineCard';

const categories = [
  'All Categories',
  'Prescription Drugs',
  'Over-the-Counter',
  'Vitamins & Supplements',
  'Ayurvedic',
  'Personal Care',
  'Health Devices',
  'Baby Care',
  'Wellness'
];

const PharmacyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showCategories, setShowCategories] = useState(false);
  const [sortBy, setSortBy] = useState('Popularity');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const medicines = [
    {
      id: 1,
      name: 'Aspirin 100mg Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$9.99',
      originalPrice: '$12.99',
      discount: '20%',
      prescription: true
    },
    {
      id: 2,
      name: 'Vitamin D3 1000 IU Capsules',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$14.99',
      originalPrice: '$19.99',
      discount: '25%',
      prescription: false
    },
    {
      id: 3,
      name: 'Hydrocortisone Cream 1%',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$7.99',
      originalPrice: '$9.99',
      discount: '20%',
      prescription: false
    },
    {
      id: 4,
      name: 'Cetirizine 10mg Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$11.99',
      originalPrice: '$15.99',
      discount: '25%',
      prescription: true
    },
    {
      id: 5,
      name: 'Calcium + Vitamin D3 Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$16.99',
      originalPrice: '$19.99',
      discount: '15%',
      prescription: false
    },
    {
      id: 6,
      name: 'Ibuprofen 400mg Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$8.99',
      originalPrice: '$11.99',
      discount: '25%',
      prescription: false
    },
    {
      id: 7,
      name: 'Multivitamin Daily Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$19.99',
      originalPrice: '$24.99',
      discount: '20%',
      prescription: false
    },
    {
      id: 8,
      name: 'Paracetamol 500mg Tablets',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=500&h=500',
      price: '$5.99',
      originalPrice: '$7.99',
      discount: '25%',
      prescription: false
    }
  ];

  return (
    <main className="py-8">
      <div className="healthcare-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-healthcare-blue mb-4">Online Pharmacy</h1>
          <p className="text-gray-600">
            Order medicines online and get them delivered to your doorstep.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Input 
                type="text" 
                placeholder="Search for medicines, brands..." 
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Button className="bg-healthcare-teal hover:bg-opacity-90">
              <Upload className="mr-2 h-4 w-4" />
              Upload Prescription
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center justify-between w-full sm:w-auto"
                onClick={() => setShowCategories(!showCategories)}
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              {showCategories && (
                <div className="absolute top-full left-0 mt-1 w-56 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategories(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center justify-between w-full sm:w-auto"
                onClick={() => setShowSortOptions(!showSortOptions)}
              >
                <Filter className="mr-2 h-4 w-4" />
                <span>Sort: {sortBy}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              {showSortOptions && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {['Popularity', 'Price: Low to High', 'Price: High to Low', 'Discount'].map((option) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <MedicineCard 
              key={medicine.id}
              name={medicine.name}
              image={medicine.image}
              price={medicine.price}
              originalPrice={medicine.originalPrice}
              discount={medicine.discount}
              prescription={medicine.prescription}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
            Load More Products
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PharmacyPage;
