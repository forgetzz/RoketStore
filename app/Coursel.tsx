import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const images = [
  { id: "1", img: require("../assets/images/1.png") },
  { id: "2", img: require("../assets/images/2.png") },
  { id: "3", img: require("../assets/images/3.png")},
  { id: "4", img: require("../assets/images/4.png")},
];

export default function Coursel() {
  const flatListRef = useRef<FlatList>(null);
  const [page, setPage] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      let nextPage = (page + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextPage, animated: true });
      setPage(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const offsetX = e.nativeEvent.contentOffset.x;
            const currentPage = Math.round(offsetX / width);
            setPage(currentPage);
          }}
          renderItem={({ item }) => (
            <Image source={item.img} style={styles.image} />
          )}
        />

        {/* indikator dot */}
        <View style={styles.dots}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, page === i && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { height: 200 },
  image: { width: width, height: 200, resizeMode: "cover" },
  dots: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#bbb",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
});
