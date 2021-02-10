import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import { CommonModule } from '@angular/common';   

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

  isAdmin:boolean = true; 
  isAuth:boolean = true; 

  constructor(private router: Router) {


  } 

}

