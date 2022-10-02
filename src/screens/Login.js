import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const {width,height}=Dimensions.get("screen");

const Login = () => {
    
    const Navigation=useNavigation();

    const [email,setEmail]=useState("mk@gmail.com");
    const [password,setPassword]=useState("123456");

    const signIn=()=>{
        //Giriş Yapma
        auth().signInWithEmailAndPassword(email,password)
        .then(()=>Navigation.navigate("ListScreen",{username:email}))
        .catch(error=>console.log(error))
    }

  return (
    <SafeAreaView style={styles.loginMainWrapper}>
        <View style={styles.upBox}>
            <Text style={{fontSize:width/10,color:"#6001D1"}}>toDaily</Text>
        </View>
        <View style={styles.downBox}>
            <View style={styles.mailWrapper}>
                <TextInput style={{width:"100%",color:"#6001D1"}} onChangeText={setEmail} value={email}  placeholder='E-Mail Adresinizi Girin' placeholderTextColor={"white"}></TextInput>
            </View>
            <View style={styles.passwordWrapper}>
                <TextInput style={{width:"100%",color:"#6001D1"}} onChangeText={setPassword} secureTextEntry={true} value={password} placeholder='Şifrenizi Girin' placeholderTextColor={"white"}></TextInput>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={signIn} style={{backgroundColor:"#6001D1",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:1,borderColor:"white"}}>
                    <Text style={{color:"white"}}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity activeOpacity={0.4} onPress={()=>Navigation.navigate("SignPage")} style={{backgroundColor:"white",borderWidth:1,borderColor:"#6001D1",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                    <Text style={{color:"#6001D1"}}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    loginMainWrapper:{
        flex:1,
        backgroundColor:"#6001D1",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    upBox:{
        backgroundColor:"white",
        borderWidth:2,
        borderColor:"white",
        borderBottomLeftRadius:width/10,
        borderTopRightRadius: width/10,
        width:width/100*40,
        height:width/100*20,
        justifyContent:"center",
        alignItems:"center"        
    },
    downBox:{
        
        backgroundColor:"transparent",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    mailWrapper:{
        backgroundColor:"white",
        width:"70%",
        margin:5,
        borderRadius:10,
        borderWidth:3,
        borderColor:"#6001D1"
    },
    passwordWrapper:{
        backgroundColor:"white",
        width:"70%",
        margin:5,
        borderRadius:10,
        borderWidth:3,
        borderColor:"#6001D1"
    },
    buttonWrapper:{
        width:"70%",
        height:40,
        borderRadius:10,
        margin:5,
    }
})