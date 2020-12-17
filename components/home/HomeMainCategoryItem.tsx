import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { CategoryData } from '../../dummy-data';
import { AppStyles } from '../../AppStyles';

type HomeMainCategoryProps = {
  item: CategoryData;
  selectedCategory: CategoryData;
  onSelectCategory: (item: CategoryData) => void;
};

export const HomeMainCategoryItem = ({
  item,
  selectedCategory,
  onSelectCategory,
}: HomeMainCategoryProps) => (
  <TouchableOpacity
    style={{
      ...styles.itemContainer,
      backgroundColor: (selectedCategory?.id === item.id) ? COLORS.primary : COLORS.white,
    }}
    onPress={() => onSelectCategory(item)}>
    <View style={{
      ...styles.item,
      backgroundColor: (selectedCategory?.id === item.id) ? COLORS.white : COLORS.lightGray,
    }}>
      <Image 
        source={item.icon} 
        resizeMode="contain" 
        style={styles.itemImage} 
      />
    </View>
    <Text 
      style={{
        ...styles.itemText,
        color: (selectedCategory?.id === item.id) ? COLORS.white : COLORS.black,
      }}
    >
      {item.name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
    ...AppStyles.shadow,
  },
  item: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  itemImage: {
    width: 30,
    height: 30,
  },
  itemText: {
    marginTop: SIZES.padding,
    ...FONTS.body5,
  },
});