
namespace Rollaxis.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Leave
    {
        public string LeaveID { get; set; }
        public string EmployeeID { get; set; }
        public System.DateTime FromDate { get; set; }
        public System.DateTime ToDate { get; set; }
        public string FromTime { get; set; }
        public string ToTime { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
    }
}
