import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #1f2226;
`;

export const Header = styled.View``;

export const BackgroundContent = styled.View`
  width: 100%;
  height: ${RFValue(234)}px;
  margin-bottom: 16px;
  border: 1px solid red;
`;

export const ImageMovieContent = styled(BorderlessButton)`
  width: 100px;
  height: 150px;
  position: absolute;
  margin: 16px;
  margin-top: 150px;
  border: 1px solid red;
`;

export const ImageMovieBackground = styled.Image`
  height: 100%;
`;

export const TitleMovie = styled.Text`
  font-size: ${RFValue(25)}px;
  /* font-family: ; */
  color: #f9bc50;
  margin-left: 130px;
  border: 1px solid red;
`;

export const TitleDescription = styled.Text`
  font-size: ${RFValue(25)}px;
  /* font-family: ; */
  color: #ffffff;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(20)}px;
  color: #ffffff;
`;

export const DescriptionWrapper = styled.View`
  margin: 16px;
  margin-top: 36px;
`;
