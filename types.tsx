import { LatLng } from "react-native-maps";
import { icons } from "./constants";

export type RootTabParamList = {
  Home: undefined;
  Restaurant: { item: Restaurant; currentLocation: CurrentLocation };
  OrderDelivery: {
    restaurant: Restaurant | null;
    currentLocation: CurrentLocation | null;
  };
  Search: undefined;
};

export interface ScreenTab {
  screenName: string;
  screenComponent: any;
  screenIcon: keyof typeof icons;
}

export type CurrentLocation = { streetName: string; gps: LatLng };

export type CategoryData = { id: number; name: string; icon: any };

export type Courier = { avatar: any; name: string };

export type Menu = {
  menuId: number;
  name: string;
  photo: any;
  description: string;
  calories: number;
  price: number;
};

export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  categories: number[];
  categoryNames?: string[];
  priceRating: number;
  photo: any;
  duration: string;
  location: LatLng;
  courier: Courier;
  menu: Menu[];
};

export type OrderItem = {
  menuId: number;
  qty: number;
  price: number;
  total: number;
};
