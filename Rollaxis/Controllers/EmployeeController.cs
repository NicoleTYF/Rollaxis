using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http; 
using Rollaxis.Models;
using System.Web.Http.Cors;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Rollaxis.Controllers {

    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController { 

        private RollaxisDBEntities Obj;
        public EmployeeController() {
            Obj = new RollaxisDBEntities();
        }
        public IEnumerable<Employee> GetEmp() {
            return Obj.Employees.ToList();
        }

        [HttpGet] 
        [Route("AllEmployees")] 
        public IQueryable<Employee> GetEmployee() {
            try {
                return Obj.Employees; 
            } catch (Exception) {
                throw; 
            }
        }

        protected override void Dispose(bool disposing) {
            if (disposing) { 
                this.Obj.Dispose();
            }
            base.Dispose(disposing);
        }

        [HttpGet] 
        [Route("GetEmployeeById/{id}")] 
        public IHttpActionResult GetEmployeeById(string id) {
            Employee e = new Employee(); 
            try {
                e = Obj.Employees.Find(id); 
                if(e == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(e);
        }

        [HttpPost] 
        [Route("InsertEmployee")] 
        public IHttpActionResult PostEmployee(Employee e) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }

            byte[] salt = new byte[128 / 8]; 
            // using (var rng = RandomNumberGenerator)

            try {
                Obj.Employees.Add(e); 
                Obj.SaveChanges(); 
            } catch (Exception) {
                throw; 
            } 
            return Ok(e); 
        }

        [HttpPut] 
        [Route("UpdateEmployee")] 
        public IHttpActionResult PutEmployee(Employee e) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }
            try {
                Employee emp = new Employee(); 
                emp = Obj.Employees.Find(e.EmployeeID); 
                if(emp == null) {
                    emp.Prefix = e.Prefix; 
                    emp.FirstName = e.FirstName; 
                    emp.LastName = e.LastName; 
                    emp.ManagerID = e.ManagerID; 
                    emp.DepartmentID = e.DepartmentID; 
                    emp.SalaryClassID = e.SalaryClassID; 
                    emp.NetPay = e.NetPay; 
                    emp.Title = e.Title; 
                    emp.AddressID = e.AddressID; 
                    emp.ContactNo = e.ContactNo; 
                    emp.Gender = e.Gender; 
                    emp.Email = e.Email; 
                    emp.BirthDate = e.BirthDate; 
                    emp.BirthMonth = e.BirthMonth; 
                    emp.PasswordSalt = e.PasswordSalt; 
                    emp.Password = e.Password; 
                    emp.Salary = e.Salary; 
                    emp.SuperFund = e.SuperFund; 
                    emp.TaxRate = calculateTax(e.Salary); 
                    emp.HireDate = e.HireDate; 
                    emp.IsApproved = e.IsApproved; 
                    emp.ModifiedDate = e.ModifiedDate; 
                    emp.HrsWorked = e.HrsWorked; 
                    emp.Color = e.Color;
                }
                int i = this.Obj.SaveChanges(); 
            } catch (Exception) {
                throw; 
            }
            return Ok(e);
        }

        [HttpDelete] 
        [Route("DeleteEmployee")] 
        public IHttpActionResult DeleteEmployee(int id) {
            Employee e = Obj.Employees.Find(id); 
            if(e == null) {
                return NotFound(); 
            }
            Obj.Employees.Remove(e);
            Obj.SaveChanges(); 
            return Ok(e);

        }

        public int calculateTax(double salary) {
            int taxRate = 0;
            if (salary <= 18200) {
                taxRate = 0;
            } else if (salary <= 37000) {
                taxRate = 19;
            } else if (salary <= 87000) {
                taxRate = 32;
            } else if (salary <= 180000) {
                taxRate = 37;
            } else {
                taxRate = 45;
            }
            return taxRate;
    }

    }
}
