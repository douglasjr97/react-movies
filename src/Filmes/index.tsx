import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { Movie } from "../interfaces/interface";
import { imageUrl as ImageBaseUrl } from "../services/api";
import {
  Container,
  DateTitle,
  RatingTitle,
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
          <TitleContainer>
            <Title>
              <Text style={{ color: "white", fontSize: 26 }}>{data.title}</Text>
            </Title>
            <DateTitle>
              <Text style={{ color: "white", fontSize: 26 }}>
                {data.releaseDate}
              </Text>
            </DateTitle>
            <RatingTitle>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.voteAverage}
              </Text>
            </RatingTitle>
          </TitleContainer>

          <Image
            style={{ height: 250, width: 400 }}
            source={{ uri: `${ImageBaseUrl}${data.imageUrl}` }}
          />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default Filmes;
