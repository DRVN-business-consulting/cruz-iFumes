import { StyleSheet } from "react-native";

export const themeColors = {
  light: {
    container: "lightyellow",
    textColor: "#000000",
    foreColor: "#616161",
  },
  dark: {
    container: "#222",
    textColor: "#FFFFFF",
    foreColor: "#9E9E9E",
  },
  primary: {
    colorOption1: "lightblue",
    colorOption2: "lightgreen",
    colorOption3: "orange",
  },
};

export const myTheme = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  centerAll: {
    justifyContent: "center",
    alignItems: "center",
  },
  w_100: {
    width: "100%",
  },
});
