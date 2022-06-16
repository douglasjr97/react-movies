import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Pages/routes";
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
