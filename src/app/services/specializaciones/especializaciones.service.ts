// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EspecializacionesService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EspecializacionesService {
  private apiUrl = 'http://localhost:3000/api/specializations';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getEspec(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}