import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinasService {

  // private apiUrl2 = 'http://localhost:3000/api/medicines';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getMedicines(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl2);
    return this.http.get<any[]>(`${this.apiUrl2}/medicines`);
  }
  createMedicines(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    // return this.http.post(this.apiUrl2, data, { headers });
    return this.http.post<any[]>(`${this.apiUrl2}/medicines`,data, { headers });
  }

  updateMedicna(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // return this.http.patch(`${this.apiUrl2}/${id}`, data, { headers });
    return this.http.patch(`${this.apiUrl2}/medicines/${id}`, data, { headers });
  }

  getMedicinaById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/medicines/${id}`, { headers });
  }

}
