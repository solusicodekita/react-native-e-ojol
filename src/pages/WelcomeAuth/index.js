import React from "react";
import { Text, View, Image } from "react-native";
import ActionButton from "./ActionButton";
import { colors } from "../utils";
import { bgwelcome } from "../../assets";

const WelcomeAuth = ({ navigation }) => {
    const handleGotTo = (screen) => {
        console.log(screen);
        navigation.navigate(screen);
    };

    return (
        <View style={style.wrapper.pages}>
            <Image source={bgwelcome} style={style.wrapper.ilustration} />
            <Text style={style.wrapper.text.welcome}>
                Selamat Datang di E-Ojol
            </Text>
            <ActionButton 
                desc='Silahkan masuk, jika anda sudah memiliki akun' 
                title="Masuk"
                onPress={() => handleGotTo('Login')}
            />
            <ActionButton 
                desc='Atau silahkan daftar jika anda belum memiliki akun'
                title="Daftar"
                onPress={() => handleGotTo('Register')}
            />
        </View>
    );
};

const style = {
    wrapper: {
        pages: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        },
        ilustration: {
            width: 229,
            height: 270,
            marginBottom: 20,
        },
        text: {
            welcome: {
                fontSize: 10,
                fontWeight: 'bold',
                color: colors.default,
                marginBottom: 76
            },
        },
    },
};

export default WelcomeAuth;
