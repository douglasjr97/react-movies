import { View, Text, FlatList } from "react-native";
import React from "react";
import { useContext } from "react";
import { FilmesContext } from "../../contexts/FilmesContext/FilmesContext";

export default function Details() {
  const { filme, setFilme } = useContext(FilmesContext);
  return (
    <View>
      <Text>Details</Text>
      <Text>{filme?.title}</Text>
    </View>
  );
}
