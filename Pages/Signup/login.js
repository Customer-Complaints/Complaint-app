import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpPage from "./signup";

export function LoginPage({ navigation }) {
    const [textName, setTextName] = React.useState(null);
    const [textMail, setTextMail] = React.useState(null);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View
                style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <View style={styles.headerName}>
                    <Image
                        style={styles.hdLogo}
                        source={require("../../assets/voice_logo.jpg")}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Voice Out App
                    </Text>
                </View>

                <View style={styles.titlePge}>
                    <Text style={{ color: '#666666', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
                </View>

                <View style={styles.loginFrm}>
                    {/* <View style={styles.loginDetails}> */}
                    <TextInput
                        style={styles.loginDetails}
                        onChangeText={setTextName}
                        placeholder="Username"
                        value={textName}
                    />
                    {/* </View> */}

                    {/* <View style={styles.loginDetails}> */}
                    <TextInput
                        style={styles.loginDetails}
                        onChangeText={setTextMail}
                        placeholder="email"
                        value={textMail}
                    />
                    {/* </View> */}
                </View>

                <TouchableOpacity
                    onPress={() =>
                        alert(
                            "User has logged in \n" +
                                "Name : " +
                                textName +
                                "\nEmail : " +
                                textMail
                        )
                    }
                >
                    <View style={styles.loginBtn}>
                        <Text style={{ color: "#fff", fontWeight: 'bold'}}>Login button</Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={alert("You have logged with Gmail")}>
                <View style={styles.loginAuth}>
                    <Text>Login GoogleOAuth</Text>
                </View>
            </TouchableOpacity> */}

                <TouchableOpacity
                    onPress={() => navigation.navigate("Sign Up")}
                >
                    <View style={styles.signupBtn}>
                        <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15}}>New User</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function SignUpNav() {
    return <SignUpPage />;
}

const Stack = createStackNavigator();

export default function LoginNav() {
    return (
        // <NavigationContainer>
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
        </Stack.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    headerName: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-start',
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 50,
    },
    hdLogo: {
        height: 60,
        width: 60,
        marginRight: 5,
    },
    titlePge: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
    loginFrm: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 50
    },
    loginDetails: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "rgba(160, 160, 160, 1)",
        margin: 5,
        padding: 10,
    },
    loginBtn: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 100,
        backgroundColor: "cyan",
        borderRadius: 5,
        marginTop: 20,
    },
    loginAuth: {
        justifyContent: "center",
        alignItems: "center",
    },
    signupBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
});
