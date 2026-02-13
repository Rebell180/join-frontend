import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { User } from '../classes/user';
import { env } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private readonly apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  public async login(email: string, password: string): Promise<boolean> {
    const credentials = { email: email, password: password };
    try {
      const response = await firstValueFrom(this.http.post<User>(env.baseUrl + env.endpoints.auth.login, credentials));
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
