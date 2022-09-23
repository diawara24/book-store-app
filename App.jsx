import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, LogBox, View, Text } from "react-native";
import MyStack from "./components/MyStack";
import { COLORS } from './constants/theme';

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(["VirtualizedLists"]);

export default function App() {
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
