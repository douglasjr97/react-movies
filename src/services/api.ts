import axios from "axios";

const imageUrl = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzg5YTZmZTdjNTZkMzJlODliMmM4YmZiY2UwODBmNCIsInN1YiI6IjYyMjBkNjRkOWYxYmU3MDAxYjFiMDgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsJSzczD7X7Aa13a7Hb52a6bGplRBexJ_xZlEr3K7mc",
  },
  params: {
    language: "pt-BR",
  },
});

export { api, imageUrl };
