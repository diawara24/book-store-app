import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, LogBox, View, Text } from "react-native";
import MyStack from "./components/MyStack";
import { COLORS } from './constants/theme';
import { useFonts } from 'expo-font';
import { useCallback } from "react";

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(["VirtualizedLists"]);

export default function App() {

  // Use font family
  const [fontsLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // If Font is loaded, we show app
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  // End Font loading process

  return (
    <>
      <NavigationContainer >
        <MyStack style={styles.container}/>
      </NavigationContainer>
      <StatusBar  />
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
