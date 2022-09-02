import React, { useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CategoryData, RootTabParamList } from "../../types";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/common/Header";
import { COLORS, icons, SIZES } from "../../constants";
import { HomeRestaurantsList } from "../components/home/HomeRestaurantsList";
import { HomeMainCategories } from "../components/home/HomeMainCategories";
import { categoryData, initialCurrentLocation, restaurantsWithCategories } from "../../dummy-data";
import { TextInput } from "react-native-gesture-handler";

type SearchScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, "Search">;

type SearchScreenProps = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [restaurants, setRestaurants] = useState(restaurantsWithCategories);
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

  function onSelectCategory(category: CategoryData) {
    const restaurantList = restaurantsWithCategories.filter(restaurant =>
      restaurant.categories.includes(category.id)
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header leftIcon={icons.search} rightIcon={null} headerText={"Buscar"} />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: SIZES.padding * 2,
            marginBottom: SIZES.padding,
          }}
        >
          <TextInput
            autoFocus
            autoCorrect={false}
            style={{
              borderWidth: 1,
              width: "80%",
              marginTop: SIZES.padding,
              marginRight: SIZES.padding,
            }}
          />
          <Button title="Search" onPress={() => {}} />
        </View>
        {/* <HomeMainCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(category: CategoryData) => onSelectCategory(category)}
        /> */}
        <HomeRestaurantsList
          restaurants={restaurants}
          onPress={item =>
            navigation.navigate("Restaurant", {
              item,
              currentLocation,
            })
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray4,
    // paddingHorizontal: SIZES.padding * 2,
  },
});

export { SearchScreen };
