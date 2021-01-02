import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

type OrderDestinationHeaderProps = {
  streetName: string;
  duration: number;
};

export const OrderDestinationHeader = ({
  streetName,
  duration,
}: OrderDestinationHeaderProps) => (
  <View style={styles.container}>
    <View style={styles.contentWrapper}>
      <Image source={icons.red_pin} style={styles.headerImage} />
      <View style={styles.contentTextWrapper}>
        <Text style={styles.contentText}>{streetName}</Text>
        <Text style={styles.contentText}>{Math.ceil(duration)} mins</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: SIZES.padding / 2,
    position: 'relative',
    left: -10
  },
  contentTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentText: {
    ...FONTS.body3
  }
});