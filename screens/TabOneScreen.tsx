import { StyleSheet } from 'react-native';
import { Props } from '../types';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import Primary_Button from '../components/Primary_Button';
export default function TabOneScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Primary_Button
        onPress={() => navigation.navigate("Mood")}
        title={"Get Started"}
        backgroundColor={"brand.400"}
        color={"white"}
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
  
});
