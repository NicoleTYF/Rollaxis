import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  isAuth:boolean = true; 
  isAdmin:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
