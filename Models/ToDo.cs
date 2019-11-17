using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Planner.Models
{
    public class ToDo
    {
        public string ToDoId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public decimal Notify { get; set; }
        public DateTime Time { get; set; }
    }
}
