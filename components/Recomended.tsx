import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("window").width;

const Recomended = () => {
  const dataCard = [
  {
    id: 1,
    title: "High Domino",
    img: require("../assets/images/royal.png"),
    desc: "Top-up chip Higgs Domino dengan harga hemat dan proses super cepat. Cocok buat kamu yang hobi main tapi nggak mau ribet.",
    price: "Rp 50.000",
  },
  {
    id: 2,
    title: "Royal Dreams",
    img: require("../assets/images/domino.jpg"),
    desc: "Pilihan paket eksklusif untuk pemain setia. Stok selalu ready, transaksi aman, dan layanan admin ramah 24 jam.",
    price: "Rp 75.000",
  },
];

  return (
    <View style={styles.container}>
      {dataCard.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.img} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Recomended;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
   
    justifyContent: "space-around",
    paddingVertical: 10,


  },
  card: {
    width: width * 0.45, // kira-kira setengah layar, ada margin
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // untuk Android shadow
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    color: "#666",
    marginBottom: 6,
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#e54646ff",
  },
});
