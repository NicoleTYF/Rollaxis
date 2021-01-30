import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { DatePipe } from '@angular/common' 
import { Leave } from '../leave'; 

@Component({
  selector: 'app-show-leave',
  templateUrl: './show-leave.component.html',
  styleUrls: ['./show-leave.component.css']
})
export class ShowLeaveComponent implements OnInit {

  name="NAbmbnvbn"
  color="cadetblue" 
  initial= this.name.substr(0, 2); 
  todayDate: Date = new Date(); 

  id = "703738";

  leaves: Leave[] = []; 
  type = "-Select- "; 
  typeFil = "-Select- "; 
  status = "Any"; 
  statusFil = ""; 
  desc = ""; 
  fromDate = new Date(this.todayDate.getFullYear(), 
              this.todayDate.getMonth() - 1, this.todayDate.getDay()); 
  toDate = this.todayDate; 

  filteredLeaves: Leave[] = []; 

  constructor(private httpService: HttpClient, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.httpService.get('https://localhost:44347/api/Leave/GetLeaveByEmpId/' + 
      this.id).subscribe(  
      data => {  
        this.leaves = (data as Leave[]).sort((a, b) => 
                      new Date(b.FromDate).getTime() - new Date(a.FromDate).getTime()); 
      }  
    );  
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
    this.filteredLeaves = this.leaves.filter(l => 
          l.Status.includes(this.statusFil) && 
          l.Type.includes(this.typeFil)); 

    return this.filteredLeaves;
  }

  dateDiff(from: Date, to: Date){
    let fromDate = new Date(from);
    let toDate = new Date(to);

    let days = Math.floor((toDate.getTime() - fromDate.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

  timeDiff(from: string, to: string){
    let fromTime = Number(from.substr(0, 2));
    let toTime = Number(to.substr(0, 2));

    let hours = (20 - fromTime) + (toTime - 8);
    return hours;
  }

}
