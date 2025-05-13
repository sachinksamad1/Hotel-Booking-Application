export interface Room {
  _id?: string;
  name: string;
  type: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  available: boolean;
  description?: string;
  capacity?: number;
}