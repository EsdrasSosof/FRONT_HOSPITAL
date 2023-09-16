import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import Cookies from 'js-cookie';
import { ApiService } from '../api/api.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo: any;

  constructor(private readonly api: ApiService) {}

  public isAuthenticated(): boolean {
    const session = this.getSession();
    let jwtSession = false;

    if (session) {
      this.userInfo = jwtHelper.decodeToken(session);
      jwtSession = !jwtHelper.isTokenExpired(session);
    }

    return jwtSession;
  }

  public getSession() {
    const jwt = Cookies.get('__session'); 
    let session = null;

    if (jwt) {
      session = jwt;
    }
    
    return session;
  }

  public setSession(user: any, token: string): void {
    Cookies.set('__session', token);
    localStorage.setItem('token', token);
    // localStorage.setItem('user', JSON.stringify(user));

    return;
  }
  
  public removeSession(): void {
    Cookies.remove('__session');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // async getUserInfo(username: string, password: string): Promise<boolean> {
  //   try {
  //   const response = await this.api.post('/api/auth/login', { username, password });

  //     if (response && response.token !== undefined) {
  //       const userDetails = response.user[0];
  //       const token = response.token;
  //       console.log("el token es",token)

  //       this.setSession(userDetails, token);

  //       return true;
  //     }
      
  //     return false;
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // }

  // ---- ya trae el token en consola
  async getUserInfo(username: string, password: string): Promise<boolean> {
    try {
      const response = await this.api.post('/api/auth/login', { username, password });
  
      if (response && response.token !== undefined) {
        const userDetails = response.user;
        const token = response.token;
        console.log("El token es", token);
  
        this.setSession(userDetails, token);
  
        return true;
      }
  
      return false;
    } catch (error) {
      return false;
    }
  }
  
}
//------segunda prueba no captura token ----
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import Cookies from 'js-cookie';
// import { ApiService } from '../api/api.service';
// import { HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';

// const jwtHelper = new JwtHelperService();

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService{
//   public userInfo: any;

//   constructor(
//     private readonly api: ApiService,
//     private http: HttpClient
//   ) {}

//   public isAuthenticated(): boolean {
//     const session = this.getSession();
//     let jwtSession = false;

//     if (session) {
//       this.userInfo = jwtHelper.decodeToken(session);
//       jwtSession = !jwtHelper.isTokenExpired(session);
//     }

//     return jwtSession;
//   }

//   public getSession() {
//     const jwt = Cookies.get('__session');
//     let session = null;

//     if (jwt) {
//       session = jwt;
//     }

//     return session;
//   }

//   public setSession(user: any, token: string): void {
//     Cookies.set('__session', token);
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//   }

//   public removeSession(): void {
//     Cookies.remove('__session');
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   }

//   public getToken(): string | null {
//     return Cookies.get('__session') || null;
//   }

//   public login(username: string, password: string): Observable<any> {
//     const formData = { username, password };
//     return this.http.post('http://localhost:3000/api/auth/login', formData);
//   }

//   async getUserInfo(username: string, password: string): Promise<boolean> {
//     try {
//       // const response = await this.api.post('/users/login', { username, password });
      
//       // if (response && response.token !== undefined) {
//       //   const userDetails = response.user[0];
//       //   const token = response.token;

//       //   this.setSession(userDetails, token);

//       //   return true;
//       // }
      
//       // return false;
//       return true;
//     } catch (error) {
//       return false;
//     }
//   }
// }
//--- tercera prueba ----
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';
// import Cookies from 'js-cookie';
// import { JwtHelperService } from '@auth0/angular-jwt';

// const jwtHelper = new JwtHelperService();

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   public userInfo: any;
//   private apiUrl = 'http://localhost:3000/api/auth/login';

//   constructor(private http: HttpClient) {}

//   // Función para iniciar sesión y capturar el token
//   login(username: string, password: string): Observable<any> {
//     const formData = { username, password };
//     return this.http.post(this.apiUrl, formData).pipe(
//       // Procesar la respuesta para capturar el token
//       map((response: any) => {
//         const token = response.token;
//         console.log("llega",token)
//         if (token) {
//           // Almacenar el token en una cookie
//           Cookies.set('__session', token);
//         }
//         return response;
//       })
//     );
//   }

//   // Función para obtener el token de la cookie
//   getToken(): string | null {
//     return Cookies.get('__session') || null;
//   }

// //  Resto de tus funciones de autenticación
//     public isAuthenticated(): boolean {
//     const session = this.getSession();
//     let jwtSession = false;

//     if (session) {
//       this.userInfo = jwtHelper.decodeToken(session);
//       jwtSession = !jwtHelper.isTokenExpired(session);
//     }

//     return jwtSession;
//   }
//     async getUserInfo(username: string, password: string): Promise<boolean> {
//     try {
//       // const response = await this.api.post('/users/login', { username, password });
      
//       // if (response && response.token !== undefined) {
//       //   const userDetails = response.user[0];
//       //   const token = response.token;

//       //   this.setSession(userDetails, token);

//       //   return true;
//       // }
      
//       // return false;
//       return true;
//     } catch (error) {
//       return false;
//     }
//   }

//     public getSession() {
//     const jwt = Cookies.get('__session');
//     console.log('JWT token:', jwt); 
//     let session = null;

//     if (jwt) {
//       session = jwt;
//     }

//     return session;
//   }
//   //   public setSession(user: any, token: string): void {
// //     Cookies.set('__session', token);
// //     localStorage.setItem('token', token);
// //     localStorage.setItem('user', JSON.stringify(user));
// //   }

//     public removeSession(): void {
//     Cookies.remove('__session');
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   }
// }
