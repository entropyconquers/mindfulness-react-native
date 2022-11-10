import { StyleSheet } from 'react-native';
import { Breatheprops, LoginProps } from '../types';
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


export default function Login({ navigation }: Breatheprops) {
    const [times, setTimes] = React.useState(1);
    const animationRef = React.useRef<AnimatedLottieView>(null)
    const AnimationFinish = () => {
        if(times < 1){
            animationRef.current?.play()
            setTimes((times) => times + 1);
        }
        else{
            navigation.navigate('Mood');
        }

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
                fontWeight={"bold"}
                fontFamily={"Gilroy-Bold"}
            >
                Breathe in... 
            </Text>
            <Text
                fontSize={80}
                mt={5}
                fontFamily={"Gilroy-Regular"}
                color={"brand.400"}
            >
                {6-times}
            </Text>
            
            <VStack
                flex={1}
                justifyContent="flex-end"
                
            >
                <AnimatedLottieView
                    ref={animationRef}
                    source={require('../assets/lottie/breathe.json')}
                    autoPlay
                    
                    loop = {false}
                    // play 5 times
                    onAnimationFinish={AnimationFinish}
                    style={{
                        width: "100%",
                        
                        
                    }}
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
