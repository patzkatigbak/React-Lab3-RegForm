import React, { Component } from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Regform from './Components/Regform';

export default function App() {

  


  return (
    <View style={styles.container}>
      <Regform/>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultText:{
  fontSize: 20, 
  fontFamily:'Times New Roman'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
