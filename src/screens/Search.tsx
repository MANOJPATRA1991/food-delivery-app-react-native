import React, { useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategoryData, RootTabParamList } from "../../types";
import { Header } from "../components/common/Header";
import { COLORS, icons } from "../../constants";
import { HomeRestaurantsList } from "../components/home/HomeRestaurantsList";
import { categoryData, initialCurrentLocation, restaurantsWithCategories } from "../../dummy-data";

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
      <SafeAreaView style={style.container}>
        <Header leftIcon={icons.search} rightIcon={null} headerText={"Buscar"} />
        <View style={style.childContainer}>
          <TextInput
            style={[
              style.inputContainer,
              { borderBottomColor: COLORS.primary, color: COLORS.black },
            ]}
            // onFocus={() => setBottomColorUser(COLORS.primary)}
            // onBlur={() => setBottomColorUser(COLORS.black)}
            autoCorrect={false}
            autoFocus
            placeholderTextColor={COLORS.darkgray}
            placeholder="Ej. Hot Dogs"
          />
        </View>
        {/* <View
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
        </View> */}
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray4,
    // paddingHorizontal: SIZES.padding * 2,
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 35,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
});
export { SearchScreen };
