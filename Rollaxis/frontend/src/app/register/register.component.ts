import { Component, OnInit } from '@angular/core';    
import { LoginService } from '../login/service/login.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    

@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
    data = false;    
    UserForm: any;    
    message = ""; 
    passwordStrength = 2;   

    isAuth:boolean = false;

  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }    

  ngOnInit() {    
      this.UserForm = this.formbulider.group({    
      UserName: ['', [Validators.required]],    
      LoginName: ['', [Validators.required]],    
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      ContactNo: ['', [Validators.required]],    
      Address: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.message = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }    
}    