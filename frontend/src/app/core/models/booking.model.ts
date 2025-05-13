import { Customer } from "./customer.model";
import { Room } from "./room.model";

export interface Booking {
  _id?: string;
  roomId: string;
  room?: Room;
  customerId: string;
  customer?: Customer;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  status?: 'confirmed' | 'pending' | 'cancelled';
  createdAt?: Date;
  guests?: number;
  specialRequests?: string;
}