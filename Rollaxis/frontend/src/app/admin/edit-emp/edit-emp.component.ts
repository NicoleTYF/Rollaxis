import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  isAuth:boolean = true; 
  isAdmin:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
