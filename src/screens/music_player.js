import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useMusic } from "../providers/music_provider";
import { myTheme, themeColors } from "../themes/myTheme";
import { Bar } from "react-native-progress";
import { useTheme } from "../providers/theme_provider";

const MusicPLayer = () => {
  let intervalId = null;

  const { theme, primaryColor } = useTheme();
  const { music, setMusic } = useMusic();
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused || progress >= 1) return;

    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.01;
        if (newProgress >= 1) {
          clearInterval(intervalRef.current);
          setIsPaused(true);
          return 0;
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, progress]);

  const togglePlay = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => setMusic(null)}>
        <Image
          source={require(`../../assets/back.png`)}
          style={[styles.backIcon, { tintColor: primaryColor }]}
        />
      </TouchableOpacity>
      <View style={[myTheme.centerAll, { marginTop: 20 }]}>
        <Image source={{ uri: music.albumCover }} style={styles.albumCover} />
        <Text style={[styles.title, { color: primaryColor }]}>
          {music.title}
        </Text>
        <Text style={[styles.artist, { color: themeColors[theme].foreColor }]}>
          {music.artist}
        </Text>
        <Bar
          color={primaryColor}
          width={300}
          style={styles.progressBar}
          progress={progress}
        />
        <TouchableOpacity onPress={togglePlay}>
          <Image
            source={
              isPaused
                ? require(`../../assets/play.png`)
                : require(`../../assets/pause.png`)
            }
            style={[styles.playIcon, { tintColor: primaryColor }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: { width: 45, height: 45, margin: 15 },
  albumCover: {
    margin: "auto",
    height: 280,
    width: 255,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    borderEndColor: "black",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
  },
  artist: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
    color: "black",
  },
  progressBar: { marginHorizontal: 10, marginTop: 40, marginBottom: 30 },
  playIcon: { width: 65, height: 65 },
});

export default MusicPLayer;
