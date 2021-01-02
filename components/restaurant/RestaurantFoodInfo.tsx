import React from 'react';
import { Image, StyleSheet, View, Text, Animated } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { AppStyles } from '../../AppStyles';
import { COLORS, FONTS, icons, SIZES, } from '../../constants';
import { Menu, OrderItem, Restaurant } from '../../types';
import { RestaurantFoodQuantity } from './RestaurantFoodQuantity';
import { RestaurantOrderSection } from './RestaurantOrderSection';

type RestaurantFoodInfoProps = {
  restaurant: Restaurant | null;
  orderItems: OrderItem[];
  setOrderItems: (orderItems: OrderItem[]) => void;
  placeOrder: () => void;
};

export const RestaurantFoodInfo = ({
  restaurant,
  orderItems,
  setOrderItems,
  placeOrder,
}: RestaurantFoodInfoProps) => {
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  const setOrder = (action: '+' | '-', {menuId, price}: Menu) => {
    const itemIndex = orderItems.findIndex(
      (item: OrderItem) => item.menuId === menuId,
    );
    if (itemIndex > -1) {
      const item = orderItems[itemIndex];
      item.qty =
        action === '+' ? item.qty + 1 : item.qty > 0 ? item.qty - 1 : item.qty;
      item.total = item.qty * price;
      if (item.qty === 0) {
        orderItems.splice(itemIndex, 1);
      }
    } else {
      if (action === '+') {
        const newItem = {menuId, qty: 1, price, total: price};
        orderItems.push(newItem);
      }
    }
    setOrderItems([...orderItems]);
  };

  const getOrderQty = (menuId: number): number => {
    return (
      orderItems.find((item: OrderItem) => item.menuId === menuId)?.qty || 0
    );
  };

  const getBasketItemCount = () =>
    orderItems.reduce((a, b) => a + (b.qty || 0), 0);

  const getTotal = () => orderItems.reduce((a, b) => a + (b.total || 0), 0);

  return (
    <>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {restaurant?.menu.map((item: Menu, index: number) => (
          <View key={`menu-${index}`} style={styles.container}>
            <View style={styles.menuContainer}>
              {/* Food image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={styles.menuImage}
              />

              {/* Quantity */}
              <RestaurantFoodQuantity
                onEdit={(e) => setOrder(e, item)}
                quantity={getOrderQty(item.menuId)}
              />
            </View>

            <ScrollView style={{zIndex: -1}}>
              {/* Name and Description */}
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  {item.name} - ${item.price.toFixed(2)}
                </Text>
                <Text style={{...FONTS.body3, textAlign: 'center'}}>
                  {item.description}
                </Text>
              </View>

              {/* Calories */}
              <View style={styles.caloriesContainer}>
                <Image source={icons.fire} style={styles.caloriesImage} />
                <Text style={styles.caloriesText}>
                  {item.calories.toFixed(2)} cal
                </Text>
              </View>
            </ScrollView>
          </View>
        ))}
      </Animated.ScrollView>
      <View>
        <View style={styles.dotContainer}>
          {restaurant?.menu.map((item: Menu, index: number) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: 'clamp',
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                style={{
                  ...styles.dot,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                  opacity: opacity,
                }}
              />
            );
          })}
        </View>
        <RestaurantOrderSection
          basketCount={getBasketItemCount()}
          total={getTotal()}
          placeOrder={() => placeOrder()}
        />
        {isIphoneX() && <View style={styles.fillEmptySpace}></View>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    alignItems: 'center',
  },
  menuContainer: {
    height: SIZES.height * 0.35,
    ...AppStyles.shadow,
  },
  menuImage: {
    width: SIZES.width,
    height: '100%',
  },
  descriptionContainer: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: SIZES.padding * 2,
  },
  descriptionText: {
    marginVertical: 10,
    textAlign: 'center',
    ...FONTS.h2,
  },
  caloriesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  caloriesImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  caloriesText: {
    ...FONTS.body3,
    color: COLORS.darkgray,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding,
    paddingVertical: 15,
  },
  dot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6,
  },
  fillEmptySpace: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white,
  },
});