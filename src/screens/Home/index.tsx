import { FlatList, View, ActivityIndicator, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ApiMovie, Movie } from "../../interfaces/interface";
import { api } from "../../services/api";
import Filmes from "../../components/Filmes";
import convertApiMovieToMovie from "../../utils/convertApiMovieToMovie";
import { Container, ContainerTop, Title } from "./styles";
import { Searchbar } from "react-native-paper";
import useDebounce from "../../hooks/useDebounce";
import { useFilmesContext } from "../../contexts/FilmesContext/FilmesContext";

const Home = ({ navigation }: any) => {
  const [filmes, setFilmes] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (query: any) => setSearchTerm(query);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isLoading, setIsLoading] = useState(false);

  const { setFilme } = useFilmesContext();

  // const navigation = useNavigation();

  function handleGoToDetails(movie: Movie) {
    setFilme(movie);
    navigation.navigate("Details");
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      async function loadFilms() {
        setIsLoading(true);
        const response = await api.get("/search/movie", {
          params: {
            query: debouncedSearchTerm,
          },
        });
        const unformattedMovies: ApiMovie[] = response.data.results;
        const formattedMovies: Movie[] = unformattedMovies.map((movie) =>
          convertApiMovieToMovie(movie)
        );
        setFilmes(formattedMovies);
        setIsLoading(false);
      }
      loadFilms();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/popular/");
      const unformattedMovies: ApiMovie[] = response.data.results;
      const formattedMovies: Movie[] = unformattedMovies.map((movie) =>
        convertApiMovieToMovie(movie)
      );
      setFilmes(formattedMovies);
    }
    loadFilmes();
  }, []);

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#2009ec" size={45} />
      </View>
    );
  } else {
    return (
      <Container>
        <ContainerTop>
          <Title>Populares🔥</Title>
          <Searchbar
            placeholder="Search"
            onChangeText={handleSearchTermChange}
            value={searchTerm}
            style={{ width: "90%", marginLeft: "3%" }}
          />
        </ContainerTop>
        <View>
          <FlatList
            data={filmes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Filmes
                data={item}
                handleGoToDetails={() => handleGoToDetails(item)}
              />
            )}
          />
        </View>
      </Container>
    );
  }
};

export default Home;
