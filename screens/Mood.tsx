import { StyleSheet, TouchableOpacity } from 'react-native';
import { MoodProps, SplashProps } from '../types';
import { View } from 'react-native';
import { Box, Button, HStack, Image, Text, VStack } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-svg';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Neutral from '../assets/images/neutral.svg';
const showLogo = true;

const blobs = {
    topLeft: true,
    topRight: false,
    midRight: false,
    midLeft: false,
    bottomLeft: false,
    bottomRight: false,
}
const blobColors = {
    topLeft: require('../assets/images/blob_blue.png'),
    topRight: require('../assets/images/blob_blue.png'),
    midRight: require('../assets/images/blob_blue.png'),
    midLeft: require('../assets/images/blob_blue.png'),
    bottomLeft: require('../assets/images/blob_orange.png'),
    bottomRight: require('../assets/images/blob_blue.png'),


}



export default function TabOneScreen({ navigation }: MoodProps) {

    
  return (
    <View style={styles.container}>
        <Background
            blobs={blobs}
            showLogo={showLogo}
            blobColors={blobColors}
        />
        <VStack
            mt={125}
            width={"100%"}
            p={5}
            flex={1}
            
        >
            <Text
                fontSize={50}
                fontWeight={"bold"}
                fontFamily={"Gilroy-Bold"}
            >
                How is your mood today?
            </Text>
            
            <VStack
                flex={1}
                my={10}
                justifyContent="space-around"
                
            >   
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Happy
                        width={"100%"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Neutral
                        width={"100%"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Sad
                        width={"100%"}
                    />
                </TouchableOpacity>
                
                
                
            </VStack>
            

        </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
  },
  
});
