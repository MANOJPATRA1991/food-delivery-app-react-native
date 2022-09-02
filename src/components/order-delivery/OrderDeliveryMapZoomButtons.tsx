import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../../../constants";

type OrderDeliveryMapZoomButtonsProp = {
  zoomIn: () => void;
  zoomOut: () => void;
};

export const OrderDeliveryMapZoomButtons = ({
  zoomIn,
  zoomOut,
}: OrderDeliveryMapZoomButtonsProp) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => zoomIn()}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => zoomOut()}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: SIZES.height * 0.35,
    right: SIZES.padding * 2,
    width: 60,
    height: 130,
    justifyContent: "space-between",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...FONTS.body1,
  },
});
