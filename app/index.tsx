import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Recomended from "@/components/Recomended";

import CopyRights from "@/components/CopyRights";
import Faq from "@/components/faq";
import Testimoni from "@/components/Testimoni";
import RunningText from "../components/TextAnimated";

import TutorialOrder from "@/components/TutorialOrder";
import Coursel from "./Coursel";

export default function App() {
  const router = useRouter();

  const goToModal = () => {
    router.push("/HigsDomino");
  };
  const goToBongkar = () => {
    router.push("/Bongkar");
  };
  const goToRoyal = () => {
    router.push("/Royal");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Carousel */}
        <Coursel />
        <RunningText />
        <TouchableOpacity style={styles.buttonRow} onPress={goToBongkar}>
          <Text style={styles.textLink}>BONGKAR</Text>
        </TouchableOpacity>
        <View style={styles.buttonB}>
          <TouchableOpacity style={styles.buttonRow} onPress={goToModal}>
            <Image
              source={require("../assets/images/domino.jpg")}
              style={styles.icon}
            />
            <Text style={styles.textLink}>High Domino</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRow} onPress={goToRoyal}>
            <Image
              source={require("../assets/images/royal.png")}
              style={styles.icon}
            />
            <Text style={styles.textLink}>Royal Dreams</Text>
          </TouchableOpacity>
        </View>

        <Recomended />
        <TutorialOrder />
        <Testimoni />
        <Faq />
        <CopyRights/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { paddingVertical: 10, paddingHorizontal: 10 },
  buttonB: {
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },

  icon: { width: 40, height: 40, marginRight: 7, borderRadius: 15 },

  textLink: {
    color: "white",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
});
