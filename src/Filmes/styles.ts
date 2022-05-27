import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  text-align: center;
  border: 3px solid blue;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #000;
`;

export const SubTitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.View`
  align-items: center;
  width: 300px;
  background-color: #888;
`;

export const DateTitle = styled.View`
  align-items: flex-start;
  width: 300px;
  background-color: #6944;
`;
export const RatingTitle = styled.View`
  align-items: flex-end;
  width: 300px;
  background-color: #f784;
`;
