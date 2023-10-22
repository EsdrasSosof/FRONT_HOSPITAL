import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  // private apiUrl = 'http://localhost:3000/api/roles';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';
  
  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getRoles(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl2);
    return this.http.get<any[]>(`${this.apiUrl2}/roles`);
  }

  createRoles(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    // return this.http.post(this.apiUrl2, data, { headers });
    return this.http.post<any[]>(`${this.apiUrl2}/roles`,data, { headers });
  }

  updateRoles(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl2}/roles/${id}`, data, { headers });
  }

  getRolById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/roles/${id}`, { headers });
  }
}
