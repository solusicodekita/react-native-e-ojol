import React from "react"
import { Text } from "react-native-gesture-handler"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors } from "../../../pages/utils";

const Button = ({title}) => {
    return (
        <TouchableOpacity
        style={style.wrapper.component}>
        <Text 
        style={style.text.judul}
        >{title}</Text>
    </TouchableOpacity>
    );
};

const style = {
    wrapper : {
        component : {
            backgroundColor : colors.default,
            borderRadius : 25,
            paddingVertical : 13,
        },
    },
    text : {
        judul : {
            fontSize:12,
            fontWeight: 'bold',
            color : 'white',
            textTransform : 'uppercase',
            textAlign : 'center',
        },
    },
};

export default Button;