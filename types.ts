
export interface Asset {
  id: string;
  assetType: string;
  scheduleDate: string;
  location: string;
  assetModel: string;
  warrantyDate: string;
  manufacturer: string;
  lastMaintenanceDate: string;
}

export interface ChecklistItemType {
  id: number;
  text: string;
  checked: boolean;
}
