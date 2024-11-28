/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight, 
      symptomer: '#ADD8E6', // Add your custom color
      screeningsværktøjer: '#FFA500', // Add your custom color
      årsagen: '#90EE90', // Add your custom color
      kommunikation: '#FF6347', // Add your custom color
      handlinger: '#9370DB', // Add your custom color
      læsMere: '#FFD700', // Add your custom color
      pårørende: '#4682B4', // Add your custom color
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
