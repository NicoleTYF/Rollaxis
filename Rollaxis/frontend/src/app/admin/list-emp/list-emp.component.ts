import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  name="NA";
  gender="NA"; 
  title="NA";
  id="NA";
  department="NA"; 
  manager="NA"; 
  hireDate="NA"; 
  vacationHours="NA";
  sickLeaveHours="NA";
  salary=0; 
  salaryClass="NA"; 
  netPay=0;

  healthAllowance=0;
  travelAllowance=0; 
  clothAllowance=0;
  mealAllowance=0;

  constructor() { }

  ngOnInit(): void {
  }

}
