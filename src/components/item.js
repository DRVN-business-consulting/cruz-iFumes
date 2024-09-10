import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../providers/theme_provider";
import { useMusic } from "../providers/music_provider";
import { myTheme, themeColors } from "../themes/myTheme";

const Item = ({ item }) => {
  const { theme, primaryColor } = useTheme();
  const { setMusic } = useMusic();
  return (
    <TouchableOpacity
      style={[myTheme.row, styles.container]}
      onPress={() => setMusic(item)}
    >
      <Image
        source={{ uri: item.albumCover }}
        style={[styles.albumCover, { borderColor: primaryColor }]}
      />
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          {item.title}
        </Text>
        <Text style={[styles.artist, { color: themeColors[theme].foreColor }]}>
          {item.artist}
        </Text>
        <Text
          style={[styles.duration, { color: themeColors[theme].textColor }]}
        >
          Duration: {item.duration} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  albumCover: { width: 80, height: 80, borderRadius: 50 },
  detailsContainer: { marginHorizontal: 15 },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 15,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default Item;
