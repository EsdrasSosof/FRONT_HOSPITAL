import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

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

  // ObtenerDocumento(data: any): Observable<HttpResponse<Blob>> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  
  //   return this.http.post(`${this.apiUrl2}/reporte-historial`, data, { headers, observe: 'response', responseType: 'blob' });
  // }

  ObtenerDocumento(record_id: number): Observable<HttpResponse<Blob>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    // Utiliza una solicitud GET para obtener el PDF
    return this.http.get(`${this.apiUrl2}/reporte-historial/${record_id}`, { headers, observe: 'response', responseType: 'blob' });
  }  
  
}
