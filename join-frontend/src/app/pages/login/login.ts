import { Component, inject, signal} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/classes/user';
import { email, form, required, FormField } from '@angular/forms/signals';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  userModel = signal<User>(new User());
  loginForm = form(this.userModel, (fieldPath) => {
    required(fieldPath.email, {message: 'Email is required'});
    email(fieldPath.email, {message: 'Enter a valid email address'});
    required(fieldPath.password, {message: 'Password is required'});
  });

  protected authService = inject(AuthService);
  protected router = inject(Router);

  constructor() {}

  protected async login(isLoginGuest = false): Promise<void> {
    let isLoggedIn: boolean;

    this.isLoading.set(true);      
    this.errorMessage.set(null);

    if (isLoginGuest) {
      isLoggedIn = await this.authService.loginGuest();
    } else if(!this.loginForm().valid()) {
      isLoggedIn = false;
    } else {
      isLoggedIn = await this.authService.login(this.userModel().email, this.userModel().password);
    }
    
    this.isLoading.set(false);
    console.log('isLoggedIn: ' + isLoggedIn);
    
    if(isLoggedIn) {
      this.router.navigate(['/summary']);
    } else {
      this.errorMessage.set('Please fill in all fields correctly.');
    }
  }
}
