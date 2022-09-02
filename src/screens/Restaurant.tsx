import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/common/Header";
import { RestaurantFoodInfo } from "../components/restaurant/RestaurantFoodInfo";
import { COLORS, icons } from "../../constants";
import { CurrentLocation, OrderItem, Restaurant, RootTabParamList } from "../../types";

type RestaurantScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, "Restaurant">;

type RestaurantScreenRouteProp = RouteProp<RootTabParamList, "Restaurant">;

type RestaurantScreenProps = {
  route: RestaurantScreenRouteProp;
  navigation: RestaurantScreenNavigationProp;
};

export const RestaurantScreen = ({ route, navigation }: RestaurantScreenProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation | null>(null);
  const [orderItems, setOrderItems] = React.useState<OrderItem[]>([]);

  useEffect(() => {
    const { item, currentLocation } = route.params;
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={icons.back}
        rightIcon={icons.list}
        headerText={restaurant?.name}
        leftPress={() => navigation.goBack()}
      />
      <RestaurantFoodInfo
        restaurant={restaurant}
        orderItems={orderItems}
        setOrderItems={(items: OrderItem[]) => setOrderItems(items)}
        placeOrder={() => navigation.navigate("OrderDelivery", { restaurant, currentLocation })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray2,
  },
});
