import { StyleSheet, TouchableOpacity } from 'react-native';
import { JournalProps, MoodProps, SplashProps } from '../types';
import { View } from 'react-native';
import { Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-svg';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Neutral from '../assets/images/neutral.svg';
import { ArrowBackIcon } from 'native-base';
const showLogo = true;

const blobs = {
    topLeft: true,
    topRight: false,
    midRight: false,
    midLeft: false,
    bottomLeft: false,
    bottomRight: true,
}
const blobColors = {
    topLeft: require('../assets/images/blob_blue.png'),
    topRight: require('../assets/images/blob_blue.png'),
    midRight: require('../assets/images/blob_blue.png'),
    midLeft: require('../assets/images/blob_blue.png'),
    bottomLeft: require('../assets/images/blob_blue.png'),
    bottomRight: require('../assets/images/blob_blue.png'),


}



export default function TabOneScreen({ navigation }: JournalProps) {

    
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
            <HStack>
                {/* Back Button */}
               
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowBackIcon
                        size={6}
                        color={"brand.500"}
                        mr={3}
                    />
                </TouchableOpacity>
                <Text
                    fontSize={50}
                    fontWeight={"bold"}
                    fontFamily={"Butler-ExtraBold"}
                    color={"brand.500"}
                >
                    My Journal
                </Text>
            </HStack>
            
            <Divider
                background={"#00000050"}
            />
            
            <VStack
                flex={1}
                my={10}
                justifyContent="space-around"
                
            >   
                
                
                
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
