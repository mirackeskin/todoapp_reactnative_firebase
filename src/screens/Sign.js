import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Sign = () => {

  const Navigation=useNavigation();

  const [email,setEmail]=useState("mk2@gmail.com");
  const [password,setPassword]=useState("123456");
  const [repassword,setRepassword]=useState("12345");

  const signUp=()=>{
    if(password!==repassword){
      Alert.alert(
        "Hata!",
        "Hatalı yada Uyumsuz Parola Girişi",
        [
          { text: "Tamam", onPress: () => console.log("OK Pressed") }
        ]
      );
    }else{
      auth().createUserWithEmailAndPassword(email,password)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))
    }
  }

  return (
    <SafeAreaView style={styles.loginMainWrapper}>
        <View style={styles.mailWrapper}>
            <TextInput onChangeText={setEmail} value={email} style={{width:"100%"}} placeholder='E-Mail Adresinizi Girin'></TextInput>
        </View>
        <View style={styles.passwordWrapper}>
            <TextInput onChangeText={setPassword} value={password} placeholder='Şifrenizi Girin'></TextInput>
        </View>
        <View style={styles.passwordWrapper}>
            <TextInput onChangeText={setRepassword} value={repassword} placeholder='Şifrenizi Tekrar Girin'></TextInput>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={signUp} style={{backgroundColor:"#017D72",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                <Text style={{color:"white"}}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={()=>Navigation.goBack()} style={{backgroundColor:"#017D72",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                <Text style={{color:"white"}}>Geri Dön</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Sign

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