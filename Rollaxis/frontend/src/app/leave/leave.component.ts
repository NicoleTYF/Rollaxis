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

  leaves: Leave[] = []; 
  type = "-Select- "; 
  typeFil = "-Select- ";
  status = "Any"; 
  statusFil = ""; 
  desc = " "; 
  fromDate = new Date(this.todayDate.getFullYear(), 
              this.todayDate.getMonth() - 1, this.todayDate.getDay()); 
  toDate = this.todayDate; 

  filteredLeaves: Leave[] = []; 

  // @ViewChild('desc', {static: true}) desc: ElementRef = new Input(); 
  // @ViewChild('type', {static: true}) type: ElementRef = new Input();
  // @ViewChild('status', {static: true}) status: ElementRef = new Input();

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

    if(this.status.includes("Any ")) {
      this.statusFil = " ";
    } else {
      this.statusFil = this.status;
    }

    this.filteredLeaves = this.leaves.filter(l => 
          l.Status.includes(this.statusFil) && 
          l.Type.includes(this.typeFil) &&
          (l.Description.includes(this.desc) || 
          l.EmployeeID.includes(this.desc))); 

    return this.filteredLeaves;
  }

  convertDate() {
    this.dateStr = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd'); 
    this.lastMonthStr = this.datepipe.transform(
      this.todayDate.setMonth(this.todayDate.getMonth() - 1), 'yyyy-MM-dd'); 
  }

}
