import React from "react";
import { View,Text } from "react-native";
import 'react-native-gesture-handler'
import MainNavigation from "./navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store, { persiststor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


const App =() =>{
  return (
    <Provider store={store} >
      <PersistGate persistor={persiststor}  loading={null} >
    <NavigationContainer>
    <MainNavigation />
    </NavigationContainer>
    </PersistGate>
    </Provider>
  )
}

export default App;