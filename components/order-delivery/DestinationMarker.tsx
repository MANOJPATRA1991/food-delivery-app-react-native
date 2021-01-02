import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LatLng, Marker } from 'react-native-maps';
import { COLORS, icons } from '../../constants';

type DestinationMarkerProps = {
  coordinate: LatLng;
}

export const DestinationMarker = ({ coordinate }: DestinationMarkerProps) => (
  <Marker coordinate={coordinate}>
    <View style={styles.markerContainer}>
      <View style={styles.markerImageContainer}>
        <Image
          source={icons.pin}
          style={styles.markerImage}
        />
      </View>
    </View>
  </Marker>
);

const styles = StyleSheet.create({
  markerContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  markerImageContainer: {
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  markerImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.white,
  }
});