import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { DatePipe } from '@angular/common'

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


  leaves: any;

  constructor(private httpService: HttpClient, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.httpService.get('https://localhost:44347/api/Leave/AllLeaves').subscribe(  
      data => {  
        this.leaves = data as any;  
      }  
    );  

    
    this.convertDate();
  }

  onKey(event:any) {
    const inputValue = event.target.value; 
    // this.emps.filter()
  }

  convertDate() {
    this.dateStr = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd'); 
    this.lastMonthStr = this.datepipe.transform(
      this.todayDate.setMonth(this.todayDate.getMonth() - 1), 'yyyy-MM-dd'); 
  }

}
