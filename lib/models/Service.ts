export interface Service {
  _id?: string;
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  category:
    | "electrical"
    | "construction"
    | "mechanical"
    | "supply"
    | "equipment"
    | "manpower";
  icon: string;
  images: string[];
  services: string[];
  createdAt: string;
  updatedAt: string;
  // Optional fields that may exist in some services
  domainExpertise?: string;
  industriesServed?: string[];
  keyBenefits?: string[];
  sectorsServed?: string[];
  capabilities?: string[];
  certifications?: string[];
  products?: any;
  clients?: string[];
  equipment?: any;
  materials?: any;
  personnel?: any;
}

export interface CreateServiceData {
  id?: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  category:
    | "electrical"
    | "construction"
    | "mechanical"
    | "supply"
    | "equipment"
    | "manpower";
  icon: string;
  images: string[];
  services: string[];
  // Optional fields
  domainExpertise?: string;
  industriesServed?: string[];
  keyBenefits?: string[];
  sectorsServed?: string[];
  capabilities?: string[];
  certifications?: string[];
  products?: any;
  clients?: string[];
  equipment?: any;
  materials?: any;
  personnel?: any;
}

export interface UpdateServiceData extends Partial<CreateServiceData> {
  updatedAt: string;
}
