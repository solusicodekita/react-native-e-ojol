import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils";
import { Button } from "../../components";
const ActionButton = ({desc,title}) =>{
    return(
        <View style={style.wrapper.component}>
            <Text style={style.text.desckripsi}>
                {desc}</Text>
                <Button title={title} />
        </View>
    );
};
const style = {
    wrapper : {
        component : {
            marginBottom:43,
            maxWidth:225
        },
    },
    text: {
        desckripsi: {
            fontSize:10,
            color:colors.text.default,
            textAlign : 'center',
            paddingHorizontal : '15%',
            marginBottom : 6
        }
    }
}

export default ActionButton;