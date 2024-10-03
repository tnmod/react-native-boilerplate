import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import {MMKV} from 'react-native-mmkv';
import {darkColors, lightColors} from './colors';
import {Theme} from '@/types/themes/theme';
import {Colors} from '@/types/themes/colors';

export type Variant = 'dark' | 'default' | 'light';

export type ThemeState = {
  variant: Variant;
  colors: Colors;
};

type Context = Theme & {
  changeTheme: (variant: Variant) => void;
  variant: Variant;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

type Props = PropsWithChildren<{
  storage: MMKV;
}>;

export const ThemeProvider = ({storage, children}: Props) => {
  const initialVariant =
    (storage.getString('themeVariant') as Variant) || 'default';
  const [variant, setVariant] = useState<Variant>(initialVariant);

  const changeTheme = (variant: Variant) => {
    setVariant(variant);
    storage.set('themeVariant', variant);
  };

  const theme: ThemeState = useMemo(() => {
    return {
      variant,
      colors: variant === 'dark' ? darkColors : lightColors,
    };
  }, [variant]);

  const value = useMemo(() => {
    return {
      ...theme,
      changeTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value as Context}>
      {children}
    </ThemeContext.Provider>
  );
};
