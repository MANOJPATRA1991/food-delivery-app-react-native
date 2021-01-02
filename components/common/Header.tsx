import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

type HeaderProps = {
  leftIcon: any;
  rightIcon: any;
  headerText?: string;
  leftPress?: Function;
};

export const Header = ({ leftIcon, rightIcon, headerText, leftPress }: HeaderProps) => (
  <>
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.headerImageContainer}
        onPress={() => !!leftPress && leftPress()}
      >
        <Image
          source={leftIcon}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>

      <View style={styles.headerLocationContainer}>
        <View style={styles.headerLocationTextWrapper}>
          <Text style={{...FONTS.h3}}>{headerText}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.headerRightImageContainer}>
        <Image
          source={rightIcon}
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
