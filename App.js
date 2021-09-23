import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginPage from './Pages/Signup/login';
import SignUpPage from './Pages/Signup/signup';
import MainPage from './Pages/WelcomeMain/Main';
import MviewApp from './Pages/WelcomeMain/Mview';
import MainPage2 from './Pages/WelcomeMain/Main2';

import Rating from './Pages/Rating/index';
import CustomerRevs from './Pages/CustomerRevs/index';
import Complaints from './Pages/Complaints/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainPage2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
