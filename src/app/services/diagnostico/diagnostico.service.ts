import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {

  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getDiagnostic(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-diagnostics`,{ headers });
  }

  createDiagnostics(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl2}/med-diagnostics`, data, { headers });
  }

  updateDiagnostics(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl2}/med-diagnostics/${id}`, data, { headers });
  }

  getDiagnosticById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/med-diagnostics${id}`, { headers });
  }

  getConsultation(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-consultations`,{ headers });
  }
}
