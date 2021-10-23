import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage2 from "../Pages/WelcomeMain/Main2";
import Complaints from "../Pages/Complaints";
import Rating from "../Pages/Rating";
import MviewApp from "../Pages/WelcomeMain/Mview";
import LoginPage from "../Pages/Signup/login";
// import { NativeRouter, Route, Link} from '@types/react-router-native';





function NaviTab({ navigation }) {
    return (
        <>
            <LoginPage/>
            {/* <MainPage2 /> */}

            
            <View style={styles.navcontainer}>
                {/* <Text>
        Navigation Router Here
    </Text> */}

                <View style={styles.navicons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="home" size={20} color="#808080" />
                            home
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Complaint Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons
                                name="bookmark"
                                size={20}
                                color="#808080"
                            />
                            home
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Rating Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons
                                name="newspaper"
                                size={20}
                                color="#808080"
                            />
                            home
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Settings Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="star" size={20} color="#808080" />
                            home
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

function HomePage({ navigation }) {
    return <MainPage2 />;
}

function ComplaintPage() {
    return <Complaints />;
}

function RatingPage() {
    return <Rating />;
}

function SettingPage() {
    return <MviewApp />;
}

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={["Home Page", "Navi Tab"]}>
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Navi Tab"
                    component={NaviTab}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Home Page"
                    component={HomePage}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Complaint Page"
                    component={ComplaintPage}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Rating Page"
                    component={RatingPage}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Settings Page"
                    component={SettingPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    navcontainer: {
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#fff",
        bottom: 0,
        padding: 5,
        position: "fixed",
        shadowColor: "rgba(0, 0, 0, .3)",
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    navicons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
