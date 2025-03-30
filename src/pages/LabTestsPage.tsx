
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TestCard from '@/components/ui/TestCard';

const categories = [
  'All Categories',
  'Health Checkups',
  'COVID-19',
  'Diabetes',
  'Thyroid',
  'Vitamin Tests',
  'Liver Function',
  'Kidney Function',
  'CBC',
  'Lipid Profile'
];

const LabTestsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showCategories, setShowCategories] = useState(false);
  const [sortBy, setSortBy] = useState('Popularity');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const tests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      description: 'Measures different components and features of your blood, including red blood cells, white blood cells, and platelets.',
      price: '$30',
      originalPrice: '$45',
      discount: '30%',
      homeCollection: true,
      reportTime: '24 Hours'
    },
    {
      id: 2,
      name: 'Comprehensive Metabolic Panel',
      description: 'Measures different chemicals in the blood to provide information about your muscles, bones, liver, kidneys, and more.',
      price: '$50',
      originalPrice: '$65',
      discount: '25%',
      homeCollection: true,
      reportTime: '24 Hours'
    },
    {
      id: 3,
      name: 'Lipid Profile',
      description: 'Measures the amount of cholesterol and triglycerides in your blood to assess heart disease risk.',
      price: '$35',
      originalPrice: '$50',
      discount: '30%',
      homeCollection: true,
      reportTime: '24 Hours'
    },
    {
      id: 4,
      name: 'HbA1c Test',
      description: 'Measures your average blood glucose levels over the past 2-3 months, important for diabetes monitoring.',
      price: '$25',
      originalPrice: '$35',
      discount: '30%',
      homeCollection: true,
      reportTime: '24 Hours'
    },
    {
      id: 5,
      name: 'Thyroid Profile',
      description: 'Measures thyroid hormone levels to assess thyroid function and diagnose conditions like hypothyroidism.',
      price: '$40',
      originalPrice: '$55',
      discount: '25%',
      homeCollection: true,
      reportTime: '48 Hours'
    },
    {
      id: 6,
      name: 'Vitamin D Test',
      description: 'Measures the level of vitamin D in your blood to diagnose deficiency or monitor treatment.',
      price: '$30',
      originalPrice: '$40',
      discount: '25%',
      homeCollection: true,
      reportTime: '24 Hours'
    }
  ];

  return (
    <main className="py-8">
      <div className="healthcare-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-healthcare-blue mb-4">Book Lab Tests</h1>
          <p className="text-gray-600">
            Book lab tests online and get samples collected from your home.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Input 
                type="text" 
                placeholder="Search for tests, health packages..." 
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <TestCard 
              key={test.id}
              name={test.name}
              description={test.description}
              price={test.price}
              originalPrice={test.originalPrice}
              discount={test.discount}
              homeCollection={test.homeCollection}
              reportTime={test.reportTime}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
            Load More Tests
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LabTestsPage;
