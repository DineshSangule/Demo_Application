import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './components/components/customer/customer.component';
import { HomePageComponent } from './components/components/home-page/home-page.component';
import { RepairingStaffComponent } from './components/components/repairing-staff/repairing-staff.component';
import { AddNewStaffComponent } from './components/components/add-new-staff/add-new-staff.component';

export const routes: Routes = [
    {path: 'login',component: LoginComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'Add-New',component:CustomerComponent},
    {path:'homepage',component:HomePageComponent},
    {path:'repairingstaff',component:RepairingStaffComponent},
    {path:'addstaff',component:AddNewStaffComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'',redirectTo:'/addstaff',pathMatch:'full'}
]


