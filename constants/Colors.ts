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
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    button: '#0a7ea4', // Primary Button Color
    border: '#E5E5E5', // Border Color
    error: '#FF4D4F', // Error Messages
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    button: '#4F4F4F', // Primary Button Color for Dark Mode
    border: '#3E3E3E', // Border Color
    error: '#FF4D4F', // Error Messages
  },

};
  const Gradients = {
    light: {
      backgroundGradient: ['#fff', '#f3f4f6'], // Light gradient
    },
    dark: {
      backgroundGradient: ['#151718', '#1F1F1F'], // Dark gradient
    },
  };

  export { Gradients };

