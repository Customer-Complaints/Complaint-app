import * as React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "../../firebase";

const colors = {
    orange: "#ffba5a",
    grey: "#a9a9a9",
};

export default function Rating() {
    const [userNme, setUserNme] = React.useState();
    const [retailNme, setRetailNme] = React.useState();
    const [textSubject, setTextSubject] = React.useState();
    const [textResponse, setTextResponse] = React.useState('');
    const uploadTime = new Date();

    const [defaultRating, setDefaultRating] = React.useState(0);
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);

    const starImgFilled =
        "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
    const starImgCorner =
        "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}
                        >
                            <Image
                                style={styles.starImgStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImgFilled }
                                        : { uri: starImgCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const ratingFdback = defaultRating; 

    // give database collection name
    const fDB_LOCATION = "complaints";

    const toFireDB = () => {
        firestore
            .collection(fDB_LOCATION)
            .add({
                name: userNme,
                retailName: retailNme,
                stars: defaultRating,
                complaintMsg: textSubject,
                complaintDate: uploadTime,
                adminResponse: textResponse
            })
            .then(() => {
                console.log("Complaint Sent"), alert("Complaint Sent");
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
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

                <Text>Customer Complaint and Ratings</Text>

                <View style={{ width: "80%" }}>
                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            justifyContent: "center",
                            alignSelf: "flex-start",
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: "rgba(160, 160, 160, 1)",
                            paddingHorizontal: 10,
                        }}
                    >
                        <TextInput
                            style={{
                                color: "rgba(50, 50, 50, 1)",
                                fontSize: 18,
                                fontWeight: "700",
                            }}
                            onChangeText={setUserNme}
                            value={userNme}
                            placeholder="Customer Name"
                        />
                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            justifyContent: "center",
                            alignSelf: "flex-start",
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: "rgba(160, 160, 160, 1)",
                            paddingHorizontal: 10,
                            marginTop: 10,
                        }}
                    >
                        <TextInput
                            style={{
                                color: "rgba(50, 50, 50, 1)",
                                fontSize: 18,
                                fontWeight: "700",
                            }}
                            onChangeText={setRetailNme}
                            value={retailNme}
                            placeholder="Retail Name"
                        />
                    </View>

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
                            onChangeText={setTextSubject}
                            placeholder="Message"
                            value={textSubject}
                            maxLength={180}
                            multiline
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        <View style={{ alignSelf: "flex-start" }}>
                            <CustomRatingBar />
                        </View>

                        <View style={{ fontSize: 20 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "rgba(100, 100, 100, 1)",
                                }}
                            >
                                {ratingFdback}
                            </Text>
                        </View>
                    </View>

                    <View style={{}}>
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
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "35%",
                                    height: 50,
                                    backgroundColor: "#0d98ba",
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
                            {console.log(
                                "Stars : " +
                                    defaultRating +
                                    "\nRetail" +
                                    retailNme
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
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
    buttonStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "35%",
        height: "10%",
        backgroundColor: "cyan",
        borderRadius: 5,
        bottom: "45%",
    },
    // loginDetails: {
    //     width: 300,
    //     height: 200,
    //     borderWidth: 2,
    //     borderRadius: 5,
    //     borderColor: "rgba(160, 160, 160, 1)",
    //     marginTop: 5,
    //     padding: 10
    // }
});
