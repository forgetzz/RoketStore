import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");

const testimonials = [
  { id: 1, name: "Andi", text: "Mantap! Chip masuk cepat 🚀" },
  { id: 2, name: "Budi", text: "Seller terpercaya, recommended 👍" },
  { id: 3, name: "Citra", text: "Respon cepat, pelayanan ramah 😊" },
  { id: 4, name: "Dewi", text: "Transaksi aman dan mudah 🔥" },
];

const CARD_HEIGHT = 90;

const Testimoni = () => {
  const scrollRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({
        y: nextIndex * CARD_HEIGHT,
        animated: true,
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testimoni</Text>
      <ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        {testimonials.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Testimoni;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#222",
    backgroundColor:"#ffff",
    borderRadius:10,
    paddingVertical:10
  },
  card: {
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    padding: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
