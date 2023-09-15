// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedicosService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
//--- segundo código si hace request---
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth/auth.service';
// import { Token } from '@angular/compiler';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedicosService {
//   private apiUrl = 'http://localhost:3000/api/doctors';

//   constructor(private http: HttpClient, private authService: AuthService) { }

// getMedicos(): Observable<any[]> {
//     // Obtenemos el token de autenticación
//     // const token = this.authService.getToken();
//     const token = this.authService.getSession();

//     // Agregamos el token al encabezado de la solicitud
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

//     // Creamos una opción de solicitud con los encabezados
//     const requestOptions = {
//       headers: headers
//     };

//     // Realizamos la solicitud HTTP con las opciones de solicitud
//     return this.http.get<any[]>(this.apiUrl, requestOptions);
//   }
// }
//---tercera mejora, no hace request----
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class MedicosService {
//   private apiUrl = 'http://localhost:3000/api/doctors';

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   getMedicos(): Observable<any[]> {
//     // Obtenemos el token de autenticación
//     const token = this.authService.getSession();

//     // Verifica si el token existe antes de agregarlo al encabezado
//     if (token) {
//       // Agregamos el token al encabezado de la solicitud
//       const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

//       // Creamos una opción de solicitud con los encabezados
//       const requestOptions = {
//         headers: headers,
//       };

//       // Realizamos la solicitud HTTP con las opciones de solicitud
//       return this.http.get<any[]>(this.apiUrl, requestOptions);
//     } else {
//       // Si no hay token, puedes manejar el flujo de error o devolver un Observable vacío
//       return new Observable<any[]>(observer => {
//         observer.next([]);
//         observer.complete();
//       });
//     }
//   }
// }
