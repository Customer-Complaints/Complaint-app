import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CustomerRevs(){
    return(
        <SafeAreaView style={styles.container}></SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})