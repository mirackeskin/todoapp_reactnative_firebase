import { SafeAreaView, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const {width,height}=Dimensions.get("screen");

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.headerBarMainWrapper}>
      <View style={styles.logoContainer}>
        <Text style={{fontSize:height/24,color:"white"}}>toDaily</Text>
      </View>
      <View style={styles.headerBarButtonWrapper}>
        <TouchableOpacity onPress={()=>{auth().signOut()}}>
            <Text style={{fontSize:20,color:"#6001D1"}}>Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    headerBarMainWrapper:{
        backgroundColor:"#6001D1",
        width:"100%",
        height:height/12,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:width/20
        },
        logoContainer:{
            borderWidth:1,
            borderColor:"white",
            padding:2,
            borderBottomLeftRadius:20,
            borderTopRightRadius:20,
            paddingHorizontal:5,
        },
        headerBarButtonWrapper:{
            backgroundColor:"white",
            marginRight:width/80,
            padding:width/160,
            borderBottomLeftRadius:10,
            borderTopRightRadius:10
        }
    })