import { SafeAreaView, StyleSheet, Text, View ,ScrollView,Button,Dimensions} from 'react-native'
import React, { useState ,useEffect} from 'react'
import FloatingButton from '../components/FloatingButton'
import ModalContent from '../components/ModalContent'

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../myTools/parseContentData';
import { useRoute } from '@react-navigation/native';
import DailyCard from '../components/DailyCard';
import HeaderBar from '../components/HeaderBar';
import InfoCard from '../components/InfoCard';

const {width,height}=Dimensions.get("screen");

const ListScreen = () => {

    const [visible,setVisible]=useState(false);
    const [todoContent,setTodoContent]=useState("");
    const [contentList,setContentList]=useState([]);

    const Route=useRoute();
    //const equalValue=Route.params.username;
    


    const changeModalVisible=()=>{
        console.log("---------")
        console.log(visible)
        setVisible(!visible);
        console.log(visible) ;
    }

    //Modaldan gönderilen metini yakalayan fonksiyon
    const handleSendContent=(content)=>{
        console.log(content)
        setTodoContent(content);

        const userMail=auth().currentUser.email;
        console.log(userMail);

        const dailyDataObject={
          text:content,
          username:userMail,
          date:new Date().toISOString()
        }

        console.log(dailyDataObject);

        database().ref('Dailies/').push(dailyDataObject);
    }    

    useEffect(()=>{
      const equalValue=auth().currentUser.email;//Kullanıcı giriş yapmışşa onun username(email) göre altta kayıtları çektirdik
      database()
        .ref('Dailies/')
        .orderByChild('username').equalTo(equalValue)
        .on('value',snapshot=>{
          const contentData=snapshot.val();
          const parseData=parseContentData(contentData || {});//Kendi oluşturduğum array formatına çevirdim ve sort ettim.contentData null ise boş obje gönderdim.********
          setContentList(parseData);//state'e ekledim.database().ref('users').orderByChild('age').startAt(21).once('value');
        })
    },[]);

  return (
    <SafeAreaView style={styles.listScreenMainWrapper}>
      <FloatingButton visibleState={changeModalVisible} ></FloatingButton>
      <ModalContent onSend={handleSendContent} visibleState={changeModalVisible} isVisible={visible}></ModalContent>
      <ScrollView style={{zIndex: -1}}>
        <HeaderBar></HeaderBar>
        {
          !contentList.length 
            ?  <InfoCard></InfoCard> 
            :  contentList.map((contentValue)=>(
                <DailyCard key={contentValue.id} dailyKey={contentValue.id} dailyContent={contentValue.text}></DailyCard>
                ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    listScreenMainWrapper:{
        flex:1,
    }
})