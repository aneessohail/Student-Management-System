import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:LogComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LogComponent},
  {path:'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
