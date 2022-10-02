import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const {width,height}=Dimensions.get("screen");

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
      .catch(error=>{return Alert.alert("Uups!","Bu mail adresi zaten kullanılıyor!",[
        { text: "Tamam", onPress: () => console.log("OK Pressed") }
      ])})
    }
  }

  return (
    <SafeAreaView style={styles.loginMainWrapper}>
      <View style={styles.upBox}>
        <Text style={{fontSize:width/10,color:"#6001D1"}}>toDaily</Text>
      </View>
        <View style={styles.downBox}>
          <View style={styles.mailWrapper}>
              <TextInput onChangeText={setEmail} value={email} style={{width:"100%",color:"#6001D1"}} placeholder='E-Mail Adresinizi Girin'  placeholderTextColor={"#6001D1"}></TextInput>
          </View>
          <View style={styles.passwordWrapper}>
              <TextInput onChangeText={setPassword} value={password} secureTextEntry={true} style={{width:"100%",color:"#6001D1"}} placeholder='Şifrenizi Girin'  placeholderTextColor={"#6001D1"}></TextInput>
          </View>
          <View style={styles.passwordWrapper}>
              <TextInput onChangeText={setRepassword} value={repassword} secureTextEntry={true} style={{width:"100%",color:"#6001D1"}} placeholder='Şifrenizi Tekrar Girin' placeholderTextColor={"#6001D1"}></TextInput>
          </View>
          <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={signUp} style={{backgroundColor:"#6001D1",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:1,borderColor:"white"}}>
                  <Text style={{color:"white"}}>Kayıt Ol</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={()=>Navigation.goBack()} style={{backgroundColor:"white",borderWidth:1,borderColor:"#6001D1",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10}}>
                  <Text style={{color:"#6001D1"}}>Geri Dön</Text>
              </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Sign

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
  backgroundColor:"#6001D1",
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
    margin:5
}
})