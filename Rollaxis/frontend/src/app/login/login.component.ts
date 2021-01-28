import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from './service/login.service';    
 import { FormsModule } from '@angular/forms';    
 import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from '../dashboard/dashboard.component';       
import { RegisterComponent } from '../register/register.component';    
import { AppComponent } from '../app.component';

@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    

export class LoginComponent {    

  model : any={};    

  errorMessage = "";    
  constructor(private router:Router,private LoginService:LoginService) { }    

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Dashboard']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }    

