import { StyleSheet } from 'react-native';
import { LoginProps } from '../types';
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


export default function Login({ navigation }: LoginProps) {
    const toast = useToast();
    //username
    const [username, setUsername] = React.useState('');
    const onChangeUsername = (event: any) => {
        setUsername(event.nativeEvent.text);
    }

    //password
    const [password, setPassword] = React.useState('');
    const onChangePassword = (event: any) => {
        setPassword(event.nativeEvent.text);
    }

    const handleLogin = () => {
        navigation.navigate('Breathe');
        return;
        //check if username and password are correct
        //if correct, navigate to home screen
        //if incorrect, show error message
        if (username === 'test' && password === 'test') {
            navigation.navigate('Breathe');
        }
        else {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Incorrect Username or Password"}
                  description={"Please try again"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
              
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
            mt={125}
            width={"100%"}
            p={5}
            flex={1}
            
        >
            <Text
                fontSize={80}
                fontWeight={"bold"}
                fontFamily={"Gilroy-ExtraBold"}
            >
                Login
            </Text>
            <Input 
                size="xl" 
                placeholder="Username"
                p={5}
                variant="filled"
                //fill color
                bg={"gray.200"}
                borderRadius={10}
                fontFamily={"Gilroy-SemiBold"}
                value={username}
                onChange={onChangeUsername}

                />
            <Input 
                size="xl" 
                placeholder="Password"
                mt={5}
                p={5}
                variant="filled"
                //fill color
                bg={"gray.200"}
                borderRadius={10}
                fontFamily={"Gilroy-SemiBold"}
                type="password"
                value={password}
                onChange={onChangePassword}
                />
            <VStack
                flex={1}
                justifyContent="flex-end"
                
            >
                <AnimatedLottieView
                    source={require('../assets/lottie/login.json')}
                    autoPlay
                    loop
                    style={{
                        width: 350,
                        height: 350,
                        marginLeft: -20,
                    }}
                />
                <Primary_Button
                    onPress={() => handleLogin()}
                    title={"Login"}
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
