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
    
    public partial class Leave
    {
        public string LeaveID { get; set; }
        public int EmployeeID { get; set; }
        public Nullable<System.DateTime> FromDate { get; set; }
        public Nullable<System.DateTime> ToDate { get; set; }
        public Nullable<double> Days { get; set; }
        public string Type { get; set; }
        public string Reason { get; set; }
        public Nullable<int> IsApproved { get; set; }
    
        public virtual Leave Leave1 { get; set; }
        public virtual Leave Leave2 { get; set; }
    }
}