import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';
import { reduxStorage } from '@/redux/mmkv';
import { getDefaultDeviceLanguage } from '@/utils';

const ns = Object.keys(Object.values(resources)[0]);

export const defaultNS = ns[0];

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  init: () => {
  },
  detect: function (callback: (lang: string) => void) {
    return new Promise(async () => {
      try {
        const deviceLanguage = getDefaultDeviceLanguage();
        const language: string = await (reduxStorage.getItem("language") || deviceLanguage.toString());
        callback(language);
      } catch (error) {
        callback("en");
      }
    });

  },
  cacheUserLanguage: async function (language: string) {
    try {
      await reduxStorage.setItem("language", language);
    } catch (error) {
    }
  },
};

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
  ns,
  defaultNS,
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ),
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
  },

  compatibilityJSON: 'v3',
});

export default i18n;
