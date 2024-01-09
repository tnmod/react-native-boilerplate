import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store, useAppSelector } from "@/redux/store";
import { appStorage } from "@/redux/mmkv";
import { darkTheme, lightTheme, navigationTheme } from "@/themes/theme.config";
import { ThemeProvider } from "@/themes/theme.provider";
import React from "react";
import '@/translations';
import { AppNavigator } from "@/navigations/app.navigation";
import { useTheme } from "@/themes/useTheme";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider storage={appStorage}>
          <NavigationContainer theme={navigationTheme}>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export const RootNavigator = () => {
  const { variant } = useTheme();

  return (
    <PaperProvider theme={variant == "dark" ? darkTheme : lightTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle={variant == "dark" ? "light-content" : "dark-content"} translucent backgroundColor={"transparent"} />
        <AppNavigator />
      </GestureHandlerRootView>
    </PaperProvider>
  )
}