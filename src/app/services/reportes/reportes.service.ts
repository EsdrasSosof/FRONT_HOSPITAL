import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private apiUrl2 = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getConsultation(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-consultations`,{ headers });
  }

  getHistory(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-records`, { headers });
  }

  ObtenerInfo(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    return this.http.post(`${this.apiUrl2}/med-records/search`, data, { headers });
  }
  
}
