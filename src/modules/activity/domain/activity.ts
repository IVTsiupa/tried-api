type TimeCreated = string | Date;

export interface ActivityProps {
  hostId: string;
  slug: string;
  title: string;
  description: string;
  reviews: string[];
  likes: number;
  isActive: boolean;
  timeCreated: TimeCreated;
}
