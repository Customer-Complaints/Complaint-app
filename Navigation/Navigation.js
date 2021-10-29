import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainPage2 from "../Pages/WelcomeMain/Main2";
import Complaints from "../Pages/Complaints";
import CustomerComplaint from "../Pages/Complaints/Customer/complaints";
import Rating from "../Pages/Rating";
import MviewApp from "../Pages/WelcomeMain/Mview";
import PickerComp from "../Pages/Components/Complaints/pickerComponet";


export function NaviTab({ navigation}) {

    return (
        <>
            <MainPage2 />

            
            <View style={styles.navcontainer}>

                <View style={styles.navicons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="home" size={20} color="#808080" />
                            <Text>home</Text> 
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
                            <Text>Compl</Text>
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
                            <Text>Rate</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Settings Page")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="star" size={20} color="#808080" />
                            <Text>Rate</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export function HomePage({ navigation }) {
    return <MainPage2 />;
}

export function ComplaintPage() {
    return <Complaints />;
}

export function RatingPage() {
    return <Rating />;
}

export function SettingPage() {
    return <PickerComp/>;
}

export function CustComplaintPage(){
    return <CustomerComplaint/>
}

const styles = StyleSheet.create({
    navcontainer: {
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#fff",
        bottom: 0,
        padding: 5,
        // position: "fixed",
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
