import { Picker } from "@react-native-picker/picker"; // expo install @react-native-picker/picker
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormBongkar = () => {
  const [gameName, setGameName] = useState("Higgs Domino");
  const [total, setTotal] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BCA");
  const [gameId, setGameId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");

  const handleSendWA = () => {
    if (
      !gameName ||
      !total ||
      !paymentMethod ||
      !gameId ||
      !accountNumber ||
      !accountName
    ) {
      Alert.alert("Isi semua form dulu");
      return;
    }

    const message = `Form Pembayaran:
Nama Game: ${gameName}
Total Bongkar: ${total}
Metode Pembayaran: ${paymentMethod}
ID Game Pengirim: ${gameId}
Nomor Rekening/eWallet: ${accountNumber}
Nama Pemilik Rekening: ${accountName}`;

    const phoneNumber = "6282299734982"; // ganti nomor WA tujuan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert("Gagal membuka WhatsApp");
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Bongkar</Text>

      {/* Nama Game */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gameName}
          onValueChange={(itemValue) => setGameName(itemValue)}
          style={
            Platform.OS === "ios" ? styles.pickerIOS : styles.pickerAndroid
          }
          dropdownIconColor="black"
        >
          <Picker.Item
            label="Higgs Domino"
            value="Higgs Domino"
            color="black"
          />
          <Picker.Item
            label="Royal Dreams"
            value="Royal Dreams"
            color="black"
          />
        </Picker>
      </View>

      {/* Total Bongkar */}
      <TextInput
        style={styles.input}
        placeholder="Contoh: 20B 200M"
        placeholderTextColor="#888"
        keyboardType="default"
        value={total}
        onChangeText={setTotal}
      />

      {/* Metode Pembayaran */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={paymentMethod}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
          style={
            Platform.OS === "ios" ? styles.pickerIOS : styles.pickerAndroid
          }
          dropdownIconColor="black"
        >
          <Picker.Item label="QRIS" value="QRIS" color="black" />
          <Picker.Item label="Dana" value="Dana" color="black" />
          <Picker.Item label="ShopeePay" value="ShopeePay" color="black" />
          <Picker.Item label="BNI" value="BNI" color="black" />
          <Picker.Item label="Linkaja" value="Linkaja" color="black" />
          <Picker.Item label="Mandiri" value="Mandiri" color="black" />
          <Picker.Item label="SEABANK" value="SEABANK" color="black" />
          <Picker.Item label="BCA" value="BCA" color="black" />
          <Picker.Item label="BRI" value="BRI" color="black" />
          <Picker.Item label="GoPay" value="GoPay" color="black" />
          <Picker.Item label="OVO" value="OVO" color="black" />
        </Picker>
      </View>

      {/* ID Game Pengirim */}
      <TextInput
        style={styles.input}
        placeholder="ID Game Pengirim"
        placeholderTextColor="#888"
        value={gameId}
        onChangeText={setGameId}
      />

      {/* Nomor Rekening / eWallet */}
      <TextInput
        style={styles.input}
        placeholder="Nomor Rekening / eWallet"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />

      {/* Nama Pemilik Rekening */}
      <TextInput
        style={styles.input}
        placeholder="Nama Pemilik Rekening"
        placeholderTextColor="#888"
        value={accountName}
        onChangeText={setAccountName}
      />

      {/* Tombol Kirim */}
      <TouchableOpacity style={styles.button} onPress={handleSendWA}>
        <Text style={styles.buttonText}>Kirim ke WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FormBongkar;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    textAlign: "center",
    color: "#222",
  },
  input: {
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 14,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  pickerAndroid: {
    height: 50,
    width: "100%",
  },
  pickerIOS: {
    height: 150,
    width: "100%",
  },
  button: {
    backgroundColor: "#e54646",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
