
import React from 'react';
import type { ChecklistItemType } from '../types';
import ChecklistItem from './ChecklistItem';

interface MaintenanceChecklistProps {
  items: ChecklistItemType[];
  onToggleItem: (id: number) => void;
}

const MaintenanceChecklist: React.FC<MaintenanceChecklistProps> = ({ items, onToggleItem }) => {
  const completedCount = items.filter(item => item.checked).length;
  const totalCount = items.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-gray-50 rounded-xl shadow-inner p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">Preventive Maintenance Checklist</h3>
            <span className="text-sm font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">{completedCount}/{totalCount}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {items.map((item) => (
          <ChecklistItem key={item.id} item={item} onToggle={onToggleItem} />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceChecklist;
