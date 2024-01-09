import { Dimensions, Text, View, TouchableOpacity, Modal } from "react-native"
import React, { useEffect } from "react"
import _ from "lodash";
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEmptySet, faGear, faRepeat } from "@fortawesome/pro-regular-svg-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "@/navigations/app.navigation";
import { useTheme } from "@/themes/useTheme";

const { width, height } = Dimensions.get('screen');

export const HomeScreen = () => {
  const { variant, colors, changeTheme } = useTheme();

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.primary,
    }}>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: colors.secondary,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          changeTheme(variant === 'dark' ? 'light' : 'dark');
        }}>
        <Text style={{
          fontSize: 20,
          color: colors.text,
        }}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  )
}