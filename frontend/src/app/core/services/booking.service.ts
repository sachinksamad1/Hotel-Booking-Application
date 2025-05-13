import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = `${environment.apiUrl}/bookings`;

  constructor(private http: HttpClient) { }

  getBookings(customerId?: string): Observable<Booking[]> {
    let params = new HttpParams();
    
    if (customerId) {
      params = params.append('customerId', customerId);
    }
    
    return this.http.get<Booking[]>(this.apiUrl, { params });
  }

  getBooking(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  }

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }

  updateBooking(id: string, booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/${id}`, booking);
  }

  cancelBooking(id: string): Observable<Booking> {
    return this.http.patch<Booking>(`${this.apiUrl}/${id}/cancel`, {});
  }

  calculatePrice(roomId: string, checkIn: Date, checkOut: Date): Observable<number> {
    const params = new HttpParams()
      .append('roomId', roomId)
      .append('checkIn', checkIn.toISOString())
      .append('checkOut', checkOut.toISOString());
    
    return this.http.get<number>(`${this.apiUrl}/calculate-price`, { params });
  }
}