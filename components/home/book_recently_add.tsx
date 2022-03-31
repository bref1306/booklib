import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, View } from '../Themed';

export default function BookRecentlyAdd() {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
        {
            id: "58694a0f-3da1-471f-bd964145571e29d72",
            title: "Third Item",
        },
      ];

    const Item = ({  }) => (
        <View style={styles.imageBloc}>
            <Image style={{ width: '100%', height: 130}}  source={require('../../assets/images/example-book.png')}></Image>
            <Text>Description</Text>
            <Text>Titre</Text>
        </View>
    );
    return (
        <FlatList
        horizontal={true}
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: 16,
        backgroundColor: 'transparent',
    },
    imageBloc: {
        marginRight: 24,
        marginTop: 16,
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
  });