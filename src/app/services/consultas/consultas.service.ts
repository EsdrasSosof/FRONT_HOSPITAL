import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private apiUrl2 = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getConsultation(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-consultations`,{ headers });
  }

  createConsultation(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    return this.http.post(`${this.apiUrl2}/med-consultations`, data, { headers });
  }

  // updateMedico(personId: number | undefined, params: any): Observable<any> {
  updateConsultation(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // return this.http.patch<any>(`${this.apiUrl}/${personId}`, params, { headers });
    return this.http.patch(`${this.apiUrl2}/med-consultations/${id}`, data, { headers });
  }

  getConsultationById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/med-consultations/${id}`, { headers });
  }

  getMotive(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/motives`, { headers });
  }

  getPatients(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/med-patients`,{ headers });
  }
}
