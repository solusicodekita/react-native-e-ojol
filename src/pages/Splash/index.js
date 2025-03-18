import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 2000);
    }, [navigation]); // Tambahkan dependency array untuk menghindari looping tak terbatas

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;
