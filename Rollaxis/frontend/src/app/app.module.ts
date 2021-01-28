import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { EditEmpComponent } from './admin/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { DeleteEmpComponent } from './admin/delete-emp/delete-emp.component';

import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { LeaveComponent } from './leave/leave.component';

import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    
    EmployeeComponent,
    AddEmpComponent,
    EditEmpComponent,
    ShowEmpComponent,
    DeleteEmpComponent,

    LeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule, 
    PasswordStrengthMeterModule
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
