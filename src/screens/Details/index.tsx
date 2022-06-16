import { View, Text, FlatList } from "react-native";
import React from "react";
import { useContext } from "react";
import {
  FilmesContext,
  useFilmesContext,
} from "../../contexts/FilmesContext/FilmesContext";
import Filmes from "../../components/Filmes";
import { Movie } from "../../interfaces/interface";

export default function Details() {
  const { filme, setFilme } = useContext(FilmesContext);
  console.log(filme);
  return (
    <View>
      <Text>Details</Text>

      {/* <FlatList 
        data={filme as Movie}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Filmes data={item}/>}
      /> */}
    </View>
  );
}
