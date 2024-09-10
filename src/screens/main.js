import { SafeAreaView } from "react-native-safe-area-context";

import MusicList from "./music_list";
import MusicPLayer from "./music_player";
import { myTheme, themeColors } from "../themes/myTheme";
import { useTheme } from "../providers/theme_provider";
import { useMusic } from "../providers/music_provider";

const MainScreen = () => {
  const { theme } = useTheme();
  const { music } = useMusic();
  const containerBg = themeColors[theme].container;
  return (
    <SafeAreaView style={[myTheme.container, { backgroundColor: containerBg }]}>
      {music == null ? <MusicList /> : <MusicPLayer />}
    </SafeAreaView>
  );
};

export default MainScreen;
