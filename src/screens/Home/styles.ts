import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: black;
`;

export const Title = styled.Text`
  padding-left: 35%;
  font-size: 26px;
  color: yellow;
`;

export const LayoutSearchBar = styled.TextInput`
  border: 3px solid red;
`;

export const ContainerTop = styled.View`
  flex-direction: column;
`;
