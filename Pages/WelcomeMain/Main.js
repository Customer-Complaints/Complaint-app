import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {FlatGrid} from 'react-native-super-grid';


export default function MainPage(){

    const [items, setItems] = React.useState([
        { name: 'TURQUOISE'},
        { name: 'EMERALD'},
        { name: 'PETER RIVER'},
        { name: 'AMETHYST'},
        { name: 'WET ASPHALT'},
        { name: 'GREEN SEA'}
    ]);

    const [reviews, setReviews] = React.useState([
        { name: 'John. A', retailNme: 'SupaTronix', complaint: 'Quality of goods is not on par. Definetely not satisfied.'},
        { name: 'Anold. A', retailNme: 'Trader Point', complaint: 'Definetely not satisfied.'},
        { name: 'JUser. A', retailNme: 'One Switch', complaint: 'Customer Service needs improvements'},
        { name: 'User. A', retailNme: 'PnP', complaint: 'Did not get my refund after returning some default goods'},
        { name: 'John. A', retailNme: 'SupaTronix', complaint: 'Quality of goods is not on par. Definetely not satisfied.'},
        { name: 'Anold. A', retailNme: 'Trader Point', complaint: 'Definetely not satisfied.'},
        { name: 'JUser. A', retailNme: 'One Switch', complaint: 'Customer Service needs improvements'},
        { name: 'User. A', retailNme: 'PnP', complaint: 'Did not get my refund after returning some default goods'},
    ]);

    const [srchBar, setSrchBar] = React.useState(null);
    
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.navtitle}>
                <Text>Main Page</Text>
                <View style={styles.searchBar}>
                    <View style={{paddingHorizontal: 10}}>
                        <Ionicons name='search-outline' size={16} color='#161616' />
                    </View>
                    <TextInput
                        onChangeText={setSrchBar}
                        value={srchBar}
                        placeholder='Search'
                    /> 
                </View>
            </View>

            <View style={styles.catMenu}>
                <Text>Category List</Text>
                <View style={styles.catList}>
                    <FlatGrid
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        spacing={10}
                        renderItem={({ item }) => (
                          <View style={styles.itemContainer}>
                            <Text style={styles.itemName}><Ionicons name='add' size={16}/>{item.name}</Text>
                          </View>
                        )}
                    />
                    <View>
                        <Text style={[styles.itemName, styles.itemContainer]}><Ionicons name='add' size={16}/>More</Text>
                    </View>
                </View>
            </View>

            <View style={styles.consuMenu}>
                <Text style={{color: '#666666', fontSize: 16, fontWeight: 'bold'}}>Consumer Review List</Text>
                <View style={{width: '90%', marginTop: 20}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.consMenuList}>
                            <FlatList
                                itemDimension={130}
                                data={reviews}
                                // staticDimension={300}
                                // fixed
                                spacing={10}
                                renderItem={({ item }) => (
                                    <View style={styles.reviewContainer}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={{color: '#666666', fontSize: 16, fontWeight: 'bold'}}>{item.retailNme}</Text>
                                        <Text style={{color: '#191919', fontSize: 16}}>{item.complaint}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.bottomNav}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    navtitle:{
        backgroundColor: 'rgba(255, 0, 0, 1)',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomNav:{
        backgroundColor: 'rgba(255, 0, 0, 1)',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '75%',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    catMenu:{
        width: '100%',
        height: '37%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    catList:{
        backgroundColor: '#fff',
        width: '90%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    consuMenu:{
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    consMenuList:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        borderColor: 'rgba(0, 100, 255, 1)',
        borderWidth: 2,
        padding: 10,
        height: 45,
    },
    reviewContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 100, 255, 1)',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
        color: 'rgba(0, 100, 255, 1)',
        fontWeight: 'bold',
    }
});