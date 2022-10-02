import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("screen");

const InfoCard = () => {
  return (
    <View style={styles.infoCardMainWrapper}>
      <View style={styles.infoCardContainer}>
        <Text style={{color:"white",fontSize:width/26}}>Hiç Daily'n yok! Hadi ilk Daily'ni oluşturalım! Hemen sağ alttaki mor baloncuğa tıkla.Unutma Daily'ni oluşturduktan sonra ona dokunursan Daily'ni tamamlamışsın demektir ve ekrandan silinir!</Text>
      </View>
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    infoCardMainWrapper:{
        backgroundColor:"transparent",
        justifyContent:"center",
        alignItems:"flex-start",
        minHeight:height-(height/10)-(width/10)-20
    },
    infoCardContainer:{
        backgroundColor:"#6001D1",
        width:"70%",
        minHeight:height/3,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:9999,
        borderBottomRightRadius:0,
        padding:width/7,
        position:"absolute",
        bottom:100,
        right:100
    }
})