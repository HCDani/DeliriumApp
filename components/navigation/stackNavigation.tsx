import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';;

import WebViewScreen from "../screens/WebViewScreen";


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{ title: 'WebView' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;