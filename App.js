import React from "react";
import { View,Text } from "react-native";
import 'react-native-gesture-handler'
import MainNavigation from "./navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";

const App =() =>{
  return (
    <NavigationContainer>
    <MainNavigation />
    </NavigationContainer>
  )
}

export default App;