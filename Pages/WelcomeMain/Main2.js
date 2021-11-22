import * as React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import { createStackNavigator } from "@react-navigation/stack";

import {
    ComplaintPage,
    RatingPage,
    CustComplaintPage,
} from "../../Navigation/Navigation";
import retailComplaints from "../Complaints/Categories/retail";
import transportComplaints from "../Complaints/Categories/transport";
import bankingComplaints from "../Complaints/Categories/banking";
import foodComplaints from "../Complaints/Categories/food";
import telecomComplaints from "../Complaints/Categories/telecom";
import hotelComplaints from "../Complaints/Categories/hotel";
import medicalComplaints from "../Complaints/Categories/medical";
import gvtComplaints from "../Complaints/Categories/government";

export function MainHomePage({ navigation }) {
    const [items, setItems] = React.useState([
        { name: "Retail", icon: "card", page: "Retail" },
        { name: "Transport", icon: "bus", page: "Transport" },
        { name: "Banking", icon: "card", page: "Banking" },
        { name: "Food", icon: "pizza", page: "Food" },
        { name: "Automotive", icon: "car", page: "Transport" },
        { name: "Internet & Tech", icon: "wifi", page: "Internet" },
        { name: "Travel", icon: "bus", page: "Transport" },
        { name: "Hotel", icon: "bed", page: "Hotel" },
        { name: "Medical", icon: "medical", page: "Medical" },
        { name: "Govt", icon: "business", page: "Government" },
    ]);

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
                            source={require("../../assets/voice_logo.jpg")}
                        />
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Voice Out App
                        </Text>
                    </View>

                    <View style={styles.ccomplaints}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Complaint Page")
                            }
                        >
                            <Text style={styles.ccomplaints_text}>
                                What is everyone saying?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Rating Page")}
                        >
                            <Text style={styles.ccomplaints_text}>
                                Rate & Leave a complaint
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.catServices}>
                        <View style={{ alignSelf: "flex-start" }}>
                            <Text style={{ marginLeft: 15 }}>
                                Service by Category
                            </Text>
                        </View>

                        <View
                            style={{ width: "100%", justifyContent: "center" }}
                        >
                            <FlatGrid
                                itemDimension={90}
                                data={items}
                                spacing={5}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate(item.page) +
                                            ToastAndroid.show(
                                                "Selected " +
                                                    item.name,
                                                    ToastAndroid.SHORT,
        ToastAndroid.CENTER,
                                            )
                                        }
                                    >
                                        <View style={styles.itemContainer}>
                                            <View
                                                style={
                                                    styles.itemContainerItems
                                                }
                                            >
                                                <Ionicons
                                                    name={item.icon}
                                                    size={50}
                                                    color="#808080"
                                                />
                                                <Text
                                                    style={{
                                                        textAlign: "center",
                                                        color: "#0d98ba",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const Stack = createStackNavigator();

export default function MainPage2() {
    return (
        <Stack.Navigator initialRouteName={"Home Page"}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home Page"
                component={MainHomePage}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Complaint Page"
                component={ComplaintPage}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Rating Page"
                component={RatingPage}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Customer Comp Page"
                component={CustComplaintPage}
            />

            <Stack.Screen
                options={{ headerShown: true }}
                name="Retail"
                component={retailComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Transport"
                component={transportComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Banking"
                component={bankingComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Food"
                component={foodComplaints}
            />

            <Stack.Screen
                options={{ headerShown: true }}
                name="Internet"
                component={telecomComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Hotel"
                component={hotelComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Medical"
                component={medicalComplaints}
            />
            <Stack.Screen
                options={{ headerShown: true }}
                name="Government"
                component={gvtComplaints}
            />
        </Stack.Navigator>
    );
}

// make changes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
    ccomplaints: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: "85%",
        height: "10%",
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, .7)",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginVertical: 15,
        // backgroundColor: 'blue'
    },
    ccomplaints_text: {
        alignSelf: "flex-start",
        fontSize: 20,
        fontWeight: "800",
        color: "#0d98ba",
        marginLeft: 10,
        padding: 5,
    },
    catServices: {
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        height: "60%",
        marginVertical: 15,
        // backgroundColor: 'green'
    },
    servicesList: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, .7)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginVertical: 10,
    },
    itemContainerItems: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});
