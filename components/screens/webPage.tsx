import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

const WebPage = ({ route, navigation }) => {
  const { offlineSlug, url } = route.params; // Receive offlineSlug or URL from navigation
  const [content, setContent] = useState(null); // State to hold offline content

  useEffect(() => {
    if (offlineSlug) {
      // If offlineSlug is provided, try to load the offline page
      const filePath = `${RNFS.DocumentDirectoryPath}/${offlineSlug}.html`;

      RNFS.readFile(filePath, 'utf8')
        .then((offlineContent) => {
          setContent(offlineContent); // Set the offline content if file exists
        })
        .catch(() => {
          // If there's an error loading the file (file not found), show an alert
          Alert.alert('Error', 'Offline content not found');
        });
    }
  }, [offlineSlug]);

  // If offline content is available, load it in the WebView, else load the URL
  return content ? (
    <WebView
      originWhitelist={['*']}
      source={{ html: content }} // Render offline HTML content
      style={{ flex: 1 }}
    />
  ) : (
    <WebView
      source={{ uri: url }} // If no offline content, load the online URL
      style={{ flex: 1 }}
    />
  );
};

export default WebPage;
