// export type Result = {
//   id: number;
//   original_title: string;
//   overview: string;
//   poster_path: string;
// };

export type ApiMovie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
};

export type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string;
  backdrop_path?: string;
  voteAverage: number;
  overview: string;
};
