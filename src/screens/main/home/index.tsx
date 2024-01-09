import { Dimensions, Text, View, TouchableOpacity, Modal } from "react-native"
import React from "react"
import _ from "lodash";
import { useTheme } from "@/themes/useTheme";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { reduxStorage } from "@/redux/mmkv";

const { width, height } = Dimensions.get('screen');

export const HomeScreen = () => {
  const { variant, colors, changeTheme } = useTheme();
  const { t } = useTranslation("template");
  const language = useTranslation().i18n.language;
  console.log(language);
  

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
          changeLanguage(language === 'en' ? 'vi' : 'en').then(() => {
            reduxStorage.setItem("language", language === 'en' ? 'vi' : 'en');
          });
        }}>
        <Text style={{
          fontSize: 20,
          color: colors.text,
        }}>{t("template:HELLOWORLD")}</Text>
      </TouchableOpacity>
    </View>
  )
}