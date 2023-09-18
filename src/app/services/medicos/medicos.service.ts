// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedicosService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiUrl = 'http://localhost:3000/api/doctors';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getMedicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // async getAll(): Promise<void> {
  //   try {
  //     const token = 'TOKEN_API';
  //     const records = await this.api.get('/medicos', { headers: { Authorization: `Bearer ${token}` } });
      
  //     console.log('records: ', records);

  //     return;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async createPerson(personId: number | undefined, params: any) {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const person = await this.api.post('/doctors' + personId, params, {  headers: { Authorization: `Bearer ${token}` }})
      
  //     return person;
  //   } catch (error) {
  //     throw error
  //   }
  // }

  createDoctor(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    return this.http.post(this.apiUrl, data, { headers });
  }
}
