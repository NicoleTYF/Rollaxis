import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Employee, Address, Department, SalaryClass } from '../service/employee'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  salary=0; 

  id = "";

  empService: any;
  emp: any; 
  address: any; 
  dep: any; 
  manager: any;
  vacation: number = 0.0;
  sickLeave: number = 0.0; 
  parentalLeave: number = 0.0; 
  others: number = 0.0;
  salaryClass: SalaryClass = new SalaryClass; 

  yoe = 0.0;
  gender:string ="";

  constructor(private httpService: HttpClient, 
                private route: ActivatedRoute, 
                private router: Router) { 
      this.id = this.route.snapshot.params.id; 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }  

  ngOnInit(): void {
    
      this.httpService.get('https://localhost:44347/api/Leave/GetTypeByMonth/' + 
        this.id.trim() + '/Sick%20Leave/').subscribe(  
        data => {  
          this.sickLeave = data as number;  
        }  
      );  
      this.httpService.get('https://localhost:44347/api/Leave/GetTypeByMonth/' + 
        this.id.trim() + '/Vacation/').subscribe(  
        data => {  
          this.vacation = data as number;  
        }  
      ); 
      this.httpService.get('https://localhost:44347/api/Leave/GetTypeByMonth/' + 
        this.id.trim() + '/Parental%20Leave/').subscribe(  
        data => {  
          this.parentalLeave = data as number;  
        }  
      ); 
      this.httpService.get('https://localhost:44347/api/Leave/GetTypeByMonth/' + 
        this.id.trim() + '/Others…/').subscribe(  
        data => {  
          this.others = data as number;  
        }  
      ); 

      this.httpService.get('https://localhost:44347/api/Employee/GetEmployeeById/' + 
        this.id).subscribe(  
        data => {  
          this.emp = data as any;  
          this.httpService.get('https://localhost:44347/api/Department/GetDepartmentById/' + 
            this.emp.DepartmentID).subscribe(  
            dep => {  
            this.dep = dep as Department;  
            }  
          ); 

          this.httpService.get('https://localhost:44347/api/Employee/GetEmployeeById/' + 
            this.emp.ManagerID).subscribe(  
            manager => {  
              this.manager = manager as Employee;  
            }  
          );  

          this.httpService.get('https://localhost:44347/api/SalaryClass/GetSalaryClassById/' + 
            this.emp.SalaryClassID).subscribe(  
            salaryClass => {  
              this.salaryClass = salaryClass as SalaryClass;  
            }  
          ); 
        } 
      ); 

      this.httpService.get('https://localhost:44347/api/Address/GetAddressById/' + 
        this.id).subscribe(  
        data => {  
          this.address = data as Address;  
        }  
      ); 

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
