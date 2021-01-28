export class Employee {
    EmployeeID: number = 0; 
    Prefix: string = ""; 
    FirstName: string = ""; 
    LastName: string = ""; 
    Title: string = "";
    Gender: string = "";
  Email: string = "";
  ContactNo: string = "";
  AddressID: number = 0;
  ManagerID: number = 0;
  DepartmentID: number = 0;
  HireDate: Date = new Date(); 
  ModifiedDatws: Date = new Date(); 
  VacationHours: number = 0;
  SickLeaveHours: number = 0;
  NetPay: number = 0;
  Salary: number = 0;
  SalaryClassID: number = 0;
  PasswordSalt: string = "";
  Password: string = "";
  IsApproved: boolean = true; 
  Color: string = "";
}
