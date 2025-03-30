
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="healthcare-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-healthcare-blue">HealthCare<span className="text-healthcare-teal">247</span></h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/doctors" className="text-gray-700 hover:text-healthcare-teal font-medium">Consult Doctors</Link>
            <Link to="/pharmacy" className="text-gray-700 hover:text-healthcare-teal font-medium">Pharmacy</Link>
            <Link to="/lab-tests" className="text-gray-700 hover:text-healthcare-teal font-medium">Lab Tests</Link>
            <Link to="/health-records" className="text-gray-700 hover:text-healthcare-teal font-medium">Health Records</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-healthcare-teal hover:bg-opacity-90">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/doctors" className="text-gray-700 hover:text-healthcare-teal font-medium py-2" onClick={toggleMenu}>
                Consult Doctors
              </Link>
              <Link to="/pharmacy" className="text-gray-700 hover:text-healthcare-teal font-medium py-2" onClick={toggleMenu}>
                Pharmacy
              </Link>
              <Link to="/lab-tests" className="text-gray-700 hover:text-healthcare-teal font-medium py-2" onClick={toggleMenu}>
                Lab Tests
              </Link>
              <Link to="/health-records" className="text-gray-700 hover:text-healthcare-teal font-medium py-2" onClick={toggleMenu}>
                Health Records
              </Link>
              <div className="flex space-x-4 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button className="bg-healthcare-teal hover:bg-opacity-90">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
