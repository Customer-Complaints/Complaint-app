import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage, { SignUpNav } from "./Pages/Signup/login";
import {
    NaviTab,
    HomePage,
    ComplaintPage,
    CustComplaintPage,
    RatingPage,
    SettingPage,
} from "./Navigation/Navigation";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login Page"}>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login Page"
                    component={LoginPage}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Sign Up"
                    component={SignUpNav}
                />
                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home App Nav"
                    component={Navigation}
                /> */}
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Navi Tab"
                    component={NaviTab}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home Page"
                    component={HomePage}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Complaint Page"
                    component={ComplaintPage}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Rating Page"
                    component={RatingPage}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Settings Page"
                    component={CustComplaintPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
