import { SafeAreaView, StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("screen");

const DailyCard = (props) => {
    const {dailyContent}=props;
  return (
    <SafeAreaView style={styles.dailyCardMainWrapper}>
      <TouchableOpacity style={styles.dailyCardContainer}>
        <Text style={{fontSize:22,color:"white"}}>{dailyContent}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DailyCard

const styles = StyleSheet.create({
    dailyCardMainWrapper:{
        backgroundColor:"transparent" ,
        width:"100%",
        minHeight:height/7,
        alignItems:"center",
        justifyContent:"center",
               
    },
    dailyCardContainer:{
        backgroundColor:"#6001D1",
        width:"90%",
        minHeight:height/9,
        borderBottomRightRadius:40,
        borderTopLeftRadius:40,
        alignItems:"flex-start",
        justifyContent:"center",
        paddingHorizontal:width/100*5
    }
})