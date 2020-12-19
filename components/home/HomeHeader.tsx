import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { CurrentLocation } from '../../types';

type HomeHeaderProps = {
  currentLocation: CurrentLocation;
};

export const HomeHeader = ({ currentLocation }: HomeHeaderProps) => (
  <>
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerImageContainer}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>

      <View style={styles.headerLocationContainer}>
        <View style={styles.headerLocationTextWrapper}>
          <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.headerRightImageContainer}>
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
  },
  headerImageContainer: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  headerLocationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLocationTextWrapper: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  headerRightImageContainer: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});