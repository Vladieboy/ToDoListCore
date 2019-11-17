using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Planner.Models;
namespace Planner.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {

        private readonly AppDbContext _context;


        public ToDoController(AppDbContext context)
        {
            _context = context;
        }



        [HttpGet("[action]")]
        public IEnumerable<ToDo> ToDoList()
        {
            var todo = _context.ToDo.ToList();


            return todo;
        }
        [HttpPost("[action]")]
        public IActionResult PostToDo([FromBody] ToDo todoData)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("ModelState invalid");
            }

            todoData.ToDoId = Guid.NewGuid().ToString();

            _context.ToDo.Add(todoData);


            try
            {

            _context.SaveChanges();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message ?? ex.Message);
            }


            //_context.ToDo.Add(_todo);

            return  Ok();
        }
    }
}