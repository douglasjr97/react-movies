import { SafeAreaView, Text, StyleSheet, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ApiMovie, Movie } from "../interfaces/interface";
import { api } from "../services/api";
import Filmes from "../Filmes";
import convertApiMovieToMovie from "../utils/convertApiMovieToMovie";
import { Container, ContainerTop, LayoutSearchBar, Title } from "./styles";
import { Searchbar } from "react-native-paper";

const Dashboard = () => {
  const [filmes, setFilmes] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

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

  return (
    <Container>
      <ContainerTop>
        <Title>Populares🔥</Title>
        {/* <LayoutSearchBar> */}
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
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
};

export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//   },
// });
