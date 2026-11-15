export type ProjectCategory = 'architecture' | 'interior' | 'commercial' | 'all';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'architecture' | 'interior' | 'commercial';
  categoryLabel?: string;
  subtitle: string;
  designNature: string;
  look: string;
  year?: string;
  video?: string;
  client?: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  featured?: boolean;
  architecturalStyle?: string;
  photographer?: string;
  location?: string;
  area?: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: 'Architecture' | 'Interior Design' | 'Turnkey Studio' | 'Commercial Renovation';
  location: string;
  preferredOffice: 'Erode Head Atelier' | 'Virtual Consultation' | 'On-Site Site Meeting';
  estimatedBudget: string;
  message: string;
}
