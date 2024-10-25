// Screeningsvaerktojer.js
import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useApiData, { API_URLS, STORAGE_KEYS } from '../../hooks/useApiData'; // Adjust the import path
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import hjemme from "../screens/hjemme";
import hospital from "../screens/hospital";
import intensiv from "../screens/intensiv";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function App({ navigation }) {
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified.
        // Now the button includes an `onPress` handler to update go back to the home sceen.
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.goBack()} title="Home" />
          ),
        });
      }, [navigation]);

    return (
        <View>
            <Text> Screeningsværktøjer page! </Text>
        </View>
    );
}