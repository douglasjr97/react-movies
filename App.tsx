import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/screens/routes";
import { FilmesContextProvider } from "./src/contexts/FilmesContext/FilmesContext";
("./src/contexts/FilmesContext/FilmesContext");

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FilmesContextProvider>
          <Routes />
        </FilmesContextProvider>
      </NavigationContainer>
    </>
  );
}
