import { useTheme } from '@/themes/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text, View } from 'react-native';

export const SettingThemes = () => {
  const { colors, changeTheme, variant } = useTheme();

  return (
    <View style={{ paddingBottom: 16 }}>
      <Text style={{
        color: colors.alwaysBlack,
        fontSize: 22,
        fontWeight: '500',
        paddingHorizontal: 28,
        paddingTop: 20,
        paddingBottom: 12,
      }}>Themes</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          changeTheme('light');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 28,
          paddingVertical: 12,
          gap: 18
        }}>
        <View style={{
          width: 24,
          height: 24,
          backgroundColor: colors.alwaysBlack
        }}
        />
        <Text style={{
          color: colors.alwaysBlack,
          fontSize: 19,
          fontWeight: '500',
        }}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          changeTheme('dark');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 28,
          paddingVertical: 12,
          gap: 18
        }}>
        <View style={{
          width: 24,
          height: 24,
          backgroundColor: colors.alwaysBlack
        }}
        />
        <Text style={{
          color: colors.alwaysBlack,
          fontSize: 19,
          fontWeight: '500',
        }}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
}