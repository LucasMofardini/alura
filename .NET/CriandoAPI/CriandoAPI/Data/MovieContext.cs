using CriandoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CriandoAPI.Data;

public class MovieContext : DbContext
{
    public MovieContext(DbContextOptions<MovieContext> opts) : base (opts)
    {
        
    }

    public DbSet<Movie> Movies { get; set; }
}