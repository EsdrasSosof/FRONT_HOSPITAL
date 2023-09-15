import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinasService {

    private apiUrl = 'http://localhost:3000/api/medicines';
  
    constructor(private http: HttpClient, private readonly api: ApiService) { }
  
    getMedicines(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

}
