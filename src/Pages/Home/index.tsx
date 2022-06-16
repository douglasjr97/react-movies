import { FlatList, View, ActivityIndicator, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { ApiMovie, Movie } from "../../interfaces/interface";
import { api } from "../../services/api";
import Filmes from "../../Filmes";
import convertApiMovieToMovie from "../../utils/convertApiMovieToMovie";
import { Container, ContainerTop, Title } from "./styles";
import { Searchbar } from "react-native-paper";
import useDebounce from "../../hooks/useDebounce";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [filmes, setFilmes] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (query: any) => setSearchTerm(query);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoSearch() {
    navigation.navigate({ key: "Details" });
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
          <Button title="Go to Details" onPress={handleGoSearch} />
          <Searchbar
            placeholder="Search"
            onChangeText={handleSearchTermChange}
            value={searchTerm}
            style={{ width: "90%", marginLeft: "3%" }}
          />
          {/* </LayoutSearchBar> */}
        </ContainerTop>
        <View>
          <FlatList
            data={filmes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </View>
      </Container>
    );
  }
};

export default Home;
