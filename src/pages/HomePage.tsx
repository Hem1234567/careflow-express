
import { Link } from 'react-router-dom';
import { Stethoscope, Pill, Flask, Calendar, Clock, Award, UserCheck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/ServiceCard';
import DoctorCard from '@/components/ui/DoctorCard';
import TestCard from '@/components/ui/TestCard';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-healthcare-blue to-healthcare-teal text-white py-16">
        <div className="healthcare-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health Is Our Priority
              </h1>
              <p className="mt-4 text-lg">
                Get 24/7 online consultations, medicine delivery, and lab tests from the comfort of your home.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-white text-healthcare-teal hover:bg-gray-100">
                  Consult a Doctor
                </Button>
                <Button className="bg-healthcare-orange hover:bg-opacity-90">
                  Order Medicines
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl max-h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-healthcare-gray">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-blue">Our Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare services to meet all your medical needs from the comfort of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Consult with Doctors"
              description="Connect with experienced doctors online through video calls or book clinic visits."
              icon={<Stethoscope size={36} />}
              link="/doctors"
            />
            <ServiceCard 
              title="Order Medicines"
              description="Get medicines delivered to your doorstep within hours. Up to 30% discount on all orders."
              icon={<Pill size={36} />}
              link="/pharmacy"
            />
            <ServiceCard 
              title="Book Lab Tests"
              description="Book lab tests online and get samples collected from your home. Receive reports online."
              icon={<Flask size={36} />}
              link="/lab-tests"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-16">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-blue">Our Top Doctors</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Consult with top doctors across various specialties from the comfort of your home.
            </p>
          </div>

          <div className="space-y-6">
            <DoctorCard 
              name="Dr. Sarah Johnson"
              specialty="Cardiologist"
              experience="15+ Years"
              rating={4.8}
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&h=500"
              fee="$50"
            />
            <DoctorCard 
              name="Dr. Michael Chen"
              specialty="Pediatrician"
              experience="12+ Years"
              rating={4.9}
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&h=500"
              fee="$45"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/doctors">
              <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
                View All Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Lab Tests Section */}
      <section className="py-16 bg-healthcare-gray">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-blue">Popular Lab Tests</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Book your lab tests online and get samples collected from your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestCard 
              name="Complete Blood Count (CBC)"
              description="Measures different components and features of your blood."
              price="$30"
              originalPrice="$45"
              discount="30%"
            />
            <TestCard 
              name="Comprehensive Metabolic Panel"
              description="Measures the status of your kidneys, liver, and electrolyte and acid/base balance."
              price="$50"
              originalPrice="$65"
              discount="25%"
            />
            <TestCard 
              name="Lipid Profile"
              description="Measures the amount of cholesterol and triglycerides in your blood."
              price="$35"
              originalPrice="$50"
              discount="30%"
            />
            <TestCard 
              name="HbA1c"
              description="Measures your average blood glucose levels over the past 2-3 months."
              price="$25"
              originalPrice="$35"
              discount="30%"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/lab-tests">
              <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-lightBlue">
                View All Tests
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-blue">Why Choose HealthCare247</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare services with a focus on quality and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-healthcare-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-healthcare-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Access healthcare services anytime, day or night.</p>
            </div>
            <div className="text-center">
              <div className="bg-healthcare-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-healthcare-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Consult with top specialists across various fields.</p>
            </div>
            <div className="text-center">
              <div className="bg-healthcare-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-healthcare-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple and intuitive platform for all your healthcare needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-healthcare-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-healthcare-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your health data is encrypted and kept confidential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-healthcare-blue text-white">
        <div className="healthcare-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold">Download Our Mobile App</h2>
              <p className="mt-4">
                Get healthcare on the go with our mobile app. Book appointments, order medicines, view reports, and more.
              </p>
              <div className="mt-6 flex space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="white">
                    <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-4.293,4.293l-4.293-4.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414l5,5C11.488,18.902,11.744,19,12,19s0.512-0.098,0.707-0.293l5-5 C18.098,13.316,18.098,12.684,17.707,12.293z"/>
                  </svg>
                  App Store
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="white">
                    <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-4.293,4.293l-4.293-4.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414l5,5C11.488,18.902,11.744,19,12,19s0.512-0.098,0.707-0.293l5-5 C18.098,13.316,18.098,12.684,17.707,12.293z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Mobile App" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
