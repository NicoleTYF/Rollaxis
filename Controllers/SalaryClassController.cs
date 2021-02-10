using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("api/SalaryClass")]
    public class SalaryClassController : ApiController {

       private RollaxisDBEntities Obj;

        public SalaryClassController() {
            Obj = new RollaxisDBEntities();
        }
        public IEnumerable<SalaryClass> GetDept() {
            return Obj.SalaryClasses.ToList();
        }

       [HttpGet] 
       [Route("AllSalaryClass")] 
       public IQueryable <SalaryClass> GetSalaryClass() {
            try {
                return Obj.SalaryClasses; 
            } catch (Exception) {
                throw;
            } 
       }

       [HttpGet] 
       [Route("GetSalaryClassById/{SalaryClassID}")]
       public IHttpActionResult GetSalaryClassById(string SalaryClassID) {
            SalaryClass ObjAdr = new SalaryClass();  
            try {
                ObjAdr = Obj.SalaryClasses.Find(SalaryClassID); 
                if(ObjAdr == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(ObjAdr);
       }

       [HttpPost] 
       [Route("InsertSalaryClass")] 
       public IHttpActionResult PostSalaryClass(SalaryClass data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }
            try {
                Obj.SalaryClasses.Add(data); 
                Obj.SaveChanges(); 
            } catch (Exception) {
                throw;
            } 
            return Ok(data);
       }

       [HttpPut] 
       [Route("UpdateSalaryClass")] 
       public IHttpActionResult PutSalaryClass(SalaryClass data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                SalaryClass ObjSc = Obj.SalaryClasses.Find(data.SalaryClassID);
                ObjSc.SalaryClassID = data.SalaryClassID; 
                ObjSc.Rate = data.Rate; 
                ObjSc.Bonus = data.Bonus; 
                ObjSc.MedicalAllowance = data.MedicalAllowance; 
                ObjSc.TravelAllowance = data.TravelAllowance; 
                ObjSc.LaundryAllowance = data.LaundryAllowance; 
                ObjSc.ClothingAllowance = data.ClothingAllowance; 
                ObjSc.EducationAllowance = data.EducationAllowance; 
                ObjSc.MealAllowance = data.MealAllowance;
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpDelete] 
        [Route("DeleteSalaryClass")] 
        public IHttpActionResult DeleteSalaryClasss(string id) {
            SalaryClass d = Obj.SalaryClasses.Find(id); 
            if(d == null) {
                return NotFound(); 
            }
            Obj.SalaryClasses.Remove(d); 
            Obj.SaveChanges(); 
            return Ok(d);
        }
     }
}
