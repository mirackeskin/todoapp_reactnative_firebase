import { StyleSheet, Text, SafeAreaView,View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ConnectionScreen = () => { 

  return (
    <SafeAreaView style={styles.connectionScreenMainWrapper}>
      <View style={styles.netInfoContainer}>
        <Text style={{color:"white",fontSize:20}}>Lütfen internet bağlantınızı kontrol edin! Bağlantı sağlandıktan sonra uygulamayı yeniden başlatmayı deneyin!</Text>
      </View>
    </SafeAreaView>
  )
}

export default ConnectionScreen

const styles = StyleSheet.create({
    connectionScreenMainWrapper:{
        flex:1,
        backgroundColor:"transparent",
        justifyContent:"center",
        alignItems:"center"
    },
    netInfoContainer:{
        backgroundColor:"#F34B7D",
        width:"80%",
        borderRadius:30,
        borderBottomLeftRadius:0,
        borderTopRightRadius:0,
        padding:20
    }
})