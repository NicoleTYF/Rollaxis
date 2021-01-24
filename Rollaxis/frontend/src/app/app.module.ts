import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { DeleteEmpComponent } from './employee/delete-emp/delete-emp.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { DeleteDepComponent } from './department/delete-dep/delete-dep.component';

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
    DepartmentComponent,
    AddDepComponent,
    EditDepComponent,
    ShowDepComponent,
    DeleteDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
