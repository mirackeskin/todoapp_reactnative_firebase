import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

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
        <View style={styles.mailWrapper}>
            <TextInput style={{width:"100%"}} onChangeText={setEmail} value={email}  placeholder='E-Mail Adresinizi Girin'></TextInput>
        </View>
        <View style={styles.passwordWrapper}>
            <TextInput onChangeText={setPassword} value={password} placeholder='Şifrenizi Girin'></TextInput>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={signIn} style={{backgroundColor:"#017D72",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                <Text style={{color:"white"}}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity activeOpacity={0.4} onPress={()=>Navigation.navigate("SignPage")} style={{borderWidth:1,borderColor:"#017D72",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                <Text style={{color:"#017D72"}}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
        <Button title='Logla' onPress={(e)=>{e.preventDefault;console.log(email+password)}}></Button>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    loginMainWrapper:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    mailWrapper:{
        backgroundColor:"gainsboro",
        width:"60%",
        margin:5,
        borderRadius:10
    },
    passwordWrapper:{
        backgroundColor:"gainsboro",
        width:"60%",
        margin:5,
        borderRadius:10
    },
    buttonWrapper:{
        width:"60%",
        height:40,
        borderRadius:10,
        margin:5
    }
})