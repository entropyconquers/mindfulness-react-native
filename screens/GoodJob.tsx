import { StyleSheet } from 'react-native';
import { Breatheprops, GoodJobProps, LoginProps } from '../types';
import { View } from 'react-native';
import { Box, Button, Image, Text, VStack, Input , useToast } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import ToastAlert from '../components/Toast';

const showLogo = true;

const blobs = {
    topLeft: false,
    topRight: true,
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


export default function GoodJob({ navigation }: GoodJobProps) {
    const [times, setTimes] = React.useState(1);
    const animationRef = React.useRef<AnimatedLottieView>(null)
    const AnimationFinish = () => {
        navigation.navigate('Mood');
    }
  return (
    <View style={styles.container}>
        <Background
            blobs={blobs}
            showLogo={showLogo}
            blobColors={blobColors}
        />
        <VStack
            mt={150}
            width={"100%"}
            
            flex={1}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            
        >
            <Text
                fontSize={50}
                mt={5}
                fontWeight={"bold"}
                fontFamily={"Gilroy-ExtraBold"}
                color="brand.400"
            >
                Good Job!
            </Text>
            <Text
                fontSize={20}
                mt={-2}
                fontWeight={"bold"}
                fontFamily={"Gilroy-Bold"}
                color="#1e1e1e"
                opacity={0.8}
            >
                You are on a roll today
            </Text>
            
            
            <VStack
                flex={1}
                justifyContent="center"
                
            >
                <AnimatedLottieView
                    ref={animationRef}
                    source={require('../assets/lottie/goodjob.json')}
                    autoPlay
                    
                    loop = {false}
                    // play 5 times
                    onAnimationFinish={AnimationFinish}
                    style={{
                        width: "85%",
                        
                        
                    }}
                />
               
            </VStack>
            <Text
                fontSize={20}
                my={5}
                fontWeight={"bold"}
                fontFamily={"Gilroy-Medium"}
                color="#1e1e1e"
                opacity={0.8}
            >
                Returning to the home screen
            </Text>
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
