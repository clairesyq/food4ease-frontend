import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './helpers/styles.js';

export default function Map({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.replace('Signin')}>
        <Text style={styles.link}>Login to another account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Signup')}>
        <Text style={styles.link}>Sign up a new account</Text>
      </TouchableOpacity>
    </View>
  );
}