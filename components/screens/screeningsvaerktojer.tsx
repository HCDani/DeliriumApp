// Screeningsvaerktojer.js
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import useApiData, { API_URLS, STORAGE_KEYS } from '../../hooks/useApiData'; // Adjust the import path

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
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Screeningsværktøjer</Text>
            {data && <Text style={{ marginTop: 16 }}>{JSON.stringify(data)}</Text>}
        </View>
    );
}
