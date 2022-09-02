import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LatLng, Region } from "react-native-maps";
import { OrderDeliveryMap } from "../components/order-delivery/OrderDeliveryMap";
import { OrderDestinationHeader } from "../components/order-delivery/OrderDestinationHeader";
import { OrderDeliveryInfo } from "../components/order-delivery/OrderDeliveryInfo";
import { CurrentLocation, Restaurant, RootTabParamList } from "../../types";
import { OrderDeliveryMapZoomButtons } from "../components/order-delivery/OrderDeliveryMapZoomButtons";

type OrderDeliveryScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, "OrderDelivery">;

type OrderDeliveryScreenRouteProp = RouteProp<RootTabParamList, "OrderDelivery">;

type OrderDeliveryScreenProps = {
  route: OrderDeliveryScreenRouteProp;
  navigation: OrderDeliveryScreenNavigationProp;
};

export const OrderDeliveryScreen = ({ route, navigation }: OrderDeliveryScreenProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [streetName, setStreetName] = useState<string>("");
  const [fromLocation, setFromLocation] = useState<LatLng | null>(null);
  const [toLocation, setToLocation] = useState<LatLng | null>(null);
  const [region, setRegion] = useState<Region>();
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const { restaurant, currentLocation } = route.params;

    const { gps: fromLoc, streetName: street } = currentLocation as CurrentLocation;
    const toLoc = restaurant?.location as LatLng;

    const mapRegion: Region = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function zoomIn() {
    const mapRegion: Region = {
      latitude: (region as Region).latitude,
      longitude: (region as Region).longitude,
      latitudeDelta: (region as Region).latitudeDelta / 2,
      longitudeDelta: (region as Region).longitudeDelta / 2,
    };

    setRegion(mapRegion);
  }

  function zoomOut() {
    const mapRegion: Region = {
      latitude: (region as Region).latitude,
      longitude: (region as Region).longitude,
      latitudeDelta: (region as Region).latitudeDelta * 2,
      longitudeDelta: (region as Region).longitudeDelta * 2,
    };
    setRegion(mapRegion);
  }

  return (
    <SafeAreaView style={styles.container}>
      <OrderDeliveryMap
        mapRegion={region}
        destination={toLocation as LatLng}
        origin={fromLocation as LatLng}
        updateOrigin={(loc: LatLng) => setFromLocation(loc)}
        updateDuration={(duration: number) => setDuration(duration)}
      />

      <OrderDestinationHeader streetName={streetName} duration={duration} />

      <OrderDeliveryInfo
        restaurant={restaurant}
        onCall={() => navigation.navigate("Home")}
        onMessage={() => navigation.navigate("Home")}
      />

      <OrderDeliveryMapZoomButtons zoomIn={() => zoomIn()} zoomOut={() => zoomOut()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
