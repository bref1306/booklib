import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import BookRecentlyAdd from './book_recently_add';

const RecentlyAdd = (props: { navigation: any; }) =>  {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <FontAwesome name="bookmark" size={30} style={{ marginRight: 20 }} />
                <Text style={{ fontSize: 20 }}>Récemment ajoutés</Text>
            </View>
            <BookRecentlyAdd navigation={props.navigation}></BookRecentlyAdd>
        </View>
    );
  }
  
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        height: 300,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16,
        backgroundColor: 'transparent'
    },
  });

  export default RecentlyAdd;