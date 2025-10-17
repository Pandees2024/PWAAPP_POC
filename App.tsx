
import React, { useState, useMemo } from 'react';
import type { Asset, ChecklistItemType } from './types';
import Header from './components/Header';
import AssetDetailCard from './components/AssetDetailCard';
import MaintenanceChecklist from './components/MaintenanceChecklist';
import ActionButton from './components/ActionButton';

// --- Mock Data ---
const mockAsset: Asset = {
  id: 'DEF-5678-XT',
  assetType: 'Ventilator System',
  scheduleDate: '2024-08-15',
  location: 'ICU - Room 302B',
  assetModel: 'Respira-Pro V.2',
  warrantyDate: '2025-12-31',
  manufacturer: 'MedTech Innovations',
  lastMaintenanceDate: '2024-02-10',
};

const initialChecklistItems: ChecklistItemType[] = [
  { id: 1, text: 'Inspect power cord for damage', checked: false },
  { id: 2, text: 'Verify system boots up correctly', checked: false },
  { id: 3, text: 'Check and clean all air filters', checked: false },
  { id: 4, text: 'Calibrate pressure sensors', checked: false },
  { id: 5, text: 'Test all alarms (high/low pressure, power failure)', checked: false },
  { id: 6, text: 'Verify battery backup functionality', checked: false },
  { id: 7, text: 'Inspect tubing and connectors for leaks or wear', checked: false },
  { id: 8, text: 'Run system diagnostic tests', checked: false },
  { id: 9, text: 'Sanitize all external surfaces', checked: false },
  { id: 10, text: 'Update firmware if available', checked: false },
  { id: 11, text: 'Document readings in the maintenance log', checked: false },
  { id: 12, text: 'Check oxygen sensor for accuracy', checked: false },
];
// --- End Mock Data ---


const App: React.FC = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItemType[]>(initialChecklistItems);

  const handleToggleItem = (id: number) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const allItemsChecked = useMemo(() => {
    return checklistItems.every(item => item.checked);
  }, [checklistItems]);

  const handleCompleteMaintenance = () => {
    if(allItemsChecked) {
        alert('Maintenance complete! All items have been checked.');
        // Here you would typically submit the data to a server.
    } else {
        alert('Please complete all checklist items before submitting.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto flex flex-col h-screen">
        <Header title="Asset Maintenance" />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <AssetDetailCard asset={mockAsset} />
          <MaintenanceChecklist
            items={checklistItems}
            onToggleItem={handleToggleItem}
          />
        </main>
        
        <footer className="p-4 md:p-6 bg-white border-t border-gray-200">
           <ActionButton onClick={handleCompleteMaintenance} disabled={!allItemsChecked}>
            Complete Maintenance
          </ActionButton>
        </footer>
      </div>
    </div>
  );
};

export default App;
