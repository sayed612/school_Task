import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { FirstComponent } from './components/first/first.component';
const routes: Routes = [
  {path:'' , component:FirstComponent},
  {path:'home' , component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'student/:id' , component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
