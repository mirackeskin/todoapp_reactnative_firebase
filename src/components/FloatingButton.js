import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const FloatingButton = (props) => {
    const {visibleState}=props;
  return (
      <TouchableOpacity onPress={visibleState}  style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
  )
}

export default FloatingButton
//#017D72
const styles = StyleSheet.create({
    floatingButton:{
        width:70,
        height:70,
        position:'absolute',
        bottom:30,
        right:30,
        borderRadius:60,
        backgroundColor:"#6001D1",
        justifyContent:"center",
        alignItems:"center"

    },
    floatingButtonText:{
        color:"white",
        fontSize:30
    }
})