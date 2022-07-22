using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebApplication
{
    public partial class Empl
    {
        public int Id { get; set; }
        public string Department { get; set; }
        public string FIO { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime? DateOfEmployment { get; set; }
        public int? Wage { get; set; }
    }
}
