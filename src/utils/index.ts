import * as RNLocalize from "react-native-localize";

export const getDefaultDeviceLanguage = () => {
  const userLocales = RNLocalize.getLocales();
  const userLanguages = userLocales.map(locale => locale.languageCode);
  let currentLanguage = "en";
  for (let language of userLanguages) {
    if (userLanguages.includes(language)) {
      currentLanguage = language as any;
      break;
    }
  }
  return currentLanguage;
};