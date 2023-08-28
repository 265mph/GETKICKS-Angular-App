import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeSectionComponent } from './home-section/home-section.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginPageComponent
  },

  {
    path: '',
    component: HomeSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
