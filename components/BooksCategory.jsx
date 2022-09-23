import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../data/categories";
import { COLORS, SIZES } from "../constants";
import { myBooks } from "../data/myBooks";
import { bookmark_icon, page_filled_icon, read_icon } from "../constants/icons";

export default function BooksCategory() {
  const [books, setBooks] = useState(categories[0].books);
  const [categorySelected, setCategorySelected] = useState(categories[0]);

  const onSelectedCategory = (item) => {
    setCategorySelected(item);
    setBooks(item.books);
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <Pressable onPress={() => onSelectedCategory(item)}>
              <View style={styles.textContain}>
                <Text
                  style={
                    item === categorySelected
                      ? styles.textSelected
                      : styles.text
                  }
                >
                  {item.categoryName}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={books}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable onPress={() => console.log("book selected")}>
              <View style={styles.card}>
                <View>
                  <Image
                    style={{ width: 100, height: 150, borderRadius: 5 }}
                    resizeMode="cover"
                    source={item.bookCover}
                  />
                </View>
                <View style={styles.cardDetail}>
                  <View style={styles.titleContain}>
                    <Text style={styles.textWhite}>{item.bookName}</Text>
                    <Image
                      source={bookmark_icon}
                      resizeMode="cover"
                      style={styles.iconTitle}
                    />
                  </View>
                  <View>
                    <Text style={styles.textAuthor}>{item.author}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Image
                      source={page_filled_icon}
                      resizeMode="cover"
                      style={[styles.iconTitle, { marginRight: 10 }]}
                    />
                    <Text style={styles.bookDetail}>{item.pageNo}</Text>
                    <Image
                      source={read_icon}
                      resizeMode="cover"
                      style={[styles.iconTitle, { marginRight: 10 }]}
                    />
                    <Text style={styles.bookDetail}>{item.readed}</Text>
                  </View>
                  <View style={styles.btnGroup}>
                    {item.genre.sort().map((genre, index) => (
                        <View key={index} style={[styles.btn, genre === "Adventure" ? styles.btnGreen : genre === "Drama" ? styles.btnRed : styles.btnBlue]}>
                          <Text  style={[styles.text, , genre === "Adventure" ? styles.textBtnGreen  : genre === "Drama" ? styles.textBtnRed : styles.textBtnBlue]}>
                            {genre}
                          </Text>
                        </View>
                    ))}
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
  container: {},
  textContain: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.lightGray,
  },
  textSelected: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
  textWhite: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cardDetail: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  titleContain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconTitle: {
    width: 16,
    height: 16,
    fontWeight: "bold",
    tintColor: COLORS.lightGray,
  },
  textAuthor: {
    color: COLORS.lightGray,
    fontWeight: "bold",
    fontSize: 12,
    paddingTop: 5,
  },
  bookDetail: {
    color: COLORS.lightGray,
    fontSize: 12,
    marginRight: 5,
  },
  btnGroup: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  btn: {
    padding: 10,
    borderRadius: SIZES.radius,
    marginRight: 10,
    marginBottom: 10,
  },
  btnGreen:{
    backgroundColor: "#11c443",
  },
  textBtnGreen: {
    color: "green",
  },
  btnRed:{
    backgroundColor: "#fb9696",
  },
  textBtnRed: {
    color: "red",
  },
  btnBlue:{
    backgroundColor: COLORS.lightBlue,
  },
  textBtnBlue: {
    color: "blue",
  },
});
