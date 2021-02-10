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

export class Address {
  AddressID: number = 0;
  AddressLine1: string = ""; 
  AddressLine2: string = ""; 
  City: string = ""; 
  State: string = ""; 
  PostalCode: number = 0; 
  ModifiedDate: Date = new Date();
}

export class Department {
  DepartmentID: string = ""; 
  DepartmentName: string = ""; 
  Location: string = "";
}

export class SalaryClass {
  SalaryClassID: string = ""; 
  Rate: number = 0; 
  Bonus: number = 0; 
  MedicalAllowance: number = 0; 
  TravelAllowance: number = 0; 
  LaundryAllowance: number = 0; 
  ClothingAllowance: number = 0; 
  EducationAllowance: number = 0; 
  MealAllowance: number = 0; 
}