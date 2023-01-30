import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

import { TextStyle } from 'react-native';

export const isSmallScreen = Platform.OS === 'android' || height < 700;

const isIOS = Platform.OS === 'ios';

const common = StyleSheet.create({
  dropShadow: {
    shadowColor: '#979797',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.6,
    elevation: 4,
  },
  blue: {
    color: '#2E69FF',
  },
  white: {
    color: '#FFFFFF',
  },
  gray: {
    color: '#747474',
  },
  orange: {
    color: '#FF5200',
  },
  lightText: {
    color: '#6F7CA7',
  },
  fixed: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 5,
  },
});

export const SHADOWS = StyleSheet.create({
  CardShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  BoldShadow: {
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    elevation: 10,
  },
  CircleHoverShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
  },
});

export const GUTTER = 24;

export const colors = {
  blue: "#2E69FF",
  gray: "#707070",
  avatarColors: [
    "#E187CD",
    "#64A87F",
    "#DB5151",
    "#467DCE",
    "#2EB785",
    "#EF8254",
    "#A86EF2",
    "#FFB800",
    "#E45ABE",
    "#37ADC7",
  ],
  //   DiscountGreen: '#1AA430',
  //   Red: '#E52452',
  //   ToppingsBlue: '#2E75FF',
  //   White: '#FFFFFF',
  //   Gray1: '#EEEFF4',
  //   Gray2: '#D4D5DB',
  //   Gray3: '#9C9EA6',
  //   Gray4: '#6E7079',
  //   Gray5: '#6B6B78',
  //   Gray6: '#505059',
  //   Gray7: '#E6E8EF',
  //   NewGray2: '#818490',
  //   GrayText: '#6E7079',
  //   Black: 'rgba(27,28,30,1)',
  //   Live: '#FF307B',
  //   OutlineGray: '#DDDDE2',
  //   DarkRed: '#843535',
  //   Pink: '#FF507A',
  //   Heart: '#FF7373',
  //   NewLightGray: '#EEEFF4',
  //   LighterGray: '#9C9EA6',
  //   BlackNew: 'rgba(27,28,30,1)',
  //   key: '#93B5FF',
  //   light: '#EDF0FF',
  //   text: '#000000',
  //   toppingsBlue: '#2E75FF',
  //   lightGray: '#A9A9B9',
  //   subheading: '#6B6B78',
  //   gray4: '#9393A1',
  //   bg: '#FFFFFF',
  //   newbg: '#EEEFF4',
  //   satKey: '#598DFF',
  //   lightText: '#4E5668',
  //   keyGradient: ['#5A8DFF', '#A15AFF'],
  //   gradient1: ['#FF9776', '#FF67A7'],
  //   gradient2: ['#3BD6E0', '#67A4FF'],
  //   gradient3: ['#5EDA53', '#1CDACE'],
  //   gradient4: ['#9070ED', '#D24BD4'],
  //   gradient5: ['#5370DA', '#904BE8'],
  //   gradient6: ['#E24949', '#D45DAC'],
  //   gradient7: ['#0CB3BE', '#A343EE'],
  //   gradient8: ['#35D7FB', '#FF84FA'],
  //   gradient9: ['#FFCD4C', '#FF7575'],
  //   gradient10: ['#E249DC', '#EB7160'],
  //   gradient11: ['#5370DA', '#6229AB'],
  //   gradient12: ['#1E959C', '#1A51BB'],
  //   gradient13: ['#536FFF', '#53ADFF'],
  //   gradient14: ['#53ADFF', '#536FFF'],
  //   purple: '#9F5CFF',
  //   alert: '#B02323',
  //   keyGreen: '#2CBB99',
  //   tappable: '#E4E4E4',
  //   money: '#2BCC75',
};

// export const convertFontWeight = (weight: TextStyle['fontWeight']) => {
//   return isIOS ? weight : undefined;
// };

export const font = StyleSheet.create({
  h1: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 32,
    color: "#000",
  },
  h2: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 24,
  },
  p: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
  },
  secondaryP: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    color: "#707070",
  },
  menuH2: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "700",
  },
  menuH3: {
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
  },
  columnHeaders: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    color: "#707070",
  },
  detail: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
  },
  small: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
  },
  black: {
    fontWeight: "900",
  },
  extraBold: {
    fontWeight: "800",
  },
  bold: {
    fontWeight: "700",
  },
  semibold: {
    fontWeight: "600",
  },
  medium: {
    fontWeight: "500",
  },
  regular: {
    fontWeight: "400",
  },
  italic: {
    fontStyle: "italic",
  },
  underline: {
    textDecorationLine: "underline",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  left: {
    textAlign: "left",
  },
  wrap: {
    flexWrap: "wrap",
  },
  white: {
    color: "#FFF",
  },
  gray: {
    color: colors.gray,
  },
  blue: {
    color: colors.blue,
  },
});

export default common;
