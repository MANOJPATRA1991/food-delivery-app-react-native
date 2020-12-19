import React from 'react';
import {
  FlatList, StyleSheet
} from 'react-native';
import { SIZES } from '../../constants';
import { Restaurant } from '../../types';
import { HomeRestaurantItem } from './HomeRestaurantItem';

type HomeRestaurantsListProps = {
  restaurants: Restaurant[];
  onPress: (item: Restaurant) => void;
};

export const HomeRestaurantsList = ({
  restaurants,
  onPress,
}: HomeRestaurantsListProps) => {
  function renderItem({item}: {item: Restaurant}) {
    return (
      <HomeRestaurantItem 
        item={item} 
        onPress={(item) => onPress(item)} 
      />
    );
  }

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item: Restaurant) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 30
  },
});
