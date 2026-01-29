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
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Royal() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const itemsRoyal = [
    { id: "1", jumlah: "120M", harga: "Rp 10.000", wa: "6282299734968" },
    { id: "2", jumlah: "170M", harga: "Rp 15.000", wa: "6282299734968" },
    { id: "3", jumlah: "250M", harga: "Rp 20.000", wa: "6282299734968" },
    { id: "4", jumlah: "350M", harga: "Rp 25.000", wa: "6282299734968" },
    { id: "5", jumlah: "400M", harga: "Rp 30.000", wa: "6282299734968" },
    { id: "6", jumlah: "500M", harga: "Rp 33.000", wa: "6282299734968" },
    { id: "7", jumlah: "530M", harga: "Rp 35.000", wa: "6282299734968" },
    { id: "8", jumlah: "600M", harga: "Rp 40.000", wa: "6282299734968" },
    { id: "9", jumlah: "650M", harga: "Rp 45.000", wa: "6282299734968" },
    { id: "10", jumlah: "750M", harga: "Rp 50.000", wa: "6282299734968" },
    { id: "11", jumlah: "800M", harga: "Rp 55.000", wa: "6282299734968" },
    { id: "12", jumlah: "900M", harga: "Rp 60.000", wa: "6282299734968" },
    { id: "13", jumlah: "1B", harga: "Rp 65.000", wa: "6282299734968" },
    { id: "14", jumlah: "2B", harga: "Rp 130.000", wa: "6282299734968" },
    { id: "15", jumlah: "3B", harga: "Rp 195.000", wa: "6282299734968" },
    { id: "16", jumlah: "4B", harga: "Rp 260.000", wa: "6282299734968" },
    { id: "17", jumlah: "5B", harga: "Rp 325.000", wa: "6282299734968" },
    { id: "18", jumlah: "6B", harga: "Rp 390.000", wa: "6282299734968" },
    { id: "19", jumlah: "7B", harga: "Rp 455.000", wa: "6282299734968" },
    { id: "20", jumlah: "8B", harga: "Rp 520.000", wa: "6282299734968" },
    { id: "21", jumlah: "9B", harga: "Rp 585.000", wa: "6282299734968" },
    { id: "22", jumlah: "10B", harga: "Rp 640.000", wa: "6282299734968" },
    { id: "23", jumlah: "15B", harga: "Rp 960.000", wa: "6282299734968" },
    { id: "24", jumlah: "20B", harga: "Rp 1.280.000", wa: "6282299734968" },
    { id: "25", jumlah: "25B", harga: "Rp 1.600.000", wa: "6282299734968" },
    { id: "26", jumlah: "30B", harga: "Rp 1.920.000", wa: "6282299734968" },
    { id: "27", jumlah: "35B", harga: "Rp 2.240.000", wa: "6282299734968" },
    { id: "28", jumlah: "40B", harga: "Rp 2.560.000", wa: "6282299734968" },
    { id: "29", jumlah: "45B", harga: "Rp 2.880.000", wa: "6282299734968" },
    { id: "30", jumlah: "50B", harga: "Rp 3.200.000", wa: "6282299734968" },
    { id: "31", jumlah: "100B", harga: "Rp 6.350.000", wa: "6282299734968" },
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
    const url = `https://wa.me/${selectedItem.wa}?text=${encodeURIComponent(pesan)}`;
    Linking.openURL(url);
    setModalVisible(false);
    setBuyerName("");
    setBuyerId("");
    setPaymentMethod("Dana");
  };

  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#f9fafb" },
      ]}
    >
      <SafeAreaView>
        <FlatList
          data={itemsRoyal}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <LinearGradient
              colors={["#ff512f", "#dd2476"]}
              style={styles.banner}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.bannerText}>🔥 Royal Dreams 🔥</Text>
              <Text style={styles.bannerSub}>
                Proses Cepat · Admin Ramah · 100% Aman & Terpercaya
              </Text>
            </LinearGradient>
          }
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                { backgroundColor: isDark ? "#1e1e1e" : "#fff" },
              ]}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/138/138292.png",
                }}
                style={styles.icon}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.cardTitle,
                    { color: isDark ? "#fff" : "#111827" },
                  ]}
                >
                  {item.jumlah}
                </Text>
                <Text
                  style={[
                    styles.cardText,
                    { color: isDark ? "#ccc" : "#6b7280" },
                  ]}
                >
                  {item.harga}
                </Text>
              </View>

              <TouchableOpacity onPress={() => openModal(item)} activeOpacity={0.8}>
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
          <View
            style={[
              styles.modalBox,
              { backgroundColor: isDark ? "#1e1e1e" : "#fff" },
            ]}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 12,
                color: isDark ? "#fff" : "#000",
              }}
            >
              Isi Data Pemesanan
            </Text>

            <TextInput
              placeholder="Nama Akun"
              placeholderTextColor={isDark ? "#999" : "#888"}
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? "#2a2a2a" : "#fff",
                  color: isDark ? "#fff" : "#000",
                  borderColor: isDark ? "#444" : "#ddd",
                },
              ]}
              value={buyerName}
              onChangeText={setBuyerName}
            />
            <TextInput
              placeholder="ID Akun"
              placeholderTextColor={isDark ? "#999" : "#888"}
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? "#2a2a2a" : "#fff",
                  color: isDark ? "#fff" : "#000",
                  borderColor: isDark ? "#444" : "#ddd",
                },
              ]}
              value={buyerId}
              onChangeText={setBuyerId}
            />

            <Text
              style={{
                marginTop: 12,
                marginBottom: 4,
                color: isDark ? "#fff" : "#000",
              }}
            >
              Metode Pembayaran:
            </Text>
            <View
              style={[
                styles.pickerWrapper,
                {
                  backgroundColor: isDark ? "#2a2a2a" : "#fff",
                  borderColor: isDark ? "#444" : "#ddd",
                },
              ]}
            >
              <Picker
                selectedValue={paymentMethod}
                onValueChange={(itemValue) => setPaymentMethod(itemValue)}
                dropdownIconColor={isDark ? "#fff" : "#000"}
                style={{ color: isDark ? "#fff" : "#000" }}
              >
                <Picker.Item label="BRI" value="BRI" />
                <Picker.Item label="QRIS" value="QRIS" />
                <Picker.Item label="BNI" value="BNI" />
                <Picker.Item label="BSI" value="BSI" />
                <Picker.Item label="BCA" value="BCA" />
                <Picker.Item label="Mandiri" value="Mandiri" />
                <Picker.Item label="SEABANK" value="SEABANK" />
                <Picker.Item label="Linkaja" value="Linkaja" />
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
  container: { flex: 1, marginTop: -37 },
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
  cardTitle: { fontWeight: "bold", fontSize: 16 },
  cardText: { fontSize: 14, marginTop: 2 },
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
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
    overflow: "hidden",
  },
});
