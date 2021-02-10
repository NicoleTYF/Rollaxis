
namespace Rollaxis.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class SalaryClass
    {
        public string SalaryClassID { get; set; }
        public Nullable<double> Rate { get; set; }
        public Nullable<double> Bonus { get; set; }
        public Nullable<double> MedicalAllowance { get; set; }
        public Nullable<double> TravelAllowance { get; set; }
        public Nullable<double> LaundryAllowance { get; set; }
        public Nullable<double> ClothingAllowance { get; set; }
        public Nullable<double> EducationAllowance { get; set; }
        public Nullable<double> MealAllowance { get; set; }
    }
}
