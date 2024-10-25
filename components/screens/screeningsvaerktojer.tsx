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

export default function Screeningsvaerktojer() {
    const { data, loading, error } = useApiData(API_URLS.SCREENINGS, STORAGE_KEYS.SCREENINGS_DATA); // Use the hook

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>{error}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text> Screeningsværktøjer page! </Text>
        </View>
    );
}