export interface Client {
  _id?: string;
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  industry: string;
  location: string;
  established: string;
  projects: string[];
  testimonial: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientData {
  name: string;
  description: string;
  website: string;
  logo: string;
  industry: string;
  location: string;
  established: string;
  projects: string[];
  testimonial: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  isActive?: boolean;
}

export interface UpdateClientData extends Partial<CreateClientData> {
  updatedAt: string;
}
