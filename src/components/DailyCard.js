import { SafeAreaView, StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'

import database from '@react-native-firebase/database';

const {width,height}=Dimensions.get("screen");

const DailyCard = (props) => {
    const {dailyKey,dailyContent}=props;
  return (
    <SafeAreaView style={styles.dailyCardMainWrapper}>
      <TouchableOpacity onPress={()=>database().ref('/Dailies/'+dailyKey).remove()} style={styles.dailyCardContainer}>
        <Text style={{fontSize:width/22,color:"white"}}>{dailyContent}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DailyCard

const styles = StyleSheet.create({
    dailyCardMainWrapper:{
        backgroundColor:"transparent" ,
        width:"100%",
        minHeight:height/8,
        alignItems:"center",
        justifyContent:"center",
               
    },
    dailyCardContainer:{
        backgroundColor:"#6001D1",
        width:"90%",
        minHeight:height/10,
        borderBottomRightRadius:40,
        borderTopLeftRadius:40,
        alignItems:"flex-start",
        justifyContent:"center",
        paddingHorizontal:width/100*5,
        paddingVertical:10
    }
})