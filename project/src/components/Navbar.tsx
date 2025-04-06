import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-emerald-600">
              EcoThreads
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/shop" className="text-gray-700 hover:text-emerald-600">
              Shop
            </Link>
            {user ? (
              <>
                {user.role === 'seller' && (
                  <Link to="/seller/products" className="text-gray-700 hover:text-emerald-600">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="text-gray-700 hover:text-emerald-600">
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};