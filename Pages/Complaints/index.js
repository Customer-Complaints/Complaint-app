import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, View, Image} from "react-native";
import { complaintData } from "../Components/Complaints/complaintData";

export default function Complaints() {
    return (
        <SafeAreaView style={styles.container}>
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

                <ScrollView>
                    {complaintData.map((item, index) => (
                        <View style={styles.complaintCard}>
                            <View style={styles.row1}>
                                <Text style={styles.textName}>
                                    {item.cName}
                                </Text>
                                <Text style={{ color: "orange" }}>
                                    {/* <CustomRatingStars/> */}
                                    {item.ratings}
                                </Text>
                            </View>

                            <View style={styles.row2}>
                                <Text style={styles.textName}>
                                    {item.retailName} -{" "}
                                </Text>
                                <Text style={{ color: "rgba(0, 100, 255, 1)" }}>
                                    Department
                                </Text>
                            </View>

                            <View style={styles.row3}>
                                <Text>{item.compMsg}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "50%",
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
    complaintCard: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, .7)",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    row1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
    },
    row2: {
        flexDirection: "row",
        paddingTop: 5,
    },
    row3: {
        paddingTop: 5,
    },
    textName: {
        color: "#333333",
        fontWeight: "bold",
    },
});
