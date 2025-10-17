
import React from 'react';
import type { ChecklistItemType } from '../types';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onToggle: (id: number) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onToggle }) => {
  return (
    <label
      htmlFor={`checkbox-${item.id}`}
      className="flex items-center p-4 bg-white rounded-lg shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md"
    >
      <input
        id={`checkbox-${item.id}`}
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggle(item.id)}
        className="sr-only"
      />
      <div
        className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
          item.checked
            ? 'bg-blue-600 border-blue-600'
            : 'bg-gray-50 border-gray-300'
        }`}
      >
        {item.checked && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`ml-4 text-base ${item.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
        {item.text}
      </span>
    </label>
  );
};

export default ChecklistItem;
