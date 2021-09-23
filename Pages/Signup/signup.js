import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function SignUpPage(){

    const [textName, setTextName] = React.useState(null);
    const [textMail, setTextMail] = React.useState(null);
    const [textPass, setTextPass] = React.useState(null);

    const signupAlert = () =>
        Alert.alert(
            'Sign Up',
            'New User Sign Up in progress',
            [
                {text:'Okay',
                    onPress:()=> console.log('You Managed to signUp'),
                    style: 'OK'
                }
            ]
        );

    const signupGglAlert = () =>
        Alert.alert(
            'Sign Up',
            'Signing Up with Google',
            [
                {text:'Okay',
                    onPress:()=> console.log('You Signed Up with Google'),
                    style: 'OK'
                }
            ]
        );
        
    const bckLoginAlert = () =>
        Alert.alert(
            'Already Have an account',
            'Back to Login',
            [
                {text:'Okay',
                    onPress:()=> console.log('You went back to Login'),
                    style: 'OK'
                }
            ]
        );
    
        return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={{justifyContent: 'flex-start', alignItems:'center', height: '100%', width: '100%'}}>
                <View style={styles.headerName}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nam Consumer</Text>
                </View>
            
            <View style={styles.titlePge}>
                <Text>New user SignUp</Text>
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
                        placeholder='Email'
                        value={textMail}
                    />
                </View>

                <View style={styles.loginDetails}>
                    <TextInput
                        onChangeText={setTextPass}
                        placeholder='Password'
                        value={textPass}
                    />
                </View>
            </View>

            <View style={styles.loginBtn}>
                <TouchableOpacity onPress={signupAlert}>
                    <Text  style={{color: '#fff'}}>SignUp</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginAuth}>
                <TouchableOpacity onPress={signupGglAlert}>
                    <Text>SignUp with Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signupBtn}>
                <Text>Already have an account</Text>
                <TouchableOpacity onPress={bckLoginAlert}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    titlePge:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    loginFrm:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
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
        margin: 10
    },
    loginAuth:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-end',
        margin: 40
    },
    signupBtn:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 50
    }
})