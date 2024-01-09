import { FlatList, Text, TextInput, ToastAndroid, View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { useTheme } from "@/themes/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronLeft, faSearch } from "@fortawesome/pro-regular-svg-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { SettingData, SettingId, SettingItem } from "./options"
import { ItemSetting } from "./components/ItemSetting"
import { ListHeaderSetting } from "./components/Header"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView, useBottomSheetDynamicSnapPoints } from "@gorhom/bottom-sheet"
import { Controller, useForm } from "react-hook-form"
import { SettingThemes } from "./components/SettingThemes"

export const SettingsScreen = () => {
  const { colors, changeTheme, variant } = useTheme();
  const { top } = useSafeAreaInsets();
  const [data, setData] = useState<SettingItem[]>(SettingData);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%'], []);
  const { control, handleSubmit } = useForm();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleSearch = (data: Object) => {
    const { search } = data as { search: string };
    if (search && search.length > 0) {
      setData(SettingData.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
    } else {
      setData(SettingData);
    }
  }

  const onItemPress = (item: SettingItem) => {
    switch (item.id) {
      case SettingId.THEME:
        bottomSheetRef.current?.expand();
        break;
      case SettingId.LANGUAGE:
        ToastAndroid.show("Chức năng đang phát triển", ToastAndroid.SHORT);
        break;
      case SettingId.RATE:
        ToastAndroid.show("Chức năng đang phát triển", ToastAndroid.SHORT);
        break;
      case SettingId.ABOUT:
        ToastAndroid.show("Chức năng đang phát triển", ToastAndroid.SHORT);
        break;
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.primary,
      paddingTop: top + 16,
    }}>
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
            }}>
              {"Cài đặt"}
            </Text>
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
          <Controller
            name="search"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={"Tìm kiếm"}
                placeholderTextColor={colors.text + "90"}
                onChangeText={
                  (text) => {
                    onChange(text);
                    handleSearch({ search: text });
                  }
                }
                onBlur={onBlur}
                value={value}
                onSubmitEditing={handleSubmit(handleSearch)}
                style={{
                  padding: 0,
                  fontSize: 19,
                  flex: 1,
                  color: colors.text,
                }}
              />
            )}
          />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ItemSetting onItemPress={onItemPress} index={index} item={item} />}
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints as never}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        index={-1}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: 'transparent' }}
        handleComponent={() => null}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            style={{ zIndex: 1000 }}
            {...props}
            pressBehavior="close"
            opacity={0.4}
            disappearsOnIndex={-1} />
        )}>
        <BottomSheetView
          style={{
            backgroundColor: colors.background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          onLayout={handleContentLayout}
        >
          <SettingThemes />
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}