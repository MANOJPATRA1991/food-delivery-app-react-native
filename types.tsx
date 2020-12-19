import { icons } from './constants';
import { Restaurant } from './screens';

export type RootTabParamList = {
  Home: undefined;
  Restaurant: { item: Restaurant, currentLocation: CurrentLocation };
};

export interface ScreenTab {
  screenName: string;
  screenComponent: any;
  screenIcon: keyof typeof icons;
};

export type CurrentLocation = {streetName: string; gps: Location};

export type CategoryData = {id: number; name: string; icon: any};

export type Location = {latitude: number; longitude: number};

export type Courier = {avatar: any; name: string};

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
  location: Location;
  courier: Courier;
  menu: Menu[];
};
