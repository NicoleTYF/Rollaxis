import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  
  constructor(private httpService: HttpClient) { }  

  name="NA"
  color="cadetblue" 
  initial= this.name.substr(0, 2);

  address: any[] = [];
  dep: any[] = []; 
  emps: any[]=[]; 
  distinctLocation:string[] = [];

  ngOnInit() {  
    this.httpService.get('https://localhost:44347/api/Department').subscribe(  
      data => {  
        this.dep = data as any[];  
      }  
    );  

    this.httpService.get('https://localhost:44347/api/Employee/GetEmployee').subscribe(  
      data => {  
        this.emps = data as any[];  
      }  
    ); 

    this.httpService.get('https://localhost:44347/api/Address').subscribe(  
      data => {  
        this.address = data as any[];  
      }  
    ); 

    this.distinctLocation = this.dep.filter(this.onlyUnique);
  } 

  onlyUnique(value: any, index: number, self: any) {
    return self.indexOf(value) === index; 
  }

  onKey(event:any) {
    const inputValue = event.target.value; 
    // this.emps.filter()
  }
}
