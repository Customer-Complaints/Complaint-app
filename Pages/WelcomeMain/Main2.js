import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatGrid } from 'react-native-super-grid';


export default function MainPage2(){

    const [items, setItems] = React.useState([
        { name: 'Retail', icon : 'card'},
        { name: 'Consumer Goods', icon : 'bus'},
        { name: 'Banking', icon : 'bed'},
        { name: 'Food', icon : 'pizza'},
        { name: 'Automotive', icon : 'car'},
        { name: 'ISP', icon : 'card'},
        { name: 'Travel', icon : 'bus'},
        { name: 'Hotel', icon : 'bed'},
        { name: 'Medical', icon : 'pizza'},
        { name: 'Govt', icon : 'car'}
    ]);

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Nav Tab</Text>
            </View>

            <View style={styles.ccomplaints}>
                <Text style={styles.ccomplaints_title}>Complain</Text>
                <Text>Leave a complaint</Text>
                <Text>View other complaints</Text>
                <Text>Rate a Service</Text>
            </View>

            <View style={{alignSelf: 'flex-start'}}>
                <Text>Service by Category</Text>
            </View>

            <View style={styles.catServices}>
                <FlatGrid
                    itemDimension ={100}
                    data={items}
                    spacing = {10}
                    renderItem = {({item}) => (
                        <View style={styles.itemContainer}>
                            <Ionicons name={item.icon} size={60} color='#808080'/>
                            <Text style={{textAlign: 'center'}}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ccomplaints: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        width: 300,
        marginVertical: 15,
    },
    ccomplaints_title: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    catServices: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        width: 350,
        marginVertical: 15,
    },
    servicesList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }
})