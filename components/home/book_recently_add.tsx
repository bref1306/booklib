import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import navigation from '../../navigation';
import BookScreen from '../../screens/BookScreen';
import { Text, View } from '../Themed';
import axios from "axios";

export const BookRecentlyAdd = (props: { navigation: any; }) => {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Livre n°1",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Livre n°2",
        },
        {
          id: "58694a0f-3da1-471bd96-145571e29d72",
          title: "Livre n°3",
        },
        {
          id: "58694a0f-3da1-471-bd96-145571e29d72",
          title: "Livre n°4",
        },
        {
          id: "58694a0f-3da1-471f-d96-145571e29d72",
          title: "Livre n°5",
        },
      ];

    //const Stack = createNativeStackNavigator();
    axios.post("https://booklib-app-mobile.herokuapp.com/book", {})
    .then((result) => {
        console.log(result.data);
    })
    .catch((error) => {
        if(error.response) {
            if(error.response.data.errors) {
               console.log('ça marche pas');
            }
        }
    })
    return (
        <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item}) => { 
            return <TouchableOpacity onPress={() => 
               { 
                // <Stack.Screen  name="Book" component={BookScreen} />
                   props.navigation.navigate('Book')}
                   }>
                <View style={styles.imageBloc}>
                    <Image style={{ width: '100%', height: 130}}  source={require('../../assets/images/book-home.jpg')}></Image>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>}}
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
        width: 80,
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
  });

  
export default BookRecentlyAdd;