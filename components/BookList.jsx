import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../constants";
import { clock_icon, page_icon } from "../constants/icons";
import { myBooks } from "../data/myBooks";

export default function BookList() {
  return (
    <View style={[styles.container, { padding: 10 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.textWhite, FONTS.h2]}>My Book</Text>
        <Pressable onPress={() => console.log("see more")}>
            <View style={{borderBottomColor: COLORS.lightGray, borderBottomWidth: 1}}>
                <Text style={styles.textSeeMore}>see more</Text>
            </View>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={myBooks}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <Pressable  onPress={() => console.log("book detail")}>
              <View style={styles.card}>
                <View>
                  <Image
                    resizeMode="cover"
                    style={styles.cardImage}
                    source={item.bookCover}
                  />
                </View>
                <View style={styles.cardFooter}>
                  <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image
                      resizeMode="cover"
                      style={styles.cardIcon}
                      source={clock_icon}
                    />
                    <Text style={styles.textGray}>{item.lastRead}</Text>
                  </View>
                  <View style={{flexDirection: "row"}}>
                    <Image style={styles.cardIcon} source={page_icon} />
                    <Text style={styles.textGray}>{item.completion}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  textWhite: {
    color: COLORS.white,
  },
  textSeeMore: {
    color: COLORS.lightGray,
  },
  card: {
    marginTop: 10,
    marginRight: 10,
  },
  cardImage: {
    borderRadius: 8,
    width: 120,
    height: 200,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardIcon: {
    width: 12,
    height: 12,
    tintColor: COLORS.lightGray,
    marginRight: 5,
  },
  textGray: {
    color: COLORS.lightGray,
  },
});
