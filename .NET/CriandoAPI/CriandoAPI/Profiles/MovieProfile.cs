using AutoMapper;
using CriandoAPI.Models;

namespace CriandoAPI.Profiles;

public class MovieProfile : Profile
{
    public MovieProfile()
    {
        CreateMap<CreateMovieDTO, Movie>();
    }
}