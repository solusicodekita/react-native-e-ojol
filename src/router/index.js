import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register, Spalsh, WelcomeAuth } from "../pages";

const Stack = createStackNavigator();

const Router = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Spalsh" component={Spalsh} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth}
                                options={{ headerShown: false }}                                 />
        </Stack.Navigator>
    );
};

export default Router;