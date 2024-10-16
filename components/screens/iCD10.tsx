// ICD.tsx
import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import useApiData, { API_URLS, STORAGE_KEYS } from '../../hooks/useApiData'; // Adjust the import path

export default function ICD({ navigation }) {
    const { data, loading, error } = useApiData(API_URLS.SCREENINGS, STORAGE_KEYS.SCREENINGS_DATA); // Use the hook for ICD-10

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
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ICD-10 Data</Text>
            {data && <Text style={{ marginTop: 16 }}>{JSON.stringify(data)}</Text>}
            <Button
                title="Go back"
                onPress={() => navigation.goBack()} // Navigate back to the previous screen
                color="#007BFF" // Optional: change the button color
            />
        </View>
    );
}
