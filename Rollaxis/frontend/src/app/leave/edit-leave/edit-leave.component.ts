import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';  
import { DatePipe } from '@angular/common' 
import { Leave } from '../leave'; 
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'], 
})
export class EditLeaveComponent implements OnInit {

  name="NAbmbnvbn"
  color="cadetblue" 
  initial= this.name.substr(0, 2); 

  isAuth:boolean = true;

  todayDate: Date = new Date(); 
  todayStr: any = this.todayDate.getFullYear() + "-" + 
                        this.todayDate.getMonth() + "-" + 
                        this.todayDate.getDay(); 

  id = "703738"; 

  leaves: Leave[] = []; 
  leaveForm: FormGroup;

  type = "-Select-"; 
  desc = ""; 

  fromDate: Date = new Date(); 
  fromTime: any; 

  toDate: Date = new Date();  
  toTime: any; 

  constructor(private httpService: HttpClient, private datepipe: DatePipe, 
               public fb: FormBuilder) { 
      this.leaveForm = this.fb.group({
      EmployeeID: [this.id],
      Type: [null], 
      Description: [""], 
      FromDate: [new Date()], 
      FromTime: [new Date().getTime()], 
      ToDate: [new Date()], 
      ToTime: [new Date().getTime()], 
      Status: ["Pending"], 
      LeaveID: ["0"]
    })
  }

  ngOnInit(): void {
    this.httpService.get('https://localhost:44347/api/Leave/AllLeaves').subscribe(  
      data => {  
        this.leaves = data as Leave[]; 
      }  
    );  
  }

  onSubmit() { 
     let l: Leave = new Leave(); 
     l.LeaveID = "-1"; 
     l.EmployeeID = this.leaveForm.get("EmployeeID")!.value; 
     l.Type = this.leaveForm.get('Type')!.value; 
     l.Status = this.leaveForm.get('Status')!.value; 
     l.FromDate = this.leaveForm.get('FromDate')!.value; 
     l.ToDate = this.leaveForm.get('ToDate')!.value; 
     l.FromTime = this.leaveForm.get('FromTime')!.value; 
     l.ToTime = this.leaveForm.get('ToTime')!.value; 
     l.Description = this.leaveForm.get('Description')!.value;
     
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.httpService.post('https://localhost:44347/api/Leave/InsertLeave', l, 
          {headers: headers}).
    subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )  
  }

}
