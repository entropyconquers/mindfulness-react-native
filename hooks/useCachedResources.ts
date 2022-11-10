import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
          'Gilroy-Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
          'Gilroy-SemiBold': require('../assets/fonts/Gilroy-SemiBold.ttf'),
          'Gilroy-Bold': require('../assets/fonts/Gilroy-Bold.ttf'),
          'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
          'Gilroy-Black': require('../assets/fonts/Gilroy-Black.ttf'),
          //Butler 
          'Butler-Regular': require('../assets/fonts/Butler_Regular.otf'),
          'Butler-Medium': require('../assets/fonts/Butler_Medium.otf'),
          'Butler-Bold': require('../assets/fonts/Butler_Bold.otf'),
          'Butler-Black': require('../assets/fonts/Butler_Black.otf'),
          //extra bold
          'Butler-ExtraBold': require('../assets/fonts/Butler_ExtraBold.otf'),
          
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
