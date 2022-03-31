import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RecentlyAdd from '../components/home/recently_add';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <RecentlyAdd></RecentlyAdd>
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
  },
});
