import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { Restaurant } from '../../types';

type OrderDeliveryInfoProps = {
  restaurant: Restaurant | null;
  onCall: () => void;
  onMessage: () => void;
};

export const OrderDeliveryInfo = ({ restaurant, onCall, onMessage }: OrderDeliveryInfoProps) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <View style={styles.topInfoWrapper}>
        <View style={styles.imageContainer}>
          <Image source={restaurant?.courier.avatar} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text style={{...FONTS.h4}}>{restaurant?.courier.name}</Text>
            <Text style={styles.restaurantName}>{restaurant?.name}</Text>
          </View>
          <View style={styles.courierRatingContainer}>
            <Image source={icons.star} style={styles.ratingImage} />
            <Text style={{...FONTS.body3}}>{restaurant?.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => onCall()}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.button, ...styles.messageButton}}
          onPress={() => onMessage()} 
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  topInfoWrapper: {
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: (SIZES.radius * 12.5) / 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: SIZES.padding,
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  courierRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  ratingImage: {
    width: 18,
    height: 18,
    tintColor: COLORS.primary,
    marginRight: SIZES.padding,
  },
  restaurantName: {
    color: COLORS.darkgray,
    ...FONTS.body4,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 50,
    width: SIZES.width * 0.5 - SIZES.padding * 4,
    marginRight: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    ...FONTS.h4,
    color: COLORS.white,
  },
  messageButton: {
    backgroundColor: COLORS.secondary,
    width: SIZES.width * 0.5 - SIZES.padding * 5,
  },
});