import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ModalgenService {

  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  private modalVisible = false;

  showModal() {
    this.modalVisible = true;
    // console.log("llega", this.modalVisible);
  }

  hideModal() {
    this.modalVisible = false;
  }

  isModalVisible() {
    // console.log("llega", this.modalVisible);
    return this.modalVisible;
  }

  // ObtenerInfo(data: any): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });

  //   // Realiza la solicitud POST enviando los datos y encabezados
  //   return this.http.post(`${this.apiUrl2}/med-records/search`, data, { headers });
  // }
}
