import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function LoginPage(){

    const [textName, setTextName] = React.useState(null);
    const [textMail, setTextMail] = React.useState(null);

    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.headerName}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nam Consumer</Text>
            </View>

            <View style={styles.titlePge}>
                <Text>Login</Text>
            </View>

            <View style={styles.loginFrm}>
                <View style={styles.loginDetails}>
                    <TextInput
                        onChangeText={setTextName}
                        placeholder='Username'
                        value={textName}
                    />
                </View>

                <View style={styles.loginDetails}>
                    <TextInput
                        onChangeText={setTextMail}
                        placeholder='email'
                        value={textMail}
                    />
                </View>
            </View>

            <View style={styles.loginBtn}>
                <Text  style={{color: '#fff'}}>Login button</Text>
            </View>

            <View style={styles.loginAuth}>
                <Text>Login GoogleOAuth</Text>
            </View>

            <View style={styles.signupBtn}>
                <Text>New User</Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    headerName:{
        justifyContent: 'center'
    },
    titlePge:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginFrm:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginDetails:{
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'rgba(160, 160, 160, 1)',
        margin: 5,
        padding: 10
    },
    loginBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100,
        backgroundColor: 'cyan',
        borderRadius: 5,
    },
    loginAuth:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupBtn:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})