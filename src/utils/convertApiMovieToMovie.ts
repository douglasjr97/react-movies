import { ApiMovie, Movie } from "../interfaces/interface";

export default function convertApiMovieToMovie(apiMovie: ApiMovie): Movie {
  return {
    id: apiMovie.id,
    title: apiMovie.title,
    releaseDate: apiMovie.release_date,
    backdrop_path: apiMovie.backdrop_path,
    imageUrl: apiMovie.poster_path,
    voteAverage: apiMovie.vote_average,
    overview: apiMovie.overview,
  };
}
