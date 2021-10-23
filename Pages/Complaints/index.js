import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { complaintData } from "../Components/Complaints/complaintData";

export default function Complaints() {
    return (
        <SafeAreaView style={styles.container}>
            {complaintData.map((item, index) => (
                <View style={styles.complaintCard}>
                    <View style={styles.row1}>
                        <Text style={styles.textName}>{item.cName}</Text>
                        <Text style={{color: 'orange'}}>{item.ratings}</Text>
                    </View>

                    <View style={styles.row2}>
                        <Text style={styles.textName}>{item.retailName} - </Text>
                        <Text style={{color: 'rgba(0, 100, 255, 1)'}}>Department</Text>
                    </View>

                    <View style={styles.row3}>
                        <Text>{item.compMsg}</Text>
                    </View>
                </View>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
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
        color: '#333333',
        fontWeight: 'bold'
    }
});
