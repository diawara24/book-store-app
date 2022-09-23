import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import BookList from "../components/BookList";
import BooksCategory from "../components/BooksCategory";
import { plus_icon } from "../constants/icons";
import { COLORS } from "../constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerSectionBody}>
          <View>
            <Text>Good morning</Text>
            <Text>Username</Text>
          </View>
          <View>
            <Pressable>
              <Image source={plus_icon} />
              <Text>600</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <BookList />
        <BooksCategory />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.black,
  },
  headerSection: {
    height: 200,
  },
  headerSectionBody: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  body: {
    flex: 1,
    flexDirection: "column",
  },
});
