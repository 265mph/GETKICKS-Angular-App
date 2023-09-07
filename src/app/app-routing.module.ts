import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeSectionComponent } from './home-section/home-section.component';
<<<<<<< HEAD
=======
import { SignupPageComponent } from './signup-page/signup-page.component';
>>>>>>> 6fbc6014a485f5675f74d1b9d5ad916680d675b5

const routes: Routes = [
  {
    path: 'Login',
    component: LoginPageComponent
  },

  {
    path: '',
    component: HomeSectionComponent
<<<<<<< HEAD
=======
  },
  
  {
    path: 'Sign-Up',
    component: SignupPageComponent
>>>>>>> 6fbc6014a485f5675f74d1b9d5ad916680d675b5
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
