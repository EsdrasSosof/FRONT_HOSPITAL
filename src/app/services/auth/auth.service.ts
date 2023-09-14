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
    localStorage.setItem('user', JSON.stringify(user));

    return;
  }
  
  public removeSession(): void {
    Cookies.remove('__session');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async getUserInfo(username: string, password: string): Promise<boolean> {
    try {
      /* const response = await this.api.post('/users/login', { username, password });
      
      if (response && response.token !== undefined) {
        const userDetails = response.user[0];
        const token = response.token;

        this.setSession(userDetails, token);

        return true;
      }
      
      return false; */
      return true;
    } catch (error) {
      return false;
    }
  }

}
