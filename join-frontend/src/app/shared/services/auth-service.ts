import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { User } from '../classes/user';
import { env } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public async register(fullname: string, email: string, password: string, repeated_password: string): Promise<boolean> {
    const credentials = { fullname: fullname, email: email, password: password, repeated_password: repeated_password };

    try { 
      const response = await firstValueFrom(this.http.post<User>((env.baseUrl + env.endpoints.auth.registration), credentials));
      const user: User = response as User;

      if (user && user.token && user.token !== '') {
        // this.saveCurrentLogin(user);
        return true;
      }

      return false;
    } catch (err) {
      console.error('Register request failed. ', err)
      return false;
    }

    return false;
  }

  public async login(email: string, password: string): Promise<boolean> {
    const credentials = { email: email, password: password };
    try {
      const response = await firstValueFrom(this.http.post<User>((env.baseUrl + env.endpoints.auth.login), credentials));
      const user: User = response as User;

      if (user && user.token && user.token !== '') {
        this.saveCurrentLogin(user);
        return true;
      }

      return false;
    } catch (err) {
      console.error('Login request failed. ', err);
      return false;
    }
  }

  public async loginGuest(): Promise<boolean> {
    try {
      const response = await firstValueFrom(this.http.post<User>(env.baseUrl + env.endpoints.auth.loginguest, {}));
      const user: User = response as User;

      if (user && user.token && user.token !== '') {
        this.saveCurrentLogin(user);
        return true;
      }

      return false;
    } catch (err) {
      console.error('Login request failed', err);
      return false;
    }
  }

  public async logout(): Promise<boolean> {
    localStorage.removeItem('user');

    return true;
  }

  public getUser(): string | null {
    return localStorage.getItem('user');
  }

  private saveCurrentLogin(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private deleteCurrentLogin(): void {
    localStorage.removeItem('user');
  }
}
