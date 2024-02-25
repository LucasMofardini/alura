using CriandoAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CriandoAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class FilmeController : ControllerBase
{
    [HttpPost]
    public void AdicionaFilme([FromBody] Filme filme)
    {
        
    }
}