import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { HomeHeader } from '../components/home/HomeHeader';
import { HomeMainCategories } from '../components/home/HomeMainCategories';
import { COLORS } from '../constants';
import { CategoryData, categoryData, initialCurrentLocation, restaurantData } from '../dummy-data';

export const Home = () => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData>(categories[0]);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

  function onSelectCategory(category: CategoryData) {
    let restaurantList = restaurantData.filter(restaurant => restaurant.categories.includes(category.id));
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader currentLocation={currentLocation} />
      <HomeMainCategories 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={(category: CategoryData) => onSelectCategory(category)}
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
