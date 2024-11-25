// app/screens/WebViewScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

type WebViewScreenProps = {
  route: {
    params: {
      url: string; // The URL to load in the WebView
    };
  };
};

const WebViewScreen: React.FC<WebViewScreenProps> = ({ route }) => {
  const { url } = route.params; // Retrieve the URL passed via navigation params

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
