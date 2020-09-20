import React, { useState } from "react";
import "react-native-gesture-handler";
import { Home } from "./screens/Home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ReviewDetails } from "./screens/ReviewDetails";
import { About } from "./screens/About";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Game Reviewer",
          headerStyle: {
            backgroundColor: "#8259ab",
            height: 60,
          },
          headerTintColor: "#eee",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#8259ab",
            height: 60,
          },
          headerTintColor: "#eee",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
          <Drawer.Screen name="About" component={About}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
