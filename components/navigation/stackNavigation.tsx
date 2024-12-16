import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Text } from 'react-native';

// Import your screens
import home from "../screens/deliriumvaerktojet";
import WebPage from "../screens/webPage"; // Import WebPage component
import { fetchAndSavePages } from '../savedData/wordPressOfflineSaver'; // Import offline saver

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  useEffect(() => {
    // Trigger the process of saving pages for offline use on app launch
    fetchAndSavePages();
  }, []);

  return (
      <Stack.Navigator initialRouteName="Deliriumværktøjet">
        <Stack.Screen name="Deliriumværktøjet" component={home} />
        <Stack.Screen name="WebView" component={WebPage} options={{ title: "Web Page" }} />
      </Stack.Navigator>
  );
};

export default App;
