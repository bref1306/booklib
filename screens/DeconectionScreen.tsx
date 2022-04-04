import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../store/auth';

export default function DeconectionScreen() {

  const auth = useContext(AuthContext);
  
  useEffect(() => {
    auth.signOut();
  })

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
