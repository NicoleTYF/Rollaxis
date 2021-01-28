using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("api/Department")]
    public class DepartmentController : ApiController {

       private RollaxisDBEntities Obj;

        public DepartmentController() {
            Obj = new RollaxisDBEntities();
        }
        public IEnumerable<Department> GetDept() {
            return Obj.Departments.ToList();
        }

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
       [Route("GetDepartmentById/{DepartmentID}")]
       public IHttpActionResult GetDepartmentById(string DepartmentID) {
            Department ObjDep = new Department();  
            try {
                Department[] d = Obj.Departments.ToArray();
                for (int i=0; i < Obj.Departments.ToArray().Length; i++) {
                    if(d[i].DepartmentID == DepartmentID){
                        ObjDep = d[i];  

                        continue;
                    }
                }
                if(ObjDep == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(ObjDep);
       }

       [HttpPost] 
       [Route("InsertDepartment")] 
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
       [Route("UpdateDepartment")] 
       public IHttpActionResult PutDepartment(Department data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                Department ObjDep = Obj.Departments.Find(data.DepartmentID);
                ObjDep.DepartmentName = data.DepartmentName;
                ObjDep.Location = data.Location;
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpDelete] 
        [Route("DeleteDepartment")] 
        public IHttpActionResult DeleteDepartments(string id) {
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
