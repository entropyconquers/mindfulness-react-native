import { StyleSheet, TouchableOpacity } from 'react-native';
import { HomeProps, MoodProps, SplashProps } from '../types';
import { View } from 'react-native';
import { Box, Button, Flex, HStack, Image, Text, VStack } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-svg';
import Sounds from '../assets/images/sounds.svg';
import Journal from '../assets/images/journal.svg';
import Memory from '../assets/images/memory.svg';
const showLogo = true;

const blobs = {
    topLeft: true,
    topRight: false,
    midRight: true,
    midLeft: false,
    bottomLeft: false,
    bottomRight: true,
}
const blobColors = {
    topLeft: require('../assets/images/blob_blue.png'),
    topRight: require('../assets/images/blob_blue.png'),
    midRight: require('../assets/images/blob_blue.png'),
    midLeft: require('../assets/images/blob_blue.png'),
    bottomLeft: require('../assets/images/blob_orange.png'),
    bottomRight: require('../assets/images/blob_orange.png'),


}



export default function TabOneScreen({ navigation }: HomeProps) {

    
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
                Good Morning!
            </Text>
            <Text
                fontSize={18}
                opacity={0.5}
                fontFamily={"Gilroy-Medium"}
            >
                What would you like to do this morning?
            </Text>
            
            <VStack
                flex={1}
                my={10}
                justifyContent="space-around"
                
            >   
            
            {/* Sounds and Thoughts */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{
                        width: "100%",
                        height: 170,
                        borderRadius: 20,
                        overflow: "hidden",
                        
                    }}

                >
                    <Sounds
                        width={"100%"}   
                        //objectFit="cover"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <Flex
                        w="100%"
                        h="100%"
                        
                        direction='row'
                    >
                        <VStack
                            flex={1}
                            justifyContent="flex-end"
                            alignItems={"flex-end"}
                        >
                        <AnimatedLottieView
                            source={require('../assets/lottie/sounds.json')}
                            autoPlay
                            loop
                            style={{
                                marginTop: 10,
                                marginLeft:10,
                                height: "100%",
                                flex: 2,
                            }}
                        />
                        </VStack>
                        <VStack
                            flex={1}
                            m={5}
                            justifyContent="center"
                        >
                            <Text
                                fontSize={31}
                                fontFamily={"Gilroy-Bold"}
                                textAlign={"right"}
                            >
                                Sounds and Thoughts
                            </Text>
                            <Text
                                fontSize={11}
                                opacity={0.5}
                                fontFamily={"Gilroy-Medium"}
                                textAlign={"right"}
                            >
                                Listen to sound and thoughts to make the most out of your day.
                            </Text>
                        </VStack>
                    </Flex>
                </TouchableOpacity>
                {/* Journal */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Journal")}
                    style={{
                        width: "100%",
                        height: 170,
                        borderRadius: 20,
                        overflow: "hidden",
                        
                    }}

                >
                    <Journal
                        width={"100%"}   
                        //objectFit="cover"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <Flex
                        w="100%"
                        h="100%"
                        
                        direction='row'
                    >
                        <VStack
                            flex={1}
                            justifyContent="flex-end"
                            alignItems={"flex-end"}
                        >
                        <AnimatedLottieView
                            source={require('../assets/lottie/journal.json')}
                            autoPlay
                            loop
                            style={{
                                
                                marginLeft:10,
                                height: "100%",
                                flex: 2,
                            }}
                        />
                        </VStack>
                        <VStack
                            flex={1}
                            m={5}
                            justifyContent="center"
                        >
                            <Text
                                fontSize={31}
                                fontFamily={"Gilroy-Bold"}
                                textAlign={"right"}
                            >
                                Journaling
                            </Text>
                            <Text
                                fontSize={11}
                                opacity={0.5}
                                fontFamily={"Gilroy-Medium"}
                                textAlign={"right"}
                            >
                                Listen to sound and thoughts to make the most out of your day.
                            </Text>
                        </VStack>
                    </Flex>
                </TouchableOpacity>
                {/* Memory */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{
                        width: "100%",
                        height: 170,
                        borderRadius: 20,
                        overflow: "hidden",
                        
                    }}

                >
                    <Memory
                        width={"100%"}   
                        //objectFit="cover"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <Flex
                        w="100%"
                        h="100%"
                        
                        direction='row'
                    >
                        <VStack
                            flex={1}
                            justifyContent="flex-end"
                            alignItems={"flex-end"}
                        >
                        <AnimatedLottieView
                            source={require('../assets/lottie/memory.json')}
                            autoPlay
                            loop
                            style={{
                                
                                marginLeft:-10,
                                height: "100%",
                                flex: 2,
                            }}
                        />
                        </VStack>
                        <VStack
                            flex={1}
                            m={5}
                            justifyContent="center"
                        >
                            <Text
                                fontSize={31}
                                fontFamily={"Gilroy-Bold"}
                                textAlign={"right"}
                            >
                                Memory Game
                            </Text>
                            <Text
                                fontSize={11}
                                opacity={0.5}
                                fontFamily={"Gilroy-Medium"}
                                textAlign={"right"}
                            >
                                Test your memory with this fun card game!
                            </Text>
                        </VStack>
                    </Flex>
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


/*
Explain the code in this file (in extensive detail)
## Blobs
- The blobs are just for blurring the background. 

## Lottie Animations
- The lottie animations are from the lottiefiles website. I used the lottiefiles website to convert the animations to json files. I then imported the json files into the project and used the AnimatedLottieView component to display the animations.

## Flex
- Flex is a component from the react-native-elements library. It is a wrapper for the flexbox layout. I used it to make the layout responsive.

## TouchableOpacity
- TouchableOpacity is a component from the react-native library. It is a wrapper for the touchable opacity component. I used it to make the cards clickable.

## Navigation
- The navigation is from the react-navigation library. I used it to navigate to the home screen when the cards are clicked.

## SVG
- The SVGs are from the react-native-svg library. I used it to display the SVGs.

## VStack
- VStack is a component from the react-native-elements library. It stacks the children vertically. I used it to stack the cards vertically.

## HStack
- HStack is a component from the react-native-elements library. It stacks the children horizontally. I used it to stack the cards horizontally.

*/