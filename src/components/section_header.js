import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "../providers/theme_provider";

const SectionHeader = ({ title }) => {
  const { primaryColor } = useTheme();

  return (
    <Text style={[styles.header, { backgroundColor: primaryColor }]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 70,
    paddingVertical: 5,
  },
});

export default SectionHeader;
