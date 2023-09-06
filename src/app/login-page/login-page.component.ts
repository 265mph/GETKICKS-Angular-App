import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginUsername!: string;
  loginPassword!: string;

  submitForm() {
    alert(`Welcome back ${this.loginUsername}`)
  }
}
