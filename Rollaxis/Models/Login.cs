using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Rollaxis.Models;

namespace Rollaxis.Models
{
    public class Login {
        public string Username {
            get; 
            set; 
        }
        public string Password {
            get; 
            set;
        }

        public string SecretQuestion {
            get; 
            set;
        }

        public string SecretAns {
            get;
            set;
        }
    }

    public class Registration: EmployeeLogin {}
}