import { Component, signal} from '@angular/core';
import { User } from '../../shared/classes/user';
import { email, form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  userModel = signal<User>(new User());
  loginForm = form(this.userModel, (fieldPath) => {
    required(fieldPath.email, {message: 'Email is required'});
    email(fieldPath.email, {message: 'Enter a valid email address'});
    required(fieldPath.password, {message: 'Password is required'});
  });

  protected login(): void {
    console.log("Email: " + this.userModel().email + " and Password: " + this.userModel().password); 
  }






}
