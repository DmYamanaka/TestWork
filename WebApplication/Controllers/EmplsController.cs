using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmplsController : Controller
    {
        private readonly EmployeesContext _context;

        public EmplsController(EmployeesContext context)
        {
            _context = context;
        }

        // GET: Empls
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var empls = await _context.Empl.ToListAsync();
            return Ok(empls);
        }

        // GET: Empls/Details/5
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetDetailsEmployee([FromRoute] int id)
        {
            var empl = await _context.Empl.FirstOrDefaultAsync(x => x.Id == id);
            if (empl != null)
            {
                return Ok(empl);
            }

            return NotFound("Нет данного работника!");
        }


        // POST: Empls/Create
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([Bind("Id,FIO,DateOfBirth,DateOfEmployment,Wage")] Empl empl)
        {
            if (ModelState.IsValid)
            {
                await _context.AddAsync(empl);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetDetailsEmployee), new { id = empl.Id }, empl);
            }
            return NotFound("Данные не валидны!");
        }

        // GET: Empls/Edit/5
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute]int? id, [FromBody] Empl empls)
        {
            var empl = await _context.Empl.FirstOrDefaultAsync(x => x.Id == id);
            if (empl != null)
            {
                empl.Department = empls.Department;
                empl.FIO = empls.FIO;
                empl.DateOfBirth = empls.DateOfBirth;
                empl.DateOfEmployment = empls.DateOfEmployment;
                empl.Wage = empls.Wage;
                await _context.SaveChangesAsync();
                return Ok(empl);
            }

            return NotFound("Работник не найден!");
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute]int? id)
        {
            var empl = await _context.Empl.FirstOrDefaultAsync(x => x.Id == id);
            if (empl != null)
            {
                _context.Remove(empl);
                await _context.SaveChangesAsync();
                return Ok(empl);
            }

            return NotFound("Работник не найден!");
        }

    }   
}
