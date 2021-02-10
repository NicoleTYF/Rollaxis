using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("api/Leave")]
    public class LeaveController : ApiController {

        private RollaxisDBEntities Obj;

        public LeaveController() {
            Obj = new RollaxisDBEntities();
        }
        public IEnumerable<Leave> LeaveList() {
            return Obj.Leaves.ToList();
        }

        [HttpGet]
        [Route("AllLeaves")]
        public IQueryable<Leave> GetLeave() {
            try {
                return Obj.Leaves;
            } catch (Exception) {
                throw;
            }
        }

        [HttpGet]
        [Route("GetLeaveById/{LeaveID}")]
        public IHttpActionResult GetLeaveById(string LeaveID) {
            Leave ObjAdr = new Leave();
            try {
                ObjAdr = Obj.Leaves.Find(LeaveID);
                if (ObjAdr == null) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            }
            return Ok(ObjAdr);
        }

        [HttpGet]
        [Route("GetLeaveByEmpId/{EmpID}")]
        public IHttpActionResult GetLeaveByEmpId(string EmpID) {
            List<Leave> listLeaves = new List<Leave>(); 
            try {

                var result = LeaveList().Where(l => l.EmployeeID.Trim().Equals(EmpID));

                foreach (Leave l in result) {
                    listLeaves.Add(l);
                }

                if (listLeaves.Count == 0) {
                    return NotFound();
                }
            } catch (Exception) {
                throw;
            }
            return Ok(listLeaves);
        }

        [HttpGet]
        [Route("GetType/{EmpID}/{Type}")]
        public IHttpActionResult GetVacation(string EmpID, string Type) {
            double time = 0.0f;
            List<Leave> listLeaves = new List<Leave>();
            double timeDiff; 
            try {
                var result = LeaveList().Where(l => 
                    l.EmployeeID.Trim().Equals(EmpID) && 
                    l.Type == Type && l.Status.Trim() == "Finalised" 
                    && l.FromDate.Year == DateTime.Now.Year 
                    && l.FromDate.Month == DateTime.Now.Month);

                foreach (Leave l in result) {
                    timeDiff = (20 - Int32.Parse(l.FromTime.Substring(0,
                                    l.FromTime.IndexOf(":")))) +
                                   (Int32.Parse(l.ToTime.Substring(0,
                                    l.ToTime.IndexOf(":")))) - 8;
                    time += (l.ToDate - l.FromDate).TotalDays +
                            Math.Round(timeDiff / 24, 2);
                }
            } catch (Exception) {
                throw;
            }
            return Ok(time);
        }

        [HttpGet]
        [Route("GetTypeOthers/{EmpID}")]
        public IHttpActionResult GetOthers(string EmpID) {
            double time = 0.0f;
            List<Leave> listLeaves = new List<Leave>();
            double timeDiff;
            try {
                var result = LeaveList().Where(l =>
                    l.EmployeeID.Trim().Equals(EmpID) &&
                    l.Type == "Others…" && l.Status == "Finalised"
                    && l.FromDate.Year == DateTime.Now.Year
                    && l.FromDate.Month == DateTime.Now.Month);

                foreach (Leave l in result) {
                    timeDiff = (20 - Int32.Parse(l.FromTime.Substring(0,
                                    l.FromTime.IndexOf(":")))) +
                                   (Int32.Parse(l.ToTime.Substring(0,
                                    l.ToTime.IndexOf(":")))) - 8;
                    time += (l.ToDate - l.FromDate).TotalDays +
                            Math.Round(timeDiff / 24, 2);
                }
            } catch (Exception) {
                throw;
            }
            return Ok(time);
        }

        [HttpPost]
        [Route("InsertLeave")]
        public IHttpActionResult PostLeave(Leave data) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                Obj.Leaves.Add(data);
                Obj.SaveChanges();
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateLeave")]
        public IHttpActionResult PutLeave(Leave data) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            try {
                Leave ObjLvs = Obj.Leaves.Find(data.LeaveID);
                ObjLvs.LeaveID = data.LeaveID;
                ObjLvs.EmployeeID = data.EmployeeID; 
                ObjLvs.FromDate = data.FromDate; 
                ObjLvs.FromTime = data.FromTime; 
                ObjLvs.ToDate = data.ToDate; 
                ObjLvs.ToTime = data.ToTime; 
                ObjLvs.Type = data.Type; 
                ObjLvs.Description = data.Description; 
                ObjLvs.Status = data.Status; 
            } catch (Exception) {
                throw;
            }
            return Ok(data);
        }

        [HttpDelete]
        [Route("DeleteLeave")]
        public IHttpActionResult DeleteLeaves(string id) {
            Leave d = Obj.Leaves.Find(id);
            if (d == null) {
                return NotFound();
            }
            Obj.Leaves.Remove(d);
            Obj.SaveChanges();
            return Ok(d);
        }
    }
}
