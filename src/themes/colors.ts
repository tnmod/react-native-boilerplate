import { DefaultTheme } from 'react-native-paper';
import { AppThemeColors } from './theme.config';

export const lightColors: AppThemeColors = {
  ...DefaultTheme.colors,
  primary: '#EAF4FB',
  secondary: '#CFE7F5',
  button: '#1DA1F2',
  buttonContrast: '#CFE7F5',
  black: '#000000',
  white: '#FFFFFF',
  text: '#000000',
  textGray: '#474951',
  alwaysBlack: '#000000',
  alwaysWhite: '#FFFFFF',
};

export const darkColors: AppThemeColors = {
  ...DefaultTheme.colors,
  primary: '#000000',
  secondary: '#031B38',
  button: '#1DA1F2',
  buttonContrast: '#031B38',
  black: '#FFFFFF',
  white: '#2D3542',
  text: '#FFFFFF',
  textGray: '#C5C8CC',
  alwaysBlack: '#000000',
  alwaysWhite: '#FFFFFF',
};
