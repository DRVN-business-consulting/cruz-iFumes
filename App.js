import { MusicPlayerContextProvider } from "./src/providers/music_provider";
import { ThemeContextProvider } from "./src/providers/theme_provider";
import MainScreen from "./src/screens/main";

export default function App() {
  return (
    <ThemeContextProvider>
      <MusicPlayerContextProvider>
        <MainScreen />
      </MusicPlayerContextProvider>
    </ThemeContextProvider>
  );
}
