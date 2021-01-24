using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("Api/Department")]
    public class DepartmentController : ApiController {
       private RollaxisDBEntities Obj = new RollaxisDBEntities(); 
       [HttpGet] 
       [Route("AllDepartments")] 
       public IQueryable <Department> GetDepartment() {
            try {
                return Obj.Departments; 
            } catch (Exception) {
                throw;
            } 
       }

       [HttpGet] 
       [Route("GetDeaprtmentById/{DepartmentID}")]
       public IHttpActionResult GetDepartmentById(string DepartmentID) {
            Department ObjDep = new Department(); 
            int ID = Convert.ToInt32(DepartmentID); 
            try {
                ObjDep = Obj.Departments.Find(ID); 
                if(ObjDep == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(ObjDep);
       }

       [HttpPost] 
       [Route("InsertDepartments")] 
       public IHttpActionResult PostDepartment(Department data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }
            try {
                Obj.Departments.Add(data); 
                Obj.SaveChanges(); 
            } catch (Exception) {
                throw;
            } 
            return Ok(data);
       }

       [HttpPut] 
       [Route("UpdateDepartments")] 
       public IHttpActionResult PutDepartment(Department data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                Department ObjDep = Obj.Departments.Find(data.DepartmentID);
                ObjDep.DepartmentName = data.DepartmentName; 
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpDelete] 
        [Route("DleteDepartments")] 
        public IHttpActionResult DeleteDepartments(int id) {
            Department d = Obj.Departments.Find(id); 
            if(d == null) {
                return NotFound(); 
            }
            Obj.Departments.Remove(d); 
            Obj.SaveChanges(); 
            return Ok(d);
        }
     }
}
