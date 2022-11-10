
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Breathe: undefined;
  Mood: undefined;
};

export type SplashProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;
export type LoginProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
export type Breatheprops = NativeStackScreenProps<
  RootStackParamList,
  'Breathe'
>;
export type MoodProps = NativeStackScreenProps<
  RootStackParamList,
  'Mood'
>;

export type buttonProps = {
  onPress: () => void;
  title: string;
  backgroundColor: string|undefined;
  color: string|undefined;
  
}

/*
Code explanation:
- What is RootStackParamList? 
  * It is a type that represents the route names and the params for each screen.
  * It is used to type the navigation prop.
  * It is used to type the route prop.
  - What is NativeStackScreenProps?
  * It is a type that represents the navigation prop and the route prop for a screen.
  * It is used to type the props of a screen component.
*/




