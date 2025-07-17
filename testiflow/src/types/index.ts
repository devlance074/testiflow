export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  feedback: string;
  tags: string[];
  date: string;
  approved: boolean;
}

export interface FilterOptions {
  rating?: number;
  tags?: string[];
  search?: string;
  sortBy?: 'newest' | 'oldest' | 'highest-rated' | 'lowest-rated';
}