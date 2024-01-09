import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, TextInput, View } from "react-native"
import React from "react"
import { useTheme } from "@/themes/useTheme";
import { faChevronLeft, faSearch } from "@fortawesome/pro-regular-svg-icons";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const ListHeaderSetting = (
  {
    value,
    onChangeText
  }: Props
) => {
  const { colors, changeTheme, variant } = useTheme();
  return (
    <View style={{ gap: 20 }}>
      <View
        style={{
          paddingHorizontal: 20,
          gap: 30,
        }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          color={colors.text}
          size={24} />
        <Text
          style={{
            color: colors.text,
            fontSize: 34,
            fontWeight: '500',
          }}>Settings</Text>
      </View>
      <View style={{
        paddingVertical: 11,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
        backgroundColor: colors.white,
        marginHorizontal: 20,
        borderRadius: 50,
      }}>
        <FontAwesomeIcon
          icon={faSearch}
          color={colors.text + "90"} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={"Search Settings"}
          placeholderTextColor={colors.text + "90"}
          style={{
            padding: 0,
            fontSize: 19,
            flex: 1,
            color: colors.text,
          }}
        />
      </View>
    </View>
  )
}