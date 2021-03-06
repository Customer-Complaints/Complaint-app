import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import LoginPage from "./login";
import { auth } from "../../firebase";

export default function SignUpPage({ navigation }) {
    const [textName, setTextName] = React.useState(null);
    const [textMail, setTextMail] = React.useState(null);
    const [textPass, setTextPass] = React.useState(null);

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(textMail, textPass)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('User successfuly registered as : ',user.textMail);
            })
            .catch((error) => alert('Failed to register'));
    };

    const signupAlert = () =>
        Alert.alert("Sign Up", "New User Sign Up in progress", [
            {
                text: "Okay",
                onPress: () => console.log("You Managed to signUp"),
                style: "OK",
            },
        ]);

    const signupGglAlert = () =>
        Alert.alert("Sign Up", "Signing Up with Google", [
            {
                text: "Okay",
                onPress: () => console.log("You Signed Up with Google"),
                style: "OK",
            },
        ]);

    const bckLoginAlert = () =>
        Alert.alert("Already Have an account", "Back to Login", [
            {
                text: "Okay",
                onPress: () => console.log("You went back to Login"),
                style: "OK",
            },
        ]);

        
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
                        Sign Up
                    </Text>
                </View>

                <View style={styles.loginFrm}>

                    <View style={styles.loginDetails}>
                        <TextInput
                            onChangeText={setTextMail}
                            placeholder="Email"
                            value={textMail}
                        />
                    </View>

                    <View style={styles.loginDetails}>
                        <TextInput
                            onChangeText={setTextPass}
                            placeholder="Password"
                            value={textPass}
                        />
                    </View>
                </View>

                <View style={styles.loginBtn}>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text>Already have an account</Text>

                <View style={styles.signupBtn}>
                   
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login Page")}
                    >
                        <Text style={{ color: "#fff",fontWeight: "bold" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        padding: 30,
    },
    loginFrm: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
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
        margin: 10,
        marginBottom: 50,
    },
    loginAuth: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-end",
        margin: 40,
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
