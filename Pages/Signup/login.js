import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import { auth } from "../../firebase";

export default function LoginPage({navigation}) {
    const [textMail, setTextMail] = React.useState(null);
    const [textPass, setTextPass] = React.useState(null);

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(textMail, textPass)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("User successfuly logged in as : ", user.textMail);
            })
            .catch((error) => alert('Wrong credentials'));
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.push("Navi Tab");
            }
        });

        return unsubscribe;
    }, []);

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
                    <Text
                        style={{
                            color: "#0d98ba",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Text>
                </View>

                <View style={styles.loginFrm}>
                    {/* <View style={styles.loginDetails}> */}
                    <TextInput
                        style={styles.loginDetails}
                        onChangeText={setTextMail}
                        placeholder="Username email"
                        value={textMail}
                    />
                    {/* </View> */}

                    {/* <View style={styles.loginDetails}> */}
                    <TextInput
                        style={styles.loginDetails}
                        onChangeText={setTextPass}
                        placeholder="Password"
                        value={textPass}
                    />
                    {/* </View> */}
                </View>

                <TouchableOpacity onPress={handleLogin}>
                    <View style={styles.loginBtn}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.titlePge}>
                    <Text>Are you a New User</Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Sign Up")}
                >
                    <View style={styles.signupBtn}>
                        <Text
                            style={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: 15,
                            }}
                        >
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function SignUpNav() {
    return <SignUpPage />;
}

const Stack = createStackNavigator();

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
        alignSelf: "flex-start",
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
        marginTop: 100,
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
        backgroundColor: "#0d98ba",
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
        height: 40,
        width: 100,
        backgroundColor: "#0d98ba",
        borderRadius: 5,
        marginTop: 20,
    },
});
