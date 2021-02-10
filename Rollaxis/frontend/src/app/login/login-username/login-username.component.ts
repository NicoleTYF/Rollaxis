import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../service/login.service';    
import { FormBuilder, FormGroup } from "@angular/forms"; 
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'; 

@Component({    
  selector: 'app-login-username',    
  templateUrl: './login-username.component.html',    
  styleUrls: ['./login-username.component.css']    
})    

export class LoginUNComponent {    

  model : any={};  
  
  isAuth:boolean = true; 
  isAdmin: boolean = true;
  isError: boolean = false; 

  Username:string = ""; 
  usernameForm: FormGroup;

  constructor(private router:Router, public fb: FormBuilder, 
               private httpService: HttpClient) { 

    this.usernameForm = this.fb.group({
      Username: "",
    })
  }    

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();   
    
  }    

  validateUsername() {
    let un = this.usernameForm.get('Username')!.value;
    this.httpService.get('https://localhost:44347/api/Login/FindEmp/' + 
    un).subscribe(  
      data => {  
        if(data == true) {
          sessionStorage.setItem("username", this.usernameForm.get('Username')!.value);
          this.router.navigate(['login/enterPassword']); 
          this.isError = false;
        } else {
          this.isError = true; 
        } 
      }  
    );  
  }
 }    

