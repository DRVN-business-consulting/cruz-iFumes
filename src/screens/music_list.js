import { SectionList, Text, View } from "react-native";
import React from "react";
import ListHeader from "../components/list_header";
import SectionHeader from "../components/section_header";
import Item from "../components/item";
import { myTheme, themeColors } from "../themes/myTheme";
import { useTheme } from "../providers/theme_provider";

const MusicList = () => {
  const { theme } = useTheme();
  const musicList = [
    {
      title: "Snoozed and Snuggled",
      data: [
        {
          title: "Neko Atsume",
          albumCover: "https://m.media-amazon.com/images/I/61JufknUUFL.png",
          artist: "Ryo Shintani",
          duration: 2,
        },
        {
          title: "Longest Night",
          albumCover: "https://f4.bcbits.com/img/a0223400641_10.jpg",
          artist: "Alex Holowka",
          duration: 5,
        },
        {
          title: "Memory",
          albumCover:
            "https://static.wikia.nocookie.net/ibgame/images/6/69/Chara_ib.png/revision/latest?cb=20170914175546g",
          artist: "Yasutoshi Watanabe",
          duration: 2,
        },
        {
          title: "Pokke Village",
          albumCover:
            "https://upload.wikimedia.org/wikipedia/it/4/4b/Logo_MHFU.png",
          artist: "Akihiko Narita",
          duration: 2,
        },
      ],
    },
  ];
  return (
    <SectionList
      sections={musicList}
      ListHeaderComponent={ListHeader}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default MusicList;
