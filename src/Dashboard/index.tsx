import { SafeAreaView, Text, StyleSheet, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ApiMovie, Movie } from "../interfaces/interface";
import { api } from "../services/api";
import Filmes from "../Filmes";
import convertApiMovieToMovie from "../utils/convertApiMovieToMovie";

const Dashboard = () => {
  const [filmes, setFilmes] = useState<Movie[]>([]);

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
    <SafeAreaView style={styles.container}>
      <Text>helo</Text>
      <View>
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
