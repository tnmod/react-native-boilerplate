import { CardStyleInterpolators, StackNavigationOptions, StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/main/home";
import React from "react";
import { SettingsScreen } from "@/screens/main/settings";

const Stack = createStackNavigator();

const horiAnimation: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={horiAnimation}
      />
    </Stack.Navigator>
  )
}

export type AppStackParamList = {
  Home: undefined;
  Settings: undefined;
}

export type AppNavigatorProps = StackNavigationProp<AppStackParamList>;