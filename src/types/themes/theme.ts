import { AppThemeColors } from "../../themes/theme.config";

export type Theme = {
  colors: AppThemeColors;
};

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;
