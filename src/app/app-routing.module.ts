import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import { Pipe, PipeTransform } from '@angular/core';
const routes: Routes = [
  {path :'',component:LoginComponent },
  {path :'homepage',component:HomepageComponent},
  {path :'about',component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
