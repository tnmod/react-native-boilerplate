import {DefaultTheme as PaperDefaultTheme, MD3Theme, useTheme} from "react-native-paper";
import {DefaultTheme as NavigationTheme, Theme} from "@react-navigation/native";
import {MD3Colors} from "react-native-paper/lib/typescript/types";
import { darkColors, lightColors } from "./colors";

export type CustomColors = {
  button: string;
  buttonContrast: string;
  black: string;
  white: string;
  textGray: string;
  text: string;
  alwaysBlack: string;
  alwaysWhite: string;
};

export type AppThemeColors = MD3Colors & CustomColors;
export type AppTheme = MD3Theme & {
  colors: AppThemeColors;
};

export const darkTheme: AppTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  version: 3,
  colors: darkColors,
};

export const lightTheme: AppTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  version: 3,
  colors: lightColors,
};

export const navigationTheme: Theme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: lightColors.background,
  },
};

export const useAppTheme = () => useTheme<AppTheme>();
