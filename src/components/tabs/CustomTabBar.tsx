import React from "react";
import {
  BottomTabBar,
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";
import { isIphoneX } from "react-native-iphone-x-helper";

export const CustomTabBar = (props: BottomTabBarProps<BottomTabBarOptions>) =>
  isIphoneX() ? (
    <View>
      <View style={styles.container}></View>
      <BottomTabBar {...props} />
    </View>
  ) : (
    <BottomTabBar {...props} />
  );

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white,
  },
});
