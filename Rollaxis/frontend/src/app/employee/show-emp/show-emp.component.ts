import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Employee } from '../service/employee'; 

interface Address {
  AddressID: number, 
  AddressLine1: string, 
  AddressLine2: string, 
  City: string, 
  State: string, 
  PostalCode: number, 
  ModifiedDate: Date
}

interface Department {
  DepartmentID: string, 
  DepartmentName: string, 
  Location: string 
}

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  salary=0; 
  salaryClass="NA"; 
  bonus=3100;

  healthAllowance=110.0;
  travelAllowance=600.0; 
  clothAllowance=400.0;
  mealAllowance=400.0;

  id:string = "297059" 

  empService: any;
  emp: any; 
  address: any; 
  dep: any; 
  manager: any;
  vacation: number = 0.0;
  sickLeave: number = 0.0; 
  parentalLeave: number = 0.0; 
  others: number = 0.0;
  salaryC: any[] = []; 

  yoe = 0.0;
  gender:string ="";

  constructor(private httpService: HttpClient) { 
  }  

  ngOnInit(): void {
    this.httpService.get('https://localhost:44347/api/Leave/GetType/' + 
    this.id + '/Sick%20Leave/').subscribe(  
      data => {  
        this.sickLeave = data as number;  
      }  
    );  
    this.httpService.get('https://localhost:44347/api/Leave/GetType/' + 
    this.id + '/Vacation/').subscribe(  
      data => {  
        this.vacation = data as number;  
      }  
    ); 
    this.httpService.get('https://localhost:44347/api/Leave/GetType/' + 
    this.id + '/Parental%20Leave/').subscribe(  
      data => {  
        this.parentalLeave = data as number;  
      }  
    ); 
    this.httpService.get('https://localhost:44347/api/Leave/GetOthers/' + 
    this.id).subscribe(  
      data => {  
        this.others = data as number;  
      }  
    ); 

    this.httpService.get('https://localhost:44347/api/Employee/GetEmployeeById/' + 
      this.id).subscribe(  
      data => {  
        this.emp = data as any;  
      }  
    ); 

    this.httpService.get('https://localhost:44347/api/Address/GetAddressById/' + 
      this.id).subscribe(  
      data => {  
        this.address = data as Address;  
      }  
    ); 

    // this.httpService.get('https://localhost:44347/api/Department/GetDepartmentById/' + 
    //     this.emp.DepartmentID).subscribe(  
    //   dep => {  
    //     this.dep = dep as Department;  
    //   }  
    // ); 

    this.yoe = this.calculateDiff(this.emp.HireDate);
  } 

  calculateDiff(dateSent: Date){
      let currentDate = new Date();
      dateSent = new Date(dateSent);

      return Math.floor((Date.UTC(currentDate.getFullYear(), 
             currentDate.getMonth(), 
             currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), 
             dateSent.getMonth(), 
             dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }

}
