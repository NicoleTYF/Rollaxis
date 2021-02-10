import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { DatePipe } from '@angular/common' 
import { Leave } from './leave'; 
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  name="NAbmbnvbn"
  color="cadetblue" 
  initial= this.name.substr(0, 2); 
  dateStr: any; 
  lastMonthStr: any;
  todayDate: Date = new Date(); 

  isAuth:boolean = true;
  isAdmin:boolean = true;

  leaves: Leave[] = []; 
  type = "-Select- "; 
  typeFil = "-Select- ";
  status = "Any"; 
  statusFil = ""; 
  desc = " "; 
  fromDate = new Date(this.todayDate.getFullYear(), 
              this.todayDate.getMonth() - 1, this.todayDate.getDay()); 
  toDate = this.todayDate; 

  filteredLeaves: any[] = []; 
  emps: any[] = [];

  limit: number= 25;

  page: number = 1;

  constructor(private httpService: HttpClient, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.httpService.get('https://localhost:44347/api/Leave/AllLeaves').subscribe(  
      data => {  
        this.leaves = (data as Leave[]).sort((a, b) => 
                      new Date(b.FromDate).getTime() - new Date(a.FromDate).getTime()); 
        this.page = (data as Leave[]).length / this.limit;
      }  
    );  

    this.httpService.get('https://localhost:44347/api/Employee/GetEmployee').subscribe(  
      data => {  
        this.emps = data as any[];  
      }  
    ); 
    
    this.convertDate();
  }

  onFilter() {
    if(this.type.includes("-Select- ")) {
      this.typeFil = " ";
    } else if (this.type.includes("Others…")) {
      this.typeFil = "Others…";
    } else {
      this.typeFil = this.type;
    }

    if(this.status.includes("Any")) {
      this.statusFil = " ";
    } else {
      this.statusFil = this.status;
    } 

    const mergeById = (a1: any[], a2: any[]) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.EmployeeID === itm.EmployeeID) && item),
        ...itm
    }));

    this.filteredLeaves = mergeById(this.leaves, this.emps).filter(l => 
      l.Status.includes(this.statusFil) && 
      l.Type.includes(this.typeFil) && 
      (l.Description.toLowerCase().includes(this.desc) || 
      l.FirstName.toLowerCase().includes(this.desc) || 
      l.LastName.toLowerCase().includes(this.desc)));

    return this.filteredLeaves;
  }

  convertDate() {
    this.dateStr = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd'); 
    this.lastMonthStr = this.datepipe.transform(
      this.todayDate.setMonth(this.todayDate.getMonth() - 1), 'yyyy-MM-dd'); 
  }

}
