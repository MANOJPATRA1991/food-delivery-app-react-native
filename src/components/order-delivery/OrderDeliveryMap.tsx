import React, { RefObject, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Region, LatLng } from "react-native-maps";
import { COLORS, GOOGLE_API_KEY, SIZES } from "../../../constants";
import { DestinationMarker } from "./DestinationMarker";
import { OriginMarker } from "./OriginMarker";

type OrderDeliveryMapProps = {
  mapRegion: Region | undefined;
  destination: LatLng;
  origin: LatLng;
  updateOrigin: (loc: LatLng) => void;
  updateDuration: (duration: number) => void;
};

export const OrderDeliveryMap = ({
  mapRegion,
  destination,
  origin,
  updateOrigin,
  updateDuration,
}: OrderDeliveryMapProps) => {
  const mapView = useRef<MapView>(null);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(0);

  const calculateAngle = (coordinates: LatLng[]) => {
    const [start, end] = coordinates;
    const dx = start.latitude - end.latitude;
    const dy = start.longitude - end.longitude;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const onReady = (result: { coordinates: LatLng[]; duration: number }) => {
    const { coordinates, duration } = result;
    updateDuration(duration);

    if (!isReady) {
      // Fit route into maps
      mapView.current?.fitToCoordinates(coordinates, {
        edgePadding: {
          right: SIZES.width / 20,
          bottom: SIZES.height / 4,
          left: SIZES.width / 20,
          top: SIZES.height / 8,
        },
      });

      // Re-position the car
      const [nextLoc] = coordinates;

      if (coordinates.length >= 2) {
        const angle = calculateAngle(coordinates);
        setAngle(angle);
      }

      updateOrigin(nextLoc);
      setIsReady(true);
    }
  };

  useEffect(() => {
    mapView.current?.animateToRegion(mapRegion as Region, 200);
  }, [mapRegion]);

  return (
    <MapView
      ref={mapView}
      provider={PROVIDER_GOOGLE}
      initialRegion={mapRegion}
      style={styles.container}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_API_KEY}
        strokeWidth={5}
        strokeColor={COLORS.primary}
        optimizeWaypoints={true}
        onReady={result => onReady(result)}
      />
      <DestinationMarker coordinate={destination} />
      <OriginMarker coordinate={origin} angle={angle} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
