import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { Movie } from "../interfaces/interface";
import { imageUrl as ImageBaseUrl } from "../services/api";

interface FilmesProps {
  data: Movie;
}

const Filmes = ({ data }: FilmesProps) => {
  const total = `${ImageBaseUrl}${data.imageUrl}`;
  console.log(total);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Filmes</Text>
        <Text style={{ color: "#000" }}>{data.title}</Text>
        <Text>__________________________________________</Text>
        <Text>{data.title}</Text>
        <Text>{data.overview}</Text>
        <Text>{data.imageUrl}</Text>
        <Image
          style={{ height: 250, width: 250 }}
          source={{ uri: `${ImageBaseUrl}${data.imageUrl}` }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Filmes;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    border: "1px solid red",
  },
});
