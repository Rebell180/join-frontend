import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../shared/classes/user';
import { email, form, required, FormField } from '@angular/forms/signals';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-registration',
  imports: [FormField, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {

  isLoading = signal(false);
  isPolicyAccepted = signal(false);
  errorMessage = signal<string | null>(null);

  userModel = signal<User>(new User());
  loginForm = form(this.userModel, (fieldPath) => {
    required(fieldPath.fullname, {message: 'Your full name is required'});
    required(fieldPath.email, {message: 'Email is required'});
    email(fieldPath.email, {message: 'Enter a valid email address'});
    required(fieldPath.password, {message: 'Password is required'});
    required(fieldPath.repeated_password, {message: 'To repeat your password is required'});
  });

  protected authService = inject(AuthService);
  protected router = inject(Router);

  constructor() {}

  protected async register(): Promise<void> {
    let isRegistered: boolean;

    this.isLoading.set(true);      
    this.errorMessage.set(null);

    if(!this.loginForm().valid()) {
      isRegistered = false;
    } else {
      isRegistered = await this.authService.register(this.userModel().fullname, this.userModel().email, this.userModel().password, this.userModel().repeated_password);
    }
    
    this.isLoading.set(false);
    
    if(isRegistered) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage.set('Please fill in all fields correctly.');
    }
  }
}
