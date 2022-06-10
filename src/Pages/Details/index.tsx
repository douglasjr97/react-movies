import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import {
  FilmesContext,
  useFilmesContext,
} from "../../contexts/FilmesContext/FilmesContext";

export default function Details() {
  const { filme } = useContext(FilmesContext);
  console.log(filme);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
