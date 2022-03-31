import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import BookRecentlyAdd from './book_recently_add';

export default function RecentlyAdd() {
    return (
      
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <FontAwesome name="bookmark" size={30} style={{ marginRight: 20 }} />
            <Text style={{ fontSize: 20 }}>Récemment ajoutés</Text>
        </View>
        <BookRecentlyAdd></BookRecentlyAdd>
    </View>

    );
  }
  
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16,
        backgroundColor: 'transparent'
    },
  });