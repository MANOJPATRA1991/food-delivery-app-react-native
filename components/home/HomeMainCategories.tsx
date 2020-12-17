import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { FONTS, SIZES } from '../../constants';
import { CategoryData } from '../../dummy-data';
import { HomeMainCategoryItem } from './HomeMainCategoryItem';

type HomeMainCategoriesProps = {
  categories: CategoryData[];
  selectedCategory: CategoryData;
  onSelectCategory: (item: CategoryData) => void;
};

export const HomeMainCategories = ({ categories, selectedCategory, onSelectCategory }: HomeMainCategoriesProps) => {
  function renderItem({ item }: { item: CategoryData }) {
    return (
      <HomeMainCategoryItem
        item={item}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: CategoryData) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding * 2,
  },
  listContainer: {
    paddingVertical: SIZES.padding * 2,
  }
});