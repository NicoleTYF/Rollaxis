//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Rollaxis.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class EmployeeLogin
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public int EmployeeID { get; set; }
        public Nullable<int> TotalCnt { get; set; }
        public Nullable<int> LoginCnt { get; set; }
        public Nullable<int> IsApproved { get; set; }
        public Nullable<int> Status { get; set; }
    }
}
