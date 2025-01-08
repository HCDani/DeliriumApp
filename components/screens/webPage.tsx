import React, { useRef, useState, useEffect } from 'react';
import { BackHandler, Alert, View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import RNFS from 'react-native-fs';

const WebPage = ({ route, navigation }) => {
  const { url } = route.params; // Extract URL passed from navigation
  const webViewRef = useRef(null); // Reference to WebView
  const [canGoBack, setCanGoBack] = useState(false); // State to track if WebView can go back
  const [source, setSource] = useState(null); // Default source starts as null
  const [loading, setLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Track if there's an error
  const [errorDetails, setErrorDetails] = useState(null); // Store WebView error details
  const [retryCount, setRetryCount] = useState(0); // Retry counter to trigger rechecks

  const checkConnectivityAndSetSource = async () => {
    setLoading(true); // Start loading
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      setSource({ uri: url }); // Online URL
      setHasError(false); // Reset error state
      setErrorDetails(null); // Reset error details
    } else {
      // Sanitize URL to create a valid file name (allowing dashes)
      const sanitizedSlug = url.split('/').pop()?.replace(/[^a-zA-Z0-9-_]/g, '_') || 'default'; // Allow dashes in slug
      const localFileName = `page_${sanitizedSlug}.html`; // Ensure valid file name
      const localFilePath = `${RNFS.DocumentDirectoryPath}/${localFileName}`;

      const fileExists = await RNFS.exists(localFilePath);
      if (fileExists) {
        setSource({ uri: `file://${localFilePath}` }); // Local file
        setHasError(false); // Reset error state
        setErrorDetails(null); // Reset error details
      } else {
        console.log(`Offline file not found at: ${localFilePath}`);
        setHasError(true); // Set error state if no fallback
        setErrorDetails('Offline file not found.'); // Provide detailed error
      }
    }
    setLoading(false); // Stop loading
  };

  useEffect(() => {
    console.log("Checking connectivity and source...");
    checkConnectivityAndSetSource();
  }, [url, retryCount]); // Retry logic triggered by retryCount changes

  useEffect(() => {
    console.log("Setting up back handler...");
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Prevent default behavior
      }
      navigation.goBack(); // Navigate back in stack
      return true;
    });

    return () => backHandler.remove(); // Cleanup
  }, [canGoBack]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (hasError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Unable to load content.</Text>
        <Text style={styles.errorText}>
          {errorDetails || 'Check your internet connection or try again later.'}
        </Text>
        <Button
          title="Go back"
          onPress={() => {
            setHasError(false); // Reset error state
            setRetryCount((prev) => prev + 1); // Trigger retry logic
          }}
        />
      </View>
    );
  }

  return (
    <WebView
      ref={webViewRef}
      source={source}
      style={{ flex: 1 }}
      allowFileAccess={true} // Allow access to local files
      onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.log("WebView error:", nativeEvent);
        setErrorDetails(`Error: ${nativeEvent.description} (Code: ${nativeEvent.code})`);
        setHasError(true); // Handle WebView load errors
      }}
      onHttpError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.log("HTTP error:", nativeEvent);
        setErrorDetails(`HTTP Error: ${nativeEvent.statusCode} (${nativeEvent.url})`);
        setHasError(true); // Handle HTTP errors
      }}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default WebPage;
