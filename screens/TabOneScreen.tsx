import { StyleSheet } from 'react-native';
import { Props } from '../types';
import { Button, Text, View } from 'react-native';

export default function TabOneScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Mood')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
