import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CopyRights = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </Text>
    </View>
  );
};

export default CopyRights;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 12,
    color: "#666",
  },
});
