import React from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
import { StyleSheet } from "react-native";

export const TabBarCustomButton = ({ children, onPress }: BottomTabBarButtonProps) => (
  <TouchableOpacity style={styles.customButton} activeOpacity={1} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  customButton: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
