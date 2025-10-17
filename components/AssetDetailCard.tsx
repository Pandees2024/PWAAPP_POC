
import React from 'react';
import type { Asset } from '../types';
import { CalendarIcon, LocationIcon, DeviceIcon, ShieldIcon, BuildingIcon } from './icons';

interface AssetDetailCardProps {
  asset: Asset;
}

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const AssetDetailCard: React.FC<AssetDetailCardProps> = ({ asset }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{asset.assetType}</h2>
      <p className="text-sm text-gray-500 mb-6">Asset ID: {asset.id}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
        <DetailItem icon={<DeviceIcon />} label="Asset Model" value={asset.assetModel} />
        <DetailItem icon={<BuildingIcon />} label="Manufacturer" value={asset.manufacturer} />
        <DetailItem icon={<LocationIcon />} label="Location" value={asset.location} />
        <DetailItem icon={<CalendarIcon />} label="Scheduled Date" value={asset.scheduleDate} />
        <DetailItem icon={<ShieldIcon />} label="Warranty End" value={asset.warrantyDate} />
        <DetailItem icon={<CalendarIcon />} label="Last Maintenance" value={asset.lastMaintenanceDate} />
      </div>
    </div>
  );
};

export default AssetDetailCard;
