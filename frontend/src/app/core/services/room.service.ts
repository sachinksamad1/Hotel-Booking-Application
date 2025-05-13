import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) { }

  getRooms(filters?: any): Observable<Room[]> {
    let params = new HttpParams();
    
    if (filters) {
      if (filters.checkIn) params = params.append('checkIn', filters.checkIn);
      if (filters.checkOut) params = params.append('checkOut', filters.checkOut);
      if (filters.guests) params = params.append('guests', filters.guests);
      if (filters.type) params = params.append('type', filters.type);
      if (filters.minPrice) params = params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params = params.append('maxPrice', filters.maxPrice);
    }
    
    return this.http.get<Room[]>(this.apiUrl, { params });
  }

  getRoom(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  updateRoom(id: string, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${id}`, room);
  }

  deleteRoom(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  checkAvailability(roomId: string, checkIn: Date, checkOut: Date): Observable<boolean> {
    const params = new HttpParams()
      .append('checkIn', checkIn.toISOString())
      .append('checkOut', checkOut.toISOString());
    
    return this.http.get<boolean>(`${this.apiUrl}/${roomId}/availability`, { params });
  }
}