export interface Project {
  _id?: string;
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  client: string;
  location: string;
  startDate: string;
  endDate: string;
  status: "planned" | "in-progress" | "completed" | "on-hold";
  category:
    | "civil"
    | "mep"
    | "structural"
    | "industrial"
    | "commercial"
    | "residential";
  budget: string;
  images: string[];
  services: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  detailedDescription: string;
  client: string;
  location: string;
  startDate: string;
  endDate: string;
  status: "planned" | "in-progress" | "completed" | "on-hold";
  category:
    | "civil"
    | "mep"
    | "structural"
    | "industrial"
    | "commercial"
    | "residential";
  budget: string;
  images: string[];
  services: string[];
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  updatedAt: string;
}
