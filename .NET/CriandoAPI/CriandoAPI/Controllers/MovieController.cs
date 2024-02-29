using AutoMapper;
using CriandoAPI.Data;
using CriandoAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CriandoAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private readonly MovieContext _context;
    private readonly IMapper _mapper;
    
    public MovieController(MovieContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    [HttpPost]
    public IActionResult AddMovie([FromBody] CreateMovieDTO dto)
    {
        var movie = _mapper.Map<Movie>(dto);
        
        _context.Movies.Add(movie);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetMovieById), new { id = movie.Id }, movie);
    }
    
    [HttpGet]
    public IEnumerable<Movie?> GetMovies([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _context.Movies.Skip(skip).Take(take);
    }
    
    [HttpGet("{id}")]
    public ActionResult<Movie> GetMovieById(int id)
    {
        var filme = _context.Movies.FirstOrDefault(movie => movie.Id == id);

        if (filme is null)
            return NotFound();

        return Ok(filme);
    }
}