import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Picker, Text, TextInput, View, Image } from "react-native";

import PickerComp from '../../Components/Complaints/pickerComponet';

export default function CustomerComplaint() {
    const [textSubject, setTextSubject] = React.useState();
    const [textComplaint, setTextComplaint] = React.useState();

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
                        source={require("../../../assets/voice_logo.jpg")}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Voice Out App
                    </Text>
                </View>

                <View style={{justifyContent: "center", alignItems: "center", width: "85%", height:'10%', backgroundColor:'purple'}}>
                    <Text>Select Service Provider (Dropdown)</Text>
                    <PickerComp/>
                </View>

                <View style={{justifyContent: "center", width: "85%", height:'10%', backgroundColor:'blue'}}>
                    <View style={styles.loginDetails}>
                        <TextInput
                            onChangeText={setTextSubject}
                            placeholder="Subject"
                            value={textSubject}
                        />
                    </View>
                </View>

                <View style={{justifyContent: "center", width: "85%", height:'25%', backgroundColor:'red'}}>
                    {/* <Text>Complaint</Text> */}
                    <View style={[styles.loginDetails,{height: '90%'}]}>
                        <TextInput
                            onChangeText={setTextComplaint}
                            placeholder="Complaint"
                            value={textComplaint}
                            multiline
                            maxLength={180}
                            numberOfLines={5}
                        />
                    </View>
                </View>

                <View style={{justifyContent: "center", alignItems: "center", width: "85%", height:'5%', backgroundColor:'green'}}>
                    <Text>Send</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    loginDetails: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "rgba(160, 160, 160, 1)",
        marginTop: 5,
        padding: 10,
    },
});
