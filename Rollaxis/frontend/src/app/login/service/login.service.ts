import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../../register";  

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    Url :string;  
    token : string = "";  
    headers : any;  
    constructor(private httpService : HttpClient) {   

      this.Url = 'http://localhost:44347/api/Login/';  

      this.headers = new HttpHeaders();
      // this.setHeaders(); 
      const headerSettings: {[name: string]: string | string[]; } = {};  
      this.headers = new HttpHeaders(headerSettings);  
    }  
    
    Login(model : any){  
      debugger;  
      // this.httpService.get(this.Url + 'UserLogin/' + 
      // sessionStorage.getItem("Username")).subscribe(  
      //   data => {  
      //     let response = data as any;
      //     if(response.Status === "Invalid") {
      //       return ; 
      //     }
      //   }  
      // );
      return this.httpService.post<any>(this.Url+'UserLogin',model,{ headers: this.headers});  
    }  

    CreateUser(register:Register)  
    {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.httpService.post<Register[]>(this.Url + '/createcontact/', register, httpOptions)  
    }  

    private setHeaders() {
      this.headers = this.headers.set('Content-Type', 'application/json');
      this.headers = this.headers.set('Accept', 'application/json');
      const token: any = document.getElementById('__RequestVerificationToken');
      this.headers = this.headers.set('X-XSRF-TOKEN', token.value);
      console.log(token.value);
    }
}