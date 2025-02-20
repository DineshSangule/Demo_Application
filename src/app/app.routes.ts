import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './components/components/customer/customer.component';

export const routes: Routes = [
    {path: '',component: LoginComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'Add-New',component:CustomerComponent}
]


