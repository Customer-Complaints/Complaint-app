import * as React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Select, { SelectItem } from "@redmin_delishaj/react-native-select";
import { firestore, firestorage, firebaseApp } from "../../firebase";
import { NaviBottomTab } from "../../Navigation/NavDrawer";

// Can you run it on your phone. Try to take a picture in the cmplaint section
const colors = {
    orange: "#ffba5a",
    grey: "#a9a9a9",
};

export default function Rating() {
    if (!firebaseApp.apps.length) {
        firebaseApp.initializeApp(firebaseConfig);
    }

    const [userNme, setUserNme] = React.useState();
    const [retailNme, setRetailNme] = React.useState();
    const [textSubject, setTextSubject] = React.useState();
    const [textResponse, setTextResponse] = React.useState(
        "🔴 No Response from Service Provider"
    );

    const [image, setImage] = React.useState("");

    const [uploading, setUploading] = React.useState(false);

    const uploadTime = new Date();

    // Dropdown
    const selectData = [
        { text: "Retail", value: "Retail" },
        { text: "Transport", value: "Transport" },
        { text: "Banking", value: "Banking" },
        { text: "Food", value: "Food" },
        { text: "Automotive", value: "Automotive" },
        { text: "Internet & Tech", value: "Internet & Tech" },
        { text: "Travel", value: "Travel" },
        { text: "Hotel", value: "Hotel" },
        { text: "Medical", value: "Medical" },
        { text: "Govt", value: "Govt" },
    ];

    const config = {
        fontSize: 15,
        backgroundColor: "white",
        textColor: "#404040",
        selectedBackgroundColor: "white",
        selectedTextColor: "#0d98ba",
        selectedFontWeight: "bold",
        borderWidth: 2,
        borderColor: "rgba(160, 160, 160, 1)",
    };

    const [selectedItem, setSelectedItem] = React.useState();

    // Rating
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

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [5, 6],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestCameraPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Sorry, we need camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    // give database collection name
    const fDB_LOCATION = "complaints";

    const toFireDB = async () => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(new TypeError("Network is slow"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", image, true);
            xhr.send(null);
        });

        const storageRef = firestorage
            .ref("complaint_files")
            .child(new Date().toISOString());
        const snapshot = storageRef.put(blob);

        snapshot.on(
            firebaseApp.storage.TaskEvent.STATE_CHANGED,
            () => {
                setUploading(true);
            },
            (error) => {
                setUploading(false);
                console.log(error);
                blob.close();
                return;
            },
            () => {
                snapshot.snapshot.ref.getDownloadURL().then((url) => {
                    setUploading(false);
                    console.log("download : ", url);
                    blob.close();
                    return url;
                });
            }
        );

        firestore
            .collection(fDB_LOCATION)
            .add({
                name: userNme,
                retailName: retailNme,
                retailCategory: selectedItem,
                stars: defaultRating,
                complaintMsg: textSubject,
                complaintDate: uploadTime,
                adminResponse: textResponse,
                complaintFile: `${storageRef}`,
            })
            .then(() => {
                console.log("Complaint Sent"),
                    ToastAndroid.showWithGravity(
                        "Complaint Sent",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
            });
    };

    return (
        <>
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
                                marginBottom: 10,
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

                        {/* <View> */}
                        <Select
                            data={selectData}
                            onSelect={(text) => setSelectedItem(text)}
                            value={selectedItem}
                            config={config}
                        />
                        {/* </View> */}
                        <View
                            style={{
                                width: "100%",
                                // height: 50,
                                justifyContent: "center",
                                alignSelf: "flex-start",
                                borderWidth: 2,
                                borderRadius: 5,
                                borderColor: "rgba(160, 160, 160, 1)",
                                paddingHorizontal: 10,
                                marginTop: 10,
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: 200,
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
                                    justifyContent: "space-around",
                                }}
                            >
                                <TouchableOpacity onPress={pickImage}>
                                    <View
                                        style={{
                                            // width: "40%",
                                            borderWidth: 2,
                                            borderRadius: 5,
                                            borderColor:
                                                "rgba(160, 160, 160, 1)",
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "rgba(100, 100, 100, 1)",
                                            }}
                                        >
                                            Attach file
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{}}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{ width: 50, height: 50 }}
                                    />
                                </View>
                            </View>
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
                            {!uploading ? (
                                <TouchableOpacity
                                    activeOpacity={0.7}
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
                                    {console.log(
                                        "Stars : " +
                                            defaultRating +
                                            "\nRetail" +
                                            retailNme
                                    )}
                                </TouchableOpacity>
                            ) : (
                                <ActivityIndicator size="large" color="#000" />
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>

            {/* <NaviBottomTab/> */}
        </>
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
    // },
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
