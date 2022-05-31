import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { Movie } from "../interfaces/interface";
import { imageUrl as ImageBaseUrl } from "../services/api";
import {
  Container,
  DateTitle,
  RatingTitle,
  SubTitleContainer,
  Title,
  TitleContainer,
} from "../Filmes/styles";

interface FilmesProps {
  data: Movie;
}

const Filmes = ({ data }: FilmesProps) => {
  const total = `${ImageBaseUrl}${data.imageUrl}`;
  console.log(total);
  return (
    <SafeAreaView>
      <View>
        <Container>
          <Image
            style={{ height: 250, width: 410, borderRadius: 7 }}
            source={{ uri: `${ImageBaseUrl}${data.imageUrl}` }}
          />
          <TitleContainer>
            <Title>{data.title}</Title>
            <SubTitleContainer>
              <DateTitle>{data.releaseDate}</DateTitle>
              <RatingTitle>{data.voteAverage}⭐️</RatingTitle>
            </SubTitleContainer>
          </TitleContainer>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default Filmes;
