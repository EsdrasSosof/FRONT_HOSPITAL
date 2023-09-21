import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivosService {

 
  private apiUrl = 'http://localhost:3000/api/motives';
  private apiUrl2 = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getMotives(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/motives`,{ headers });
  }

  createMotive(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    return this.http.post(`${this.apiUrl2}/motives`, data, { headers });
  }

  updateMotive(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl2}/motives/${id}`, data, { headers });
  }

  getMotiveById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/motives/${id}`, { headers });
  }
}
