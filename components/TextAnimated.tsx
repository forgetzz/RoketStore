import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function RunningText() {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(translateX, {
        toValue: -width, // geser sejauh lebar layar
        duration: 8000, // kecepatan
        useNativeDriver: true,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [translateX]);

  const textContent =
    "🚀 Selamat datang di Roket Store! 💎 Promo besar-besaran, cek sekarang! ";

  return (
    <LinearGradient
      colors={["#ff512f", "#dd2476"]}
      style={styles.banner}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.textContainer}>
        <Animated.View
          style={{
            flexDirection: "row",
            transform: [{ translateX }],
          }}
        >
          <Text style={styles.text}>{textContent}</Text>
          <Text style={styles.text}>{textContent}</Text>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 50,
    borderRadius: 12,
    overflow: "hidden",
    margin: 8,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 10,
  },
});
