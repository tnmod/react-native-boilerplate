import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBolt, faCircleInfo, faGlobe, faPalette, faStars } from "@fortawesome/pro-regular-svg-icons";


export enum SettingId {
  THEME = 'theme',
  LANGUAGE = 'language',
  ABOUT = 'about',
  RATE = 'rate',
  VERSION = 'version',
}

export type SettingItem = {
  id: SettingId;
  title: string;
  description: string;
  icon: IconProp;
  type: TStatus;
}

export const SettingData: SettingItem[] = [
  {
    id: SettingId.THEME,
    title: 'Giao diện',
    description: 'Thay đổi giao diện của ứng dụng',
    icon: faPalette,
    type: "ACTIVE",
  },
  {
    id: SettingId.LANGUAGE,
    title: 'Ngôn ngữ',
    description: 'Thay đổi ngôn ngữ của ứng dụng',
    icon: faGlobe,
    type: "ACTIVE",
  },
  {
    id: SettingId.RATE,
    title: 'Đánd giá',
    description: 'Hãy cho chúng tôi biết cảm nhận của bạn về ứng dụng',
    icon: faStars,
    type: "ACTIVE",
  },
  {
    id: SettingId.ABOUT,
    title: 'Về app này',
    description: 'Đây là ứng dụng nhỏ được phát triển bởi cá nhân',
    icon: faCircleInfo,
    type: "ACTIVE",
  },
  {
    id: SettingId.VERSION,
    title: 'Phiên bản',
    description: '0.0.2',
    icon: faBolt,
    type: "BLOCK",
  }
]


// export const SettingData: SettingItem[] = [
//   {
//     id: SettingId.THEME,
//     title: 'Theme',
//     description: 'Change theme of the app',
//     icon: faPalette,
//     type: "ACTIVE",
//   },
//   {
//     id: SettingId.LANGUAGE,
//     title: 'Language',
//     description: 'Change language of the app',
//     icon: faGlobe,
//     type: "ACTIVE",
//   },
//   {
//     id: SettingId.RATE,
//     title: 'Rate',
//     description: 'Rate the app',
//     icon: faStars,
//     type: "ACTIVE",
//   },
//   {
//     id: SettingId.ABOUT,
//     title: 'About',
//     description: 'About the app',
//     icon: faCircleInfo,
//     type: "ACTIVE",
//   },
//   {
//     id: SettingId.VERSION,
//     title: 'Version',
//     description: '1.0.0',
//     icon: faBolt,
//     type: "BLOCK",
//   }
// ]