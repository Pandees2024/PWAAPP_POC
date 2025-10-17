
import React from 'react';
import { ChevronLeftIcon, MenuIcon } from './icons';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-gray-900 text-center truncate">{title}</h1>
          </div>
          <div className="flex-shrink-0">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
