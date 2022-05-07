import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './helpers/styles.js';

export default function Map({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Map view</Text>
      <TouchableOpacity onPress={() => navigation.replace('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
