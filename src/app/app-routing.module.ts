import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/subcomponents/welcome/welcome.component';
import { NotallowedComponent } from './components/notallowed/notallowed.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: NotallowedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
