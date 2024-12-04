import React, { useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

const WebPage = ({ route, navigation }) => {
  const { url } = route.params || { url: 'https://example.com' }; // Extract URL passed from navigation
  const webViewRef = useRef(null); // Reference to WebView
  const [canGoBack, setCanGoBack] = useState(false); // State to track if WebView can go back
  
  console.log('Navigated to WebView with URL:', url);
  
  React.useEffect(() => {
    // Add a BackHandler event listener
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Prevent default behavior
      }
      navigation.goBack(); // If WebView can't go back, go back in the stack
      return true;
    });

    // Cleanup the BackHandler on component unmount
    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <WebView
      ref={webViewRef} // Assign reference
      source={{ uri: url }}
      style={{ flex: 1 }}
      onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)} // Update state on navigation
    />
  );
};

export default WebPage;
