import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BookList from "../components/BookList";
import BooksCategory from "../components/BooksCategory";
import { plus_icon } from "../constants/icons";
import { COLORS, FONTS } from "../constants/theme";
import { user } from "../data/user";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerSectionBody}>
          <View>
            <Text style={styles.textWhite}>Good morning</Text>
            <Text style={[styles.textWhite, FONTS.h2]}>{user.name}</Text>
          </View>
          <Pressable>
            <View style={styles.pointsContainer}>
              <Image source={plus_icon} style={styles.image} />
              <Text style={[styles.textWhite, FONTS.h3]}>
                {user.point} points
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <BookList />
          <BooksCategory />
        </View>
      </ScrollView>
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
    height: 100,
  },
  headerSectionBody: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: COLORS.white,
    padding: 10,
  },
  textWhite: {
    color: COLORS.white,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    width: 120,
    padding: 5,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  body: {
    flex: 1,
    flexDirection: "column",
  },
});
