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
        [Route("UserLogin")] 
        [HttpPost] 
        public Response Login (Login lg) {
           RollaxisDBEntities DB = new RollaxisDBEntities();
           var Obj = DB.PROC_EmployeeLogin(lg.Username, lg.Password).
                        ToList<PROC_EmployeeLogin_Result>().FirstOrDefault();
                    if(Obj.Status == 0) {
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

                // New User Registration 
                [Route("UserRegistration")]
                [HttpPost] 
                public object createContact(Registration lvm) {
                    try {
                        RollaxisDBEntities db = new RollaxisDBEntities(); 
                        EmployeeLogin el = new EmployeeLogin(); 
                        if(el.EmployeeID == 0) {
                            el.Username = lvm.Username; 
                            el.Password = lvm.Password; 
                            el.IsApproved = lvm.IsApproved; 
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
