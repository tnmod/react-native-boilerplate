import { Text, View } from "react-native";
import { SettingItem } from "../options";
import React from "react";
import { useTheme } from "@/themes/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ItemSetting = (
  {
    item,
    index,
    onItemPress
  }:
    {
      item: SettingItem,
      index: number,
      onItemPress: (item: SettingItem) => void;
    }
) => {
  const { colors, changeTheme, variant } = useTheme();


  return (
    <TouchableOpacity
      disabled={item.type === 'BLOCK'}
      activeOpacity={0.6}
      onPress={() => onItemPress && onItemPress(item)}
      style={{
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 28,
        paddingVertical: 20,
        gap: 18
      }}>
      <FontAwesomeIcon
        icon={item.icon}
        color={colors.text}
        size={24} />
      <View>
        <Text style={{
          color: colors.text,
          fontSize: 20,
        }}>{item.title}</Text>
        <Text 
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: colors.text,
          fontSize: 13,
        }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}