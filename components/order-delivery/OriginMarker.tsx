import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LatLng, Marker } from 'react-native-maps';
import { icons } from '../../constants';

type OriginMarkerProps = {
  coordinate: LatLng;
  angle: number
};

export const OriginMarker = ({ coordinate, angle }: OriginMarkerProps) => (
  <Marker
    coordinate={coordinate}
    anchor={{ x: 0.5, y: 0.5 }}
    flat={true}
    rotation={angle}
  >
    <Image
      source={icons.car}
      style={styles.markerImage}
    />
  </Marker>
);

const styles = StyleSheet.create({
  markerImage: {
    width: 40,
    height: 40,
  },
});