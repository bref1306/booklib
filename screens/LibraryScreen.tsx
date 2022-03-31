import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function LibraryScreen() {
  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Collection</Text>
      </View>
    </View>
  );
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
