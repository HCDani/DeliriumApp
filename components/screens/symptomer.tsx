// Symptoms.tsx
import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import useApiData, { API_URLS, STORAGE_KEYS } from '../../hooks/useApiData'; // Adjust the import path


export default function Symptoms({ navigation }) {
    const { data, loading, error } = useApiData(API_URLS.SYMPTOMS, STORAGE_KEYS.SYMPTOMS_DATA); // Use the hook

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
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Symptoms!</Text>
            {data && <Text style={{ marginTop: 16 }}>{JSON.stringify(data)}</Text>}
            <Button
                title="Go to ICD-10 (NOT WORKING, NAVIGATION MISSING)"
                onPress={() => navigation.navigate('iCD10')} // Navigate to ICD-10
                color="#007BFF" // Optional: change the button color
            />
        </View>
    );
}
