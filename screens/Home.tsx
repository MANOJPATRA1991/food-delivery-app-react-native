import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { HomeMainCategories } from '../components/home/HomeMainCategories';
import { HomeRestaurantsList } from '../components/home/HomeRestaurantsList';
import { COLORS, icons } from '../constants';
import { CategoryData, RootTabParamList } from '../types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  categoryData,
  initialCurrentLocation,
  restaurantsWithCategories,
} from '../dummy-data';
import { Header } from '../components/common/Header';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [restaurants, setRestaurants] = useState(restaurantsWithCategories);
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

  function onSelectCategory(category: CategoryData) {
    const restaurantList = restaurantsWithCategories.filter((restaurant) =>
      restaurant.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={icons.nearby}
        rightIcon={icons.basket}
        headerText={currentLocation.streetName}
      />
      <HomeMainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category: CategoryData) =>
          onSelectCategory(category)
        }
      />
      <HomeRestaurantsList
        restaurants={restaurants}
        onPress={(item) =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray4,
  },
});
