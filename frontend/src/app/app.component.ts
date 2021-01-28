import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id="";
  name="NA";
  color="cadetblue"; 
  initial=this.name.substr(0, 2);

  constructor(private router: Router) {} 

}

