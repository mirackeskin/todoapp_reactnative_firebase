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
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import NetInfo from "@react-native-community/netinfo";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Sign from './src/screens/Sign';
import ListScreen from './src/screens/ListScreen';
import ConnectionScreen from './src/screens/ConnectionScreen';



const Stack=createNativeStackNavigator();



const App: () => Node = () => {

  const AuthStack=()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign}/>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ConnectionPage" component={ConnectionScreen} />
      </Stack.Navigator>
    )
  }

  const [userSession,setUserSession]=useState(null);
  const [netinfo,setNetInfo]=useState(true);

  async function internetControl(){
    const internetState=(await NetInfo.fetch()).isConnected;
    setNetInfo(internetState);
  }

  useEffect(()=>{
    internetControl();
    auth().onAuthStateChanged((user)=>{
      setUserSession(!!user)//2 ünlem doluysa true boşsa false döner..
    })    
    
  });//************* */

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {
          netinfo ? userSession ? <Stack.Screen name="ListScreen" component={ListScreen} />
                                : <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
                  : <Stack.Screen name="ConnectionPage" component={ConnectionScreen}/>
        }        
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
