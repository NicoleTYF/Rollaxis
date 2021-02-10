import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { DatePipe } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AuthTokenInterceptor } from './authTokenInterceptor';
;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUNComponent } from './login/login-username/login-username.component'; 
import { LoginPswdComponent } from './login/login-pswd/login-pswd.component'; 
import { RegisterComponent } from './register/register.component';

import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { EditEmpComponent } from './admin/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component'; 
import { ListEmpComponent } from './admin/list-emp/list-emp.component'; 

import { LeaveComponent } from './leave/leave.component'; 
import { ShowLeaveComponent } from './leave/show-leave/show-leave.component';
import { AddLeaveComponent } from './leave/add-leave/add-leave.component'; 
import { EditLeaveComponent } from './leave/edit-leave/edit-leave.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginUNComponent,
    LoginPswdComponent,
    RegisterComponent,
    
    EmployeeComponent,
    AddEmpComponent,
    EditEmpComponent,
    ShowEmpComponent,
    ListEmpComponent, 

    LeaveComponent,

    ShowLeaveComponent,
    AddLeaveComponent, 
    EditLeaveComponent
    
  ],
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
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
