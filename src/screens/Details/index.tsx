import { Text, ScrollView, Image } from "react-native";
import React from "react";
import { useContext } from "react";
import { FilmesContext } from "../../contexts/FilmesContext/FilmesContext";
import { imageUrl as ImageBaseUrl } from "../../services/api";
import {
  BackgroundContent,
  Container,
  Description,
  DescriptionWrapper,
  Header,
  ImageMovieBackground,
  ImageMovieContent,
  TitleDescription,
  TitleMovie,
} from "./styles";

export default function Details() {
  const { filme } = useContext(FilmesContext);
  return (
    <Container>
      <ScrollView>
        <Header>
          <BackgroundContent>
            <ImageMovieBackground
              style={{ height: 250, width: 410, borderRadius: 7 }}
              source={{ uri: `${ImageBaseUrl}${filme?.imagePosterUrl}` }}
            />
          </BackgroundContent>

          <ImageMovieContent>
            <Image
              style={{ height: "100%" }}
              source={{ uri: `${ImageBaseUrl}${filme?.imageUrl}` }}
            />
          </ImageMovieContent>

          <TitleMovie>{filme?.title}</TitleMovie>
        </Header>
        <DescriptionWrapper>
          <TitleDescription>Resumo</TitleDescription>
          <Description>{filme?.overview}</Description>
        </DescriptionWrapper>
      </ScrollView>
    </Container>
  );
}
