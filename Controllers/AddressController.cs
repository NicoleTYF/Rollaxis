using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("api/Address")]
    public class AddressController : ApiController {

       private RollaxisDBEntities Obj;

        public AddressController() {
            Obj = new RollaxisDBEntities();
        }
        public IEnumerable<Address> GetDept() {
            return Obj.Addresses.ToList();
        }

       [HttpGet] 
       [Route("AllAddress")] 
       public IQueryable <Address> GetAddress() {
            try {
                return Obj.Addresses; 
            } catch (Exception) {
                throw;
            } 
       }

       [HttpGet] 
       [Route("GetAddressById/{AddressID}")]
       public IHttpActionResult GetAddressById(string AddressID) {
            Address ObjAdr = new Address();  
            try {
                ObjAdr = Obj.Addresses.Find(AddressID); 
                if(ObjAdr == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            } 
            return Ok(ObjAdr);
       }

       [HttpPost] 
       [Route("InsertAddress")] 
       public IHttpActionResult PostAddress(Address data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState); 
            }
            try {
                Obj.Addresses.Add(data); 
                Obj.SaveChanges(); 
            } catch (Exception) {
                throw;
            } 
            return Ok(data);
       }

       [HttpPut] 
       [Route("UpdateAddress")] 
       public IHttpActionResult PutAddress(Address data) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                Address ObjAdr = Obj.Addresses.Find(data.AddressID);
                ObjAdr.AddressID = data.AddressID;
                ObjAdr.AddressLine1 = data.AddressLine1;
                ObjAdr.AddressLine2 = data.AddressLine2;
                ObjAdr.City = data.City;
                ObjAdr.State = data.State;
                ObjAdr.PostalCode = data.PostalCode;
                ObjAdr.ModifiedDate = data.ModifiedDate;
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpDelete] 
        [Route("DeleteAddress")] 
        public IHttpActionResult DeleteAddresss(string id) {
            Address d = Obj.Addresses.Find(id); 
            if(d == null) {
                return NotFound(); 
            }
            Obj.Addresses.Remove(d); 
            Obj.SaveChanges(); 
            return Ok(d);
        }
     }
}
