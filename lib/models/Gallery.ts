export interface Gallery {
  _id?: string;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGalleryData {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  isActive?: boolean;
}

export interface UpdateGalleryData extends Partial<CreateGalleryData> {
  updatedAt: string;
}
