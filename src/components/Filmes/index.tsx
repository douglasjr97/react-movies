import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Movie } from "../../interfaces/interface";
import { imageUrl as ImageBaseUrl } from "../../services/api";
import {
  Container,
  DateTitle,
  RatingTitle,
  SubTitleContainer,
  Title,
  TitleContainer,
} from "./styles";

interface FilmesProps {
  data: Movie;
  handleGoToDetails: () => void; //Tipagem da funcão que Recebe a seleção do conteúdo
}

export function Filmes({ data, handleGoToDetails }: FilmesProps) {
  return (
    <SafeAreaView>
      <View>
        <Container>
          <Image
            style={{ height: 250, width: 410, borderRadius: 7 }}
            source={{ uri: `${ImageBaseUrl}${data.imageUrl}` }}
          />
          <TitleContainer>
            <Title onPress={handleGoToDetails}>{data.title}</Title>
            <SubTitleContainer>
              <DateTitle>{data.releaseDate}</DateTitle>
              <RatingTitle>{data.voteAverage}⭐️</RatingTitle>
            </SubTitleContainer>
          </TitleContainer>
        </Container>
      </View>
    </SafeAreaView>
  );
}

export default Filmes;
