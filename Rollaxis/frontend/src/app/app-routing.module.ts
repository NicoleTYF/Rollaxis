import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router'; 

import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginUNComponent } from './login/login-username/login-username.component';  
import { LoginPswdComponent } from './login/login-pswd/login-pswd.component';    
import { RegisterComponent } from './register/register.component'; 
import { LeaveComponent } from './leave/leave.component';   
import { ShowLeaveComponent } from './leave/show-leave/show-leave.component';    
import { AddLeaveComponent } from './leave/add-leave/add-leave.component'; 
import { EditLeaveComponent } from './leave/edit-leave/edit-leave.component'; 
import { ListEmpComponent } from './admin/list-emp/list-emp.component';  
import { AddEmpComponent } from './admin/add-emp/add-emp.component';  
import { EditEmpComponent } from './admin/edit-emp/edit-emp.component';  
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';       

const routes: Routes = [
  { path: '', component: LoginUNComponent },
  { path: 'login', component: LoginUNComponent },
  { path: 'login/enterPassword', component: LoginPswdComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'leave/manage', component: LeaveComponent }, 
  { path: 'leave/view', component: ShowLeaveComponent }, 
  { path: 'leave/applyLeave/add', component: AddLeaveComponent }, 
  { path: 'leave/applyLeave/edit', component: EditLeaveComponent },
  { path: 'employee/employeeDetails/:id', component: ShowEmpComponent, pathMatch: 'full' }, 
  { path: 'employee/searchEmployee', component: ListEmpComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: '/login'}, 

];  

@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { } 