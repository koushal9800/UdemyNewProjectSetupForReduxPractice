import React from "react";
import { View,Text } from "react-native";
import 'react-native-gesture-handler'
import MainNavigation from "./navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";


const App =() =>{
  return (
    <Provider store={store} >
    <NavigationContainer>
    <MainNavigation />
    </NavigationContainer>
    </Provider>
  )
}

export default App;