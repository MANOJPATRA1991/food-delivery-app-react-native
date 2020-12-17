import { icons } from "../constants";

export interface ScreenTab {
  screenName: string;
  screenComponent: React.FC;
  screenIcon: keyof typeof icons;
}
