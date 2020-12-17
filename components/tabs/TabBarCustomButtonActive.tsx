import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants';

export const TabBarCustomButtonActive = ({ children, onPress }: BottomTabBarButtonProps) => (
  <View style={{flex: 1, alignItems: 'center'}}>
    <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
      <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
      <Svg width={75} height={61} viewBox="0 0 75 61">
        <Path
          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
          fill={COLORS.white}
        />
      </Svg>
      <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
    </View>

    <TouchableOpacity
      style={styles.customButtonActive}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  </View>
); 

const styles = StyleSheet.create({
  customButtonActive: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
});