import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../Dashboard";
import Details from "./Details";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Details">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
