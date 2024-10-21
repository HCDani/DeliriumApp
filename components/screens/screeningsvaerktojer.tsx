// Screeningsvaerktojer.js
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Screeningsvaerktojer() {
    return (
        <WebView 
            originWhitelist={['*']} // Allow all origins
            source={{ uri: 'https://en.danishdeliriumassociation.org/til-p%C3%A5rr%C3%B8nde' }} // Load Google.com directly
            startInLoadingState={true}
            renderLoading={() => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
        />
    );
}
