import * as React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "../../../firebase";
import { NaviBottomTab } from "../../../Navigation/NavDrawer";

const fDB_LOCATION = "complaints";

export default function telecomComplaints() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        firestore
            .collection("complaints")
            .orderBy("complaintDate", "desc")
            .where("retailCategory", "in", ["Telecom", "telecom", "Telecom ", "telecom "])
            .onSnapshot((querySnapshot) => {
                const users = [];

                querySnapshot.docs.forEach((doc) => {
                    const {
                        name,
                        retailName,
                        retailCategory,
                        stars,
                        complaintMsg,
                        adminResponse,
                    } = doc.data();
                    users.push({
                        name,
                        retailName,
                        retailCategory,
                        stars,
                        complaintMsg,
                        adminResponse,
                    });
                });
                setUsers(users);
            });
    }, []);

    return (
        <>
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
                            source={require("../../../assets/voice_logo.jpg")}
                        />
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Voice Out App
                        </Text>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        style={{ width: "90%", height: "100%" }}
                    >
                        {users.length > 0 ? (
                            users.map((user) => {
                                return (
                                    <View style={styles.complaintCard}>
                                        <View style={styles.row1}>
                                            <Text style={styles.textName}>
                                                {user.name}
                                            </Text>
                                        </View>

                                        <View style={styles.row2}>
                                            <Text
                                                style={{
                                                    color: "#0d98ba",
                                                }}
                                            >
                                                {user.retailCategory} -{" "}
                                            </Text>
                                            <Text style={styles.textDepartment}>
                                                {user.retailName}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.textName}>
                                                Rating :{" "}
                                                <Text
                                                    style={{ color: "orange" }}
                                                >
                                                    {user.stars}
                                                </Text>
                                            </Text>
                                        </View>

                                        <View style={styles.row3}>
                                            <Text>{user.complaintMsg}</Text>
                                        </View>

                                        <View style={styles.row4}>
                                            <Text
                                                style={{
                                                    height: 50,
                                                    fontWeight: "700",
                                                    color: "#fff",
                                                    paddingHorizontal: 5,
                                                }}
                                            >
                                                {user.adminResponse}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })
                        ) : (
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    No Complaints made in this section
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </SafeAreaView>

            {/* <NaviBottomTab/> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "50%",
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
    complaintCard: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginVertical: 5,
    },
    row1: {
        justifyContent: "center",
        paddingTop: 5,
    },
    row2: {
        flexDirection: "row",
        paddingTop: 5,
    },
    row3: {
        paddingTop: 5,
    },
    row4: {
        marginTop: 5,
        padding: 5,
        borderRadius: 3,
        backgroundColor: "#0d98ba",
    },
    textName: {
        color: "#333333",
        fontWeight: "bold",
    },
    textDepartment: {
        color: "#0d98ba",
        fontWeight: "bold",
    },
    customRatingBarStyle: {
        justifyContent: "center",
        flexDirection: "row",
        // marginTop: 30,
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: "cover",
    },
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
