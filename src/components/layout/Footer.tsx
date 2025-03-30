
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-healthcare-blue text-white pt-12 pb-8">
      <div className="healthcare-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthCare<span className="text-healthcare-orange">247</span></h3>
            <p className="text-gray-300 mb-4">
              Your trusted healthcare partner available 24/7. Quality healthcare at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Find a Doctor</Link></li>
              <li><Link to="/pharmacy" className="text-gray-300 hover:text-white">Medicines</Link></li>
              <li><Link to="/lab-tests" className="text-gray-300 hover:text-white">Lab Tests</Link></li>
              <li><Link to="/health-records" className="text-gray-300 hover:text-white">Health Records</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Online Consultation</Link></li>
              <li><Link to="/pharmacy" className="text-gray-300 hover:text-white">Medicine Delivery</Link></li>
              <li><Link to="/lab-tests" className="text-gray-300 hover:text-white">Home Sample Collection</Link></li>
              <li><Link to="/health-plans" className="text-gray-300 hover:text-white">Health Plans</Link></li>
              <li><Link to="/specialties" className="text-gray-300 hover:text-white">Specialties</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-2" />
                <span className="text-gray-300">support@healthcare247.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-2" />
                <span className="text-gray-300">+1 (800) 247-HEALTH</span>
              </li>
            </ul>
            <div className="mt-4">
              <button className="bg-healthcare-teal text-white py-2 px-4 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2023 HealthCare247. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
