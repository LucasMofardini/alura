using CriandoAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CriandoAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class FilmeController : ControllerBase
{
    private static List<Movie?> movies = new();
    private static int id = 0;
    
    [HttpPost]
    public IActionResult AddMovie([FromBody] Movie? movie)
    {
        movie.Id = id++;
        
        movies.Add(movie);

        return CreatedAtAction(nameof(GetMovieById), new { id = movie.Id }, movie);
    }
    
    [HttpGet]
    public IEnumerable<Movie?> GetMovies([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return movies.Skip(skip).Take(take);
    }
    
    [HttpGet("{id}")]
    public ActionResult<Movie> GetMovieById(int id)
    {
        var filme = movies.FirstOrDefault(movie => movie.Id == id);

        if (filme is null)
            return NotFound();

        return Ok(filme);
    }
}