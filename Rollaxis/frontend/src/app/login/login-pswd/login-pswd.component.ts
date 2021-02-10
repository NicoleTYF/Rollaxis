import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../service/login.service';    
 import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';    
 import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from '../../dashboard/dashboard.component';       
import { RegisterComponent } from '../../register/register.component';    
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';

@Component({    
  selector: 'app-login-pswd',    
  templateUrl: './login-pswd.component.html',    
  styleUrls: ['./login-pswd.component.css']    
})    

export class LoginPswdComponent {    

  model : any={};  
  
  isAuth:boolean = false;   
  isAdmin: boolean = true;
  errorMessage = ""; 

  registerOnChange: any = ""; 
  Password: string = ""; 
  pswdForm: FormGroup; 

  constructor(private router:Router, public fb: FormBuilder, 
               private httpService: HttpClient, 
               private LoginService: LoginService) { 

    this.pswdForm = this.fb.group({
      Password: "", 
      SecretAns: ""
    })
  }    

  ngOnInit() { 
    
  }    

  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success") {  
          this.httpService.get('https://localhost:44347/api/Login/FindId/' + 
          sessionStorage.getItem("username")).subscribe(  
            data => {  
              this.router.navigate(['/employeeDetails/' + data]);  
            }  
          );      
            
          debugger;    
        } else {    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }    

