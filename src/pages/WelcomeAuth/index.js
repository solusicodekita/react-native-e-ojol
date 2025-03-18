import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ActionButton = ({desc,title}) =>{
    return(
        <View style={{marginBottom:43,maxWidth:225}}>
            <Text style={{ fontSize:10, color:'#7e7e7e' }}>
                {desc}</Text>
            <TouchableOpacity 
            style={{
                backgroundColor:'#A55EEA',
                borderRadius : 25,
                paddingVertical : 13,
            }}>
                <Text 
                style={{
                    fontSize:12,
                    fontWeight: 'bold',
                    color : 'white',
                    textTransform : 'uppercase',
                    textAlign : 'center',
                }}
                >{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const WelcomeAuth = () => {
    return(
        <View style={{alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'white'}}>
            <View style={{width : 219,height:117,backgroundColor : '#A55EEA',marginBottom:10}} />
            <Text style={{ fontSize:10, fontWeight:'bold', color:'#A55EEA',marginBottom:76}}
            >Selamat Datang di E-Ojol
            </Text>
            <ActionButton desc='Silahkan masuk, jika anda sudah memiliki akun' title="masuk" />
            <ActionButton desc='atau silahkan daftar jika anda belum memiliki akun' title="Daftar"/>
        </View>
    );
}

export default WelcomeAuth;