import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../providers/theme_provider";
import { myTheme, themeColors } from "../themes/myTheme";

const ListHeader = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  return (
    <View>
      <Text style={[styles.appName, { color: primaryColor }]}>iFumes</Text>
      <View style={styles.container}>
        <View style={[myTheme.row, styles.settingContainer]}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: primaryColor }]}
            onPress={toggleTheme}
          >
            <Text style={styles.buttonText}>{`${theme} MODE`}</Text>
          </TouchableOpacity>
        </View>
        <View style={[myTheme.row, styles.settingContainer, { marginTop: 20 }]}>
          <Text style={[styles.label, { color: primaryColor }]}>THEME</Text>

          <View style={[myTheme.row, myTheme.centerAll, styles.colorContainer]}>
            {Object.entries(themeColors.primary).map(([key, value]) => (
              <TouchableOpacity
                key={key}
                onPress={() => setPrimaryColor(value)}
                style={[styles.colorBox, { backgroundColor: value }]}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    paddingHorizontal: 20,
    marginVertical: 40,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    marginBottom: 12,
    marginHorizontal: 10,
  },
  settingContainer: { alignItems: "center", justifyContent: "space-between" },
  label: {
    paddingLeft: 40,
    marginStart: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
  button: { paddingHorizontal: 150, paddingVertical: 10, borderRadius: 10 },
  buttonText: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
  colorContainer: { gap: 5 },
  colorBox: {
    width: 70,
    height: 30,
    borderRadius: 150,
  },
});

export default ListHeader;
