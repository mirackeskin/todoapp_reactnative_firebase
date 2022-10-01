import { StyleSheet, Text, View,TextInput, TouchableOpacity,Dimensions,Alert} from 'react-native'
import React, { useEffect , useState} from 'react'
import Modal from "react-native-modal";

const {width,height}=Dimensions.get("screen");

const ModalContent = (props) => {
    const {isVisible,visibleState,onSend}=props;
    const [content,setContent]=useState("");

    const Send=(content)=>{
        if(content!=""){
         onSend(content)
         setContent("");
        }else{
         Alert.alert("Hay Aksi!Daily Alanı Boş Kaldı!","Hadi bugün neler yapacağımızı ekleyelim :) Sağ alttaki baloncuğa dokunduktan sonra açılan pencerede daily ekle yazısına tıklayın ve günlük dailylerinizi ekleyin :)",[{text: "Anladım",style: "cancel",}]);
        }        
    }

    const dailyDrop=()=>{
        //Bu metodun amacı modaldaki TextInput temizlenmeden kapatıldığında contenti boşaltmak ve aynı zamanda visibleState'yi değiştirmek.
        visibleState();
        setContent("");
    }
    
  return (
    <Modal onSwipeComplete={dailyDrop} swipeDirection={['left','right']} onBackdropPress={dailyDrop} onBackButtonPress={dailyDrop} isVisible={isVisible}>
        <View style={styles.modalContainer}>
            <TextInput onChangeText={setContent} style={styles.modalText} value={content} multiline  placeholder='Daily ekle' placeholderTextColor={"white"}></TextInput>
            <TouchableOpacity onPressOut={visibleState} onPress={()=>Send(content)} style={styles.modalButton}>
                <Text style={{color:"white",fontSize:20}}>Ekle</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

export default ModalContent

const styles = StyleSheet.create({
    modalContainer:{
        width:"100%",
        height:"50%",
        backgroundColor:"#6001D1",
        borderBottomRightRadius:50,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        justifyContent: "space-evenly",
        alignItems:"center",
        padding:20
    },
    modalText:{
        color:"white",
        fontSize:width/20,
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        width:"100%",
        margin:10,
    },
    modalButton:{
        backgroundColor:"#6001D1",
        width:"60%",
        height:40,
        borderRadius: 10,
        borderWidth:1,
        borderColor:"white",
        alignItems:"center",
        justifyContent:"center",
        margin:10,
    }
})