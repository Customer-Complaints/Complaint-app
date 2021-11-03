import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "../../../../../firebase";

const PopUp = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.popUpBG}>
                <Animated.View style={styles.popUpContainer}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const AdminResponse = () => {
    const [visible, setVisible] = React.useState(false);
    const [textResponse, setTextResponse] = React.useState();


    const fDB_LOCATION = "complaints";

    const toFireDB = () => {
        firestore
            .collection(fDB_LOCATION)
            .doc()
            .update({
                adminResponse: textResponse
            })
            .then(() => {
                console.log("Response Sent"), alert("Complaint Response Sent");
            });
    };

    // const toFireDB = () => {};

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <PopUp visible={visible}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.hdClose}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Ionicons name="close-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text
                    style={{
                        marginVertical: 30,
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Admin response to complaint.
                </Text>

                <View
                    style={{
                        width: "100%",
                        height: "40%",
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: "rgba(160, 160, 160, 1)",
                        padding: 10,
                        marginTop: 10,
                    }}
                >
                    <TextInput
                        style={{ color: "rgba(50, 50, 50, 1)" }}
                        onChangeText={setTextResponse}
                        placeholder="Response"
                        value={textResponse}
                        maxLength={180}
                        multiline
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    // style={styles.buttonStyle}
                    style={{
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "flex-start",
                        marginTop: 20,
                    }}
                    onPress={toFireDB}
                    // onPress={()=>alert('Response Sent : \n' + textResponse)}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            width: "35%",
                            height: 50,
                            backgroundColor: "cyan",
                            borderRadius: 5,
                            bottom: 0,
                            padding: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Send
                        </Text>

                        <Ionicons
                            name="send"
                            size={30}
                            color="#fff"
                            style={{ paddingLeft: 10 }}
                        />
                    </View>
                    {/* {console.log(
                        "Stars : " + defaultRating + "\nRetail" + retailNme
                    )} */}
                </TouchableOpacity>
            </PopUp>

            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.replyBtn}
            >
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
                {/* <Ionicons name="albums-outline" size={30} color="#52575D"/> */}
            </TouchableOpacity>
        </View>
    );
};

export default AdminResponse;

const styles = StyleSheet.create({
    popUpBG: {
        flex: 1,
        backgroundColor: "rgba(50, 70, 200, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    replyBtn: {
        width: "30%",
        marginTop: 5,
        padding: 7,
        borderRadius: 5,
        backgroundColor: "rgba(0, 100, 255, 1)",
    },
    popUpContainer: {
        width: "80%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    hdClose: {
        width: "100%",
        height: 40,
        alignItems: "flex-end",
        justifyContent: "center",
    },
});
