import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginPageComponent
  },

  {
    path: '',
    component: HomeSectionComponent
  },
  
  {
    path: 'Sign-Up',
    component: SignupPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
