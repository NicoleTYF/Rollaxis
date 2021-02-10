using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http; 
using Rollaxis.Models;

namespace Rollaxis.Controllers {
    [RoutePrefix("api/Login")]
    public class EmpLoginController : ApiController {

        RollaxisDBEntities db = new RollaxisDBEntities();

        int loginCnt = 0;

        public IEnumerable<EmployeeLogin> GetEmpLogin() {
            return db.EmployeeLogins.ToList();
        }

        protected override void Dispose(bool disposing) {
            if (disposing) {
                this.db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("UserLogin")] 
        [HttpPost] 
        public Response Login (Login lg) {

            var Obj = db.EmployeeLogins.Find();
                      

            if (Obj.Status == 0) {
                loginCnt++;
                if (loginCnt >= 3) {
                    Dispose();
                }
                return new Response {
                    Status = "Invalid", Message = "Invalid User"
                }; 
            } else if(Obj.Status == -1) {
                return new Response {
                    Status = "Inactive", Message = "User Inactive"
                }; 
            } else {
                return new Response {
                    Status = "Success", Message = lg.Username
                };
            }
        }

        [Route("FindId/{username}")]
        [HttpGet]
        public IHttpActionResult FindId(String username) {
            EmployeeLogin e = new EmployeeLogin();
            e = db.EmployeeLogins.Find(username);
            return Ok(e.EmployeeID);
        }

        [Route("FindEmp/{username}")]
        [HttpGet]
        public IHttpActionResult FindEmp(string username) {
            EmployeeLogin e = new EmployeeLogin();
            e = db.EmployeeLogins.Find(username);
            if (e == null) {
                return Ok(false);
            }
            return Ok(true);
        }

        // New User Registration 
        [Route("UserRegistration")] 
        [HttpPost] 
        public object createContact(Registration lvm) {
            try {
                RollaxisDBEntities db = new RollaxisDBEntities(); 
                EmployeeLogin el = new EmployeeLogin(); 
                if(el.EmployeeID == null) {
                    el.Username = lvm.Username; 
                    el.Password = lvm.Password; 
                    el.SecretQuestion1 = lvm.SecretQuestion1; 
                    el.SecretQuestion2 = lvm.SecretQuestion2; 
                    el.SecretAns1 = lvm.SecretAns1; 
                    el.SecretAns2 = lvm.SecretAns2; 
                    el.LastLoginDate = lvm.LastLoginDate; 
                    el.Status = lvm.Status; 
                    db.EmployeeLogins.Add(el);
                    db.SaveChanges();
                    return new Response {
                        Status = "Success", Message = "New User Sucessfully Saved."
                    };
                }
            } catch (Exception) {
                throw;
            }
            return new Response {
                Status = "Error", Message = "Invalid Username or Password"
            };
        }

    }

}
