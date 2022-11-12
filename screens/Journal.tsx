import { findNodeHandle, StyleSheet, TouchableOpacity } from 'react-native';
import { JournalProps, MoodProps, SplashProps } from '../types';
import { View } from 'react-native';
import { Box, Button, Divider, HStack, Image, Input, ScrollView, Text, VStack , useToast, KeyboardAvoidingView, Spacer, ArrowBackIcon} from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-svg';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Neutral from '../assets/images/neutral.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Platform
import { Platform } from 'react-native';
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
    bottomLeft: require('../assets/images/blob_blue.png'),
    bottomRight: require('../assets/images/blob_blue.png'),


}



export default function TabOneScreen({ navigation }: JournalProps) {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    //input fields
    /*
    List of questions-
        Small questions-
        How was your day?
        What emotions did you feel and how did you react?
        What were the positives?
        What were the negatives?
        What 3 things are you grateful for today?
        Mention 1 short-term and 1 long-term goal you have for yourself.
        Big question-
        Diary Entry
    */
    const [yourDay, setYourDay] = useState("");
    const [emotions, setEmotions] = useState("");
    const [positives, setPositives] = useState("");
    const [negatives, setNegatives] = useState("");
    const [grateful, setGrateful] = useState("");
    const [goals, setGoals] = useState("");
    const [diary, setDiary] = useState("");
    const scrollViewRef = useRef(null);


    const toast = useToast();
  
    const onChange = (event:any, selectedDate:Date):any => {
        //if selectedDate is in future, return
        if (selectedDate > new Date()) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Date"}
                  description={"Please select a date in the past"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      console.log(date)
      //close modal
      
    };
  
    const showMode = (currentMode:string) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
    const handleSave = async () => {
        //small questions are 10-150 words
        //big question is 300-800 words
        //if any of the questions are not filled out, show toast and return

        if(yourDay.split(" ").length < 10 || yourDay.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"How was your day? must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(emotions.split(" ").length < 10 || emotions.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"What emotions did you feel and how did you react? must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(positives.split(" ").length < 10 || positives.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"What were the positives? must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(negatives.split(" ").length < 10 || negatives.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"What were the negatives? must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(grateful.split(" ").length < 10 || grateful.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"What 3 things are you grateful for today? must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(goals.split(" ").length < 10 || goals.split(" ").length > 150) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"Mention 1 short-term and 1 long-term goal you have for yourself. must be between 10-150 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        if(diary.split(" ").length < 300 || diary.split(" ").length > 800) {
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Invalid Length"}
                  description={"Diary Entry must be between 300-800 words"}
                  status={"error"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            return;
        }
        //create an object with all the data
        const data = {
            yourDay: yourDay,
            emotions: emotions,
            positives: positives,
            negatives: negatives,
            grateful: grateful,
            goals: goals,
            diary: diary,
        }
        //save object to async storage
        AsyncStorage.setItem(date.toString(), JSON.stringify(data));
        try {
            const jsonValue = JSON.stringify(data)
            //get date in day month year format
            const dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

            await AsyncStorage.setItem(dmy.toString(), jsonValue)
            //info toast save successful
            toast.show({
                render: ({
                  id
                }) => {
                  return <ToastAlert
                  title={"Save Successful"}
                  description={"Your entry has been saved"}
                  status={"success"}
                  id={"login"}
                  variant={"solid"}
                  isClosable={false}
               />;
            }
            })
            //navigate to home screen
            navigation.navigate("GoodJob");
        } catch (e) {
        // saving error
        }
    }
    
    useEffect(() => {
        //get data from async storage
        const getData = async () => {
            try {
              const dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

                const jsonValue = await AsyncStorage.getItem(dmy.toString())
                //.log(jsonValue)
                if (jsonValue != null) {
                    const data = JSON.parse(jsonValue)
                    setYourDay(data.yourDay);
                    setEmotions(data.emotions);
                    setPositives(data.positives);
                    setNegatives(data.negatives);
                    setGrateful(data.grateful);
                    setGoals(data.goals);
                    setDiary(data.diary);
                }
                else{
                    setYourDay("");
                    setEmotions("");
                    setPositives("");
                    setNegatives("");
                    setGrateful("");
                    setGoals("");
                    setDiary("");
                }
            } catch(e) {
                // error reading value
                console.log(e)
                setYourDay("");
                setEmotions("");
                setPositives("");
                setNegatives("");
                setGrateful("");
                setGoals("");
                setDiary("");
            }
        }
        getData();
    }, [date])
    
  return (
    <View style={styles.container}>
      <Background blobs={blobs} showLogo={showLogo} blobColors={blobColors} />
      <VStack mt={125} width={"100%"} p={5} flex={1}>
      <HStack
        alignItems={"center"}
      >
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
        <Divider background={"#00000050"} />

        <VStack flex={1} justifyContent="flex-start">
          <HStack mt={5} justifyContent="space-between" alignItems="center">
            <Text
              fontSize={35}
              fontWeight={"bold"}
              fontFamily={"Gilroy-ExtraBold"}
            >
              {date.toLocaleString("default", {
                weekday: "long",
              })}
            </Text>
            <VStack flex={1}>
              <Text
                alignSelf={"flex-end"}
                fontFamily={"Gilroy-Bold"}
                color={"black"}
                fontSize={14}
                opacity={0.7}
              >
                Select Date
              </Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            </VStack>
          </HStack>
          
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%" }}
                //scroll to input
                ref={scrollViewRef}
            >
                
                
            
              <VStack width={"100%"} p={2}>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    How was your day?
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={yourDay}
                    onChangeText={setYourDay}
                    //scroll to field on focus
                    
                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    What emotions did you feel and how did you react?
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={emotions}
                    onChangeText={setEmotions}
                    //scroll to field on focus
                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    What were the positives?
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={positives}
                    onChangeText={setPositives}

                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    What were the negatives?
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={negatives}
                    onChangeText={setNegatives}

                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    What 3 things are you grateful for today?
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={grateful}
                    onChangeText={setGrateful}
                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    Mention 1 short-term and 1 long-term goal you have for
                    yourself.
                  </Text>
                  <Input
                    size="xl"
                    placeholder="10-150 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={goals}
                    onChangeText={setGoals}

                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
                <VStack mb={5}>
                  <Text
                    fontSize={30}
                    fontWeight={"bold"}
                    fontFamily={"Gilroy-Bold"}
                    color={"brand.300"}
                  >
                    Diary Entry
                  </Text>
                  <Input
                    size="xl"
                    placeholder="300-800 words"
                    p={5}
                    variant="filled"
                    //fill color
                    bg={"gray.200"}
                    borderRadius={10}
                    fontFamily={"Gilroy-SemiBold"}
                    multiline={true}
                    value={diary}
                    onChangeText={setDiary}
                    // value={username}
                    // onChange={onChangeUsername}
                  />
                </VStack>
              </VStack>
             
            </KeyboardAwareScrollView>
            <Primary_Button
                onPress={() => handleSave()}
                title={"Save journal"}
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
