import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SearchScreen } from "../screens";
import { COLORS, icons } from "../../constants";
import { ScreenTab } from "../../types";
import { TabBarCustomButtonActive } from "../components/tabs/TabBarCustomButtonActive";
import { TabBarCustomButton } from "../components/tabs/TabBarCustomButton";
import { CustomTabBar } from "../components/tabs/CustomTabBar";

const Tab = createBottomTabNavigator();

const screens: ScreenTab[] = [
  {
    screenName: "Home",
    screenComponent: HomeScreen,
    screenIcon: "cutlery",
  },
  {
    screenName: "Search",
    screenComponent: SearchScreen,
    screenIcon: "search",
  },
  {
    screenName: "Like",
    screenComponent: HomeScreen,
    screenIcon: "like",
  },
  {
    screenName: "User",
    screenComponent: HomeScreen,
    screenIcon: "user",
  },
];

export const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.tabBar,
        }}
        tabBar={props => <CustomTabBar {...props} />}
      >
        {screens.map(({ screenName, screenComponent, screenIcon }) => (
          <Tab.Screen
            key={`tab-${screenName}`}
            name={screenName}
            component={screenComponent}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={icons[screenIcon]}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                  }}
                />
              ),
              tabBarButton: ({ accessibilityState, ...props }) =>
                accessibilityState?.selected ? (
                  <TabBarCustomButtonActive {...props} />
                ) : (
                  <TabBarCustomButton {...props} />
                ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 0,
  },
});
