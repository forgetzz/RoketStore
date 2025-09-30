import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";

// Aktifkan animasi di Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// Data FAQ
const faqData = [
  {
    id: 1,
    title: "Kenapa pilih Roket Store?",
    content:
      "Roket Store adalah toko chip paling terpercaya se-Indonesia. Aman, cepat, dan pelayanan ramah.",
  },
  {
    id: 2,
    title: "Apa benefit belanja di Roket Store?",
    content:
      "Harga terjangkau, banyak promo, support 24 jam, serta jaminan transaksi aman 100%.",
  },
  {
    id: 3,
    title: "Apakah transaksi dijamin aman?",
    content:
      "Ya, semua transaksi dilindungi sistem keamanan dan hanya melalui rekening resmi Roket Store.",
  },
  {
    id: 4,
    title: "Berapa lama proses transaksi?",
    content:
      "Proses top-up hanya memakan waktu 1-5 menit. Jika ada kendala, hubungi admin via WhatsApp.",
  },
  {
    id: 5,
    title: "Metode pembayaran apa saja yang tersedia?",
    content:
      "Kami mendukung transfer bank (BCA, BRI, Mandiri), e-Wallet (GoPay, OVO, Dana, ShopeePay), dan QRIS.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {faqData.map((item) => {
        const isOpen = open.includes(item.id);
        return (
          <View key={item.id} style={styles.card}>
            <Pressable onPress={() => toggle(item.id)} style={styles.header}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.icon}>{isOpen ? "−" : "+"}</Text>
            </Pressable>
            {isOpen && (
              <View style={styles.contentBox}>
                <Text style={styles.content}>{item.content}</Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#111827",
    flex: 1,
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B5563",
    marginLeft: 10,
  },
  contentBox: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 8,
  },
  content: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
});
