import React from "react";
import { StyleSheet, Picker, Text, View } from "react-native";
import { ServiceProviderList } from "./servicePList";

export const PickerComp = () => {
    const [selectedValue, setSelectedValue] = React.useState("Retail");

    return (
        <View style={styles.container}>
            <Picker
                setSelectedValue={setSelectedValue}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
            >
                {/* {ServiceProviderList.map((item, index) => {
                    <Picker.Item label={item.sPName} value={item.value} />;
                })} */}

                <Picker.Item label="Retail" value="retail" />;
                <Picker.Item label="Food" value="food" />;
                <Picker.Item label="Transport" value="transport" />;
                <Picker.Item label="Internet Provider" value="isp" />;
                <Picker.Item label="Medical" value="medical" />;
                <Picker.Item label="Government" value="gvt" />;
            </Picker>
        </View>
    );
};

export default PickerComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
