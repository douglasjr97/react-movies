import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./src/Dashboard";
import Routes from "./src/Pages/routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
