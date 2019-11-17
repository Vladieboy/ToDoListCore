using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Planner.Models
{
    //needs instance of options to make any connections
    public class AppDbContext : DbContext
    {
        //constructor
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<ToDo> ToDo { get; set; }


    }
}
