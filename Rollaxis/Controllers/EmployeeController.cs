using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http; 
using Rollaxis.Models; 

namespace Rollaxis.Controllers {
    [RoutePrefix("Api/Employee")]
    public class EmployeeController : ApiController { 
        private RollaxisDBEntities Obj = new RollaxisDBEntities(); 
        [HttpGet] 
        [Route("AllEmployees")] 
        public IQueryable<Employee> GetEmployee() {
            try {
                return Obj.Employees; 
            } catch (Exception) {
                throw; 
            }
        }

        [HttpGet] 
        [Route("Department")] 
        public IQueryable<Department> GetDepartment() {
            try {
                return Obj.Departments; 
            } catch (Exception) {
                throw; 
            }
        }

        [HttpGet] 
        [Route("GetEmployeeById/{EmployeeId}")] 
        public IHttpActionResult GetEmployById(string id) {
            Employee e = new Employee(); 
            int ID = Convert.ToInt32(e); 
            try {
                e = Obj.Employees.Find(ID); 
                if(e == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(e);
        }

        [HttpPost] 
        [Route("InsertEmployees")] 
        public IHttpActionResult PostEmployee(Employee e) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }
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
                    emp.PasswordSalt = e.PasswordSalt; 
                    emp.Salary = e.Salary; 
                    emp.HireDate = e.HireDate; 
                    emp.VacationHours = e.VacationHours; 
                    emp.SickLeaveHours = e.SickLeaveHours; 
                    emp.IsApproved = e.IsApproved; 
                    emp.ModifiedDate = e.ModifiedDate;
                }
                int i = this.Obj.SaveChanges(); 
            } catch (Exception) {
                throw; 
            }
            return Ok(e);
        }

        [HttpDelete] 
        [Route("DeleteEmployees")] 
        public IHttpActionResult DeleteEmployee(int id) {
            Employee e = Obj.Employees.Find(id); 
            if(e == null) {
                return NotFound(); 
            }
            Obj.Employees.Remove(e);
            Obj.SaveChanges(); 
            return Ok(e);

        }
    }
}
