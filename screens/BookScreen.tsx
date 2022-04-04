import { StyleSheet, Image, } from 'react-native';
import { Text, View } from '../components/Themed';
import React from 'react';

export default function BookScreen() {
  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View style={styles.container}>
            <Text>Book</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#E5E5E5',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
