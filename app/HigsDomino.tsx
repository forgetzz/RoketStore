import { ThemedView } from "@/components/themed-view";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Linking,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  const itemsHiggs = [
    { id: "1", jumlah: "100M", harga: "Rp 7.000", wa: "6282299734968" },
    { id: "2", jumlah: "200M", harga: "Rp 15.000", wa: "6282299734968" },
    { id: "3", jumlah: "300M", harga: "Rp 20.000", wa: "6282299734968" },
    { id: "4", jumlah: "400M", harga: "Rp 25.000", wa: "6282299734968" },
    { id: "5", jumlah: "500M", harga: "Rp 30.000", wa: "6282299734968" },
    { id: "6", jumlah: "600M", harga: "Rp 35.000", wa: "6282299734968" },
    { id: "7", jumlah: "700M", harga: "Rp 40.000", wa: "6282299734968" },
    { id: "8", jumlah: "800M", harga: "Rp 45.000", wa: "6282299734968" },
    { id: "9", jumlah: "900M", harga: "Rp 50.000", wa: "6282299734968" },
    { id: "10", jumlah: "1B", harga: "Rp 55.000", wa: "6282299734968" },
    { id: "11", jumlah: "2B", harga: "Rp 110.000", wa: "6282299734968" },
    { id: "12", jumlah: "3B", harga: "Rp 165.000", wa: "6282299734968" },
    { id: "13", jumlah: "4B", harga: "Rp 220.000", wa: "6282299734968" },
    { id: "14", jumlah: "5B", harga: "Rp 275.000", wa: "6282299734968" },
    { id: "15", jumlah: "6B", harga: "Rp 330.000", wa: "6282299734968" },
    { id: "16", jumlah: "7B", harga: "Rp 385.000", wa: "6282299734968" },
    { id: "17", jumlah: "8B", harga: "Rp 440.000", wa: "6282299734968" },
    { id: "18", jumlah: "9B", harga: "Rp 495.000", wa: "6282299734968" },
    { id: "19", jumlah: "10B", harga: "Rp 550.000", wa: "6282299734968" },
    { id: "20", jumlah: "15B", harga: "Rp 825.000", wa: "6282299734968" },
    { id: "21", jumlah: "20B", harga: "Rp 1.100.000", wa: "6282299734968" },
    { id: "22", jumlah: "25B", harga: "Rp 1.375.000", wa: "6282299734968" },
    { id: "23", jumlah: "30B", harga: "Rp 1.650.000", wa: "6282299734968" },
    { id: "24", jumlah: "35B", harga: "Rp 1.925.000", wa: "6282299734968" },
    { id: "25", jumlah: "40B", harga: "Rp 2.200.000", wa: "6282299734968" },
    { id: "26", jumlah: "45B", harga: "Rp 2.475.000", wa: "6282299734968" },
    { id: "27", jumlah: "50B", harga: "Rp 2.750.000", wa: "6282299734968" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Dana");

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleOrder = () => {
    if (!selectedItem) return;
    const pesan = `Halo, saya mau pesan ${selectedItem.jumlah} (${selectedItem.harga})\nNama Akun: ${buyerName}\nID Akun: ${buyerId}\nMetode Pembayaran: ${paymentMethod}`;
    const url = `https://wa.me/${selectedItem.wa}?text=${encodeURIComponent(
      pesan
    )}`;
    Linking.openURL(url);
    setModalVisible(false);
    setBuyerName("");
    setBuyerId("");
    setPaymentMethod("Dana");
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={itemsHiggs}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <LinearGradient
              colors={["#ff512f", "#dd2476"]}
              style={styles.banner}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.bannerText}>🔥 HIGGS DOMINO 🔥</Text>
              <Text style={styles.bannerSub}>
                Proses Cepat · Admin Ramah · 100% Aman & Terpercaya
              </Text>
            </LinearGradient>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/138/138292.png",
                }}
                style={styles.icon}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.jumlah}</Text>
                <Text style={styles.cardText}>{item.harga}</Text>
              </View>

              <TouchableOpacity
                onPress={() => openModal(item)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#ff512f", "#dd2476"]}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Pesan</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>

      {/* Modal Input */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}
            >
              Isi Data Pemesanan
            </Text>

            <TextInput
              placeholder="Nama Akun"
              style={styles.input}
              value={buyerName}
              onChangeText={setBuyerName}
            />
            <TextInput
              placeholder="ID Akun"
              style={styles.input}
              value={buyerId}
              onChangeText={setBuyerId}
            />

            <Text style={{ marginTop: 12, marginBottom: 4 }}>
              Metode Pembayaran:
            </Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={paymentMethod}
                onValueChange={(itemValue) => setPaymentMethod(itemValue)}
              >
                <Picker.Item label="BRI" value="BRI" />
                <Picker.Item label="BCA" value="BCA" />
                <Picker.Item label="Mandiri" value="Mandiri" />
                <Picker.Item label="Dana" value="Dana" />
                <Picker.Item label="OVO" value="OVO" />
                <Picker.Item label="GoPay" value="GoPay" />
                <Picker.Item label="ShopeePay" value="ShopeePay" />
              </Picker>
            </View>

            <View style={{ flexDirection: "row", marginTop: 16, gap: 10 }}>
              <Button title="Batal" onPress={() => setModalVisible(false)} />
              <Button title="Kirim WA" onPress={handleOrder} />
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", marginTop: -37 },
  banner: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 12,
  },
  bannerText: { color: "#fff", fontWeight: "bold", fontSize: 22 },
  bannerSub: { color: "#f0f0f0", fontSize: 13, marginTop: 4 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 14,
    marginVertical: 8,
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: { width: 50, height: 50, marginRight: 14 },
  cardTitle: { fontWeight: "bold", fontSize: 16, color: "#111827" },
  cardText: { fontSize: 14, color: "#6b7280", marginTop: 2 },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 4,
    overflow: "hidden",
  },
});
