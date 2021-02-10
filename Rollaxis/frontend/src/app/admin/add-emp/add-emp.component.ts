import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  isAuth:boolean = true;
  isAdmin:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
