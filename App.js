/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Sign from './src/screens/Sign';
import ListScreen from './src/screens/ListScreen';



const Stack=createNativeStackNavigator();

const AuthStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign}/>
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  )
}

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainWrapper:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "purple"
  },
  button:{
    backgroundColor:"red"
  }
  
});

export default App;
