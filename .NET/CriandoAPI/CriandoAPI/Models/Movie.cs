using System.ComponentModel.DataAnnotations;

namespace CriandoAPI.Models;

public class Movie
{
    public int Id { get; set; }
    [Required(ErrorMessage = "O titulo do filme é obrigatorio")]
    [MaxLength(50, ErrorMessage = "O Titulo não pode exceder 50 caracteres")]
    public string Titulo { get; set; }
    [MaxLength(50, ErrorMessage = "O Genero não pode exceder 50 caracteres")]
    [Required(ErrorMessage = "O titulo do genero é obrigatorio")]
    public string Genero { get; set; }
    [Range(10, 700, ErrorMessage = "A duração tem que estar entre 10 a 700")]
    [Required(ErrorMessage = "A duração é obrigatorio")]
    public int Duracao { get; set; }
}