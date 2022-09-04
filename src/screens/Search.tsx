import React, { useEffect, useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard } from "react-native";

import { CategoryData, RootTabParamList, OrderItem, Restaurant, Menu } from "../../types";
import { Header } from "../components/common/Header";
import { COLORS, icons } from "../../constants";
import { HomeRestaurantsList } from "../components/home/HomeRestaurantsList";
import {
  categoryData,
  initialCurrentLocation,
  restaurantsWithCategories,
  restaurantData,
  allMenu,
} from "../../dummy-data";
import { RestaurantFoodInfo } from "../components/restaurant/RestaurantFoodInfo";

type SearchScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, "Search">;

type SearchScreenProps = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);
  const [bottomColor, setBottomColor] = useState<string>(COLORS.black);
  const [restaurant, setRestaurant] = useState<Restaurant | any>(allMenu);
  const [orderItems, setOrderItems] = React.useState<OrderItem[]>([]);

  const handleInputChangeText = (text: string) =>
    setRestaurant({
      ...allMenu,
      menu: allMenu.menu.filter((menu: Menu) =>
        menu.name.toLowerCase().includes(text.toLowerCase())
      ),
    });

  return (
    <>
      <SafeAreaView style={style.container}>
        <Header leftIcon={icons.search} rightIcon={null} headerText={"Buscar"} />
        <View style={style.childContainer}>
          <TextInput
            style={[style.inputContainer, { borderBottomColor: bottomColor, color: COLORS.black }]}
            onChangeText={handleInputChangeText}
            onFocus={() => setBottomColor(COLORS.primary)}
            onBlur={() => setBottomColor(COLORS.black)}
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
        {/* <HomeRestaurantsList
          restaurants={restaurants}
          onPress={item =>
            navigation.navigate("Restaurant", {
              item,
              currentLocation,
            })
          }
        /> */}
        <RestaurantFoodInfo
          restaurant={restaurant}
          orderItems={orderItems}
          setOrderItems={(items: OrderItem[]) => setOrderItems(items)}
          placeOrder={() => navigation.navigate("OrderDelivery", { restaurant, currentLocation })}
          horizontal={false}
          keyBoardActive={bottomColor === COLORS.black}
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
