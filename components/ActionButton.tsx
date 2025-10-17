
import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105
        ${disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
        }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
