import {StyleSheet, Image, TouchableOpacity,} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RecentlyAdd from '../components/home/recently_add';
import React, {useContext} from 'react';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import {AuthContext} from "../store/auth";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const auth = useContext(AuthContext);

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View style={styles.container}>
        <RecentlyAdd navigation={navigation}></RecentlyAdd>
        <View style={styles.logo}>
          <TouchableOpacity onPress={() => auth.signOut()} style={{backgroundColor: 'red'}}>
            <Text style={{fontSize:16}}>Deconnecter</Text>
          </TouchableOpacity>
        <FontAwesome name="book" size={30} style={{ color:'red' }} />
        </View>
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
  logo: {
    flexDirection:'row', 
    backgroundColor: '#fff', 
    justifyContent:'center', 
    alignItems:'flex-start',  
    alignContent: 'center',
    height: 60, width: 60,
    borderRadius: 50
  }
});
