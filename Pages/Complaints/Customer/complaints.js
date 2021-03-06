import * as React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Image,
} from "react-native";
import { firestore } from "../../../firebase";
import AdminResponse from "./Admin/Components/AdminReply";

const fDB_LOCATION = "complaints";

export default function CustomerComplaint({userFetch}) {
    const [users, setUsers] = React.useState([]);

    const [textResponse, setTextResponse] = React.useState();

    const uploadTime = new Date();

    const fDB_LOCATION = "complaints";

    const toFireDB = (id, data) => {
        firestore
            .collection(fDB_LOCATION)
            .doc(user.id)
            .update({
                adminResponse: textResponse,
            })
            .then(() => {
                console.log("Response Sent"), alert("Complaint Response Sent");
            })
            .catch((error) => {
                alert("Failed to send \nTry sending again");
            });
    };

    React.useEffect(() => {
        firestore
            .collection("complaints")
            .orderBy("complaintDate", "desc")
            .onSnapshot((querySnapshot) => {
                const users = [];

                querySnapshot.docs.forEach((doc) => {
                    const { name, retailName, stars, complaintMsg, adminResponse } =
                        doc.data();
                    users.push({
                        name,
                        retailName,
                        stars,
                        complaintMsg,
                        adminResponse,
                    });
                });
                setUsers(users);
            });
    }, []);

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
                    {users.map((user) => {
                        return (
                            <View style={styles.complaintCard}>
                                <Text style={styles.textName}>
                                        Complaint ID : UID 
                                    </Text>
                                <View style={styles.row1}>
                                    <Text style={styles.textName}>
                                        {user.name}
                                    </Text>
                                    <Text style={styles.textName}>
                                        Rating :{" "}
                                        <Text style={{ color: "orange" }}>
                                            {user.stars}
                                        </Text>
                                    </Text>
                                </View>

                                <View style={styles.row2}>
                                    <Text style={styles.textDepartment}>
                                        {user.retailName} -{" "}
                                    </Text>
                                    <Text
                                        style={{
                                            color: "rgba(0, 100, 255, 1)",
                                        }}
                                    >
                                        Department
                                    </Text>
                                </View>

                                <View style={styles.row3}>
                                    <Text>{user.complaintMsg}</Text>
                                </View>

                                <View
                                    style={{
                                        width: "100%",
                                        // height: "20%",
                                        borderWidth: 2,
                                        borderRadius: 5,
                                        borderColor: "rgba(160, 160, 160, 1)",
                                        padding: 10,
                                        marginTop: 10,
                                    }}
                                >
                                    {/* <TextInput
                                        style={{ color: "rgba(50, 50, 50, 1)" }}
                                        onChangeText={setTextResponse}
                                        placeholder="Subject"
                                        value={textResponse}
                                        maxLength={180}
                                        multiline
                                    /> */}

                                    <TextInput
                                        key={user.adminResponse}
                                        style={{ color: "rgba(50, 50, 50, 1)" }}
                                        onChangeText={setTextResponse}
                                        placeholder={user.adminResponse}
                                        value={textResponse}
                                        maxLength={180}
                                        multiline
                                    />
                                </View>

                                <TouchableOpacity
                                    key={user.adminResponse}
                                    // onPress={() => alert(user.name)}
                                    onPress={toFireDB}
                                    style={styles.replyBtn}
                                >
                                    <View style={styles.row4}>
                                        <Text
                                            style={{
                                                color: "#fff",
                                                textAlign: "center",
                                                fontWeight: "bold",
                                                fontSize: 15,
                                            }}
                                        >
                                            Respond
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                {/* <AdminResponse/> */}
                            </View>
                        );
                    })}
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
    // row4: {
    //     width: '30%',
    //     marginTop: 5,
    //     padding: 5,
    //     backgroundColor: 'rgba(0, 100, 255, .5)'
    // },
    replyBtn: {
        width: "30%",
        marginTop: 5,
        padding: 7,
        borderRadius: 5,
        backgroundColor: "rgba(0, 100, 255, 1)",
    },
    textName: {
        color: "#333333",
        fontWeight: "bold",
    },
    textDepartment: {
        color: "rgba(0, 100, 255, 1)",
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
});
