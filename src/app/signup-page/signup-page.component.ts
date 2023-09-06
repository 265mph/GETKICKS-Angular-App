import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  signupUsername!: string;

  submitRegistration() {
    alert(`Thank you for joining us ${this.signupUsername}`)
  }
}
