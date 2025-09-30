import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TutorialOrder = () => {
  const steps = [
    {
      text: "Pilih jumlah chip yang mau dibeli",
      icon: "cart-outline" as const,
    },
    {
      text: "Klik tombol WhatsApp pada produk",
      icon: "logo-whatsapp" as const,
    },
    {
      text: "Kirim format pesanan ke penjual",
      icon: "chatbox-ellipses-outline" as const,
    },
    {
      text: "Lakukan pembayaran & tunggu chip masuk",
      icon: "cash-outline" as const,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cara Order</Text>
      {steps.map((step, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name={step.icon} size={28} color="#4a90e2" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.step}>Langkah {index + 1}</Text>
            <Text style={styles.desc}>{step.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TutorialOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    backgroundColor: "#eef3f9",
    textAlign: "center",
    color: "#333",
    borderRadius:10,
    paddingVertical:10
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e8f0fb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  step: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
});
