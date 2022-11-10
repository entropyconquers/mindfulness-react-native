import { StyleSheet } from 'react-native';
import { Props } from '../types';
import { View } from 'react-native';
import { Box, Button, Image, Text, VStack } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';


const showLogo = true;

const blobs = {
    topLeft: true,
    topRight: false,
    midRight: true,
    midLeft: false,
    bottomLeft: true,
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


export default function TabOneScreen({ navigation }: Props) {

    
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
                Embark upon a new <Text
                 color={"brand.400"}
                 fontFamily={"Butler-ExtraBold"}
                 >
                    Journey
                </Text>
            </Text>
            <Text
                fontSize={18}
                opacity={0.5}
                fontFamily={"Gilroy-Medium"}
            >
                Learn to live your life in a new way with this app. Lorem Inpsum dlor
            </Text>
            <VStack
                flex={1}
                justifyContent="flex-end"
                
            >
                <AnimatedLottieView
                    source={require('../assets/lottie/meditation.json')}
                    autoPlay
                    loop
                    style={{
                        width: 400,
                        height: 400,
                        alignSelf: "center",
                    }}
                />
                <Primary_Button
                    onPress={() => navigation.navigate("Mood")}
                    title={"Let's Begin"}
                    backgroundColor={"brand.400"}
                    color={"white"}
                />
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
