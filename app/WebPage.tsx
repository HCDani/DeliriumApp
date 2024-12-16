import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import RNFS from 'react-native-fs';

const WebPage = ({ route, navigation }) => {
  const { offlineSlug } = route.params;
  const [localFilePath, setLocalFilePath] = useState(null);

  useEffect(() => {
    if (offlineSlug) {
      // Check if offline file exists
      const offlinePagePath = `${RNFS.DocumentDirectoryPath}/${offlineSlug}.html`;
      RNFS.exists(offlinePagePath).then(exists => {
        if (exists) {
          setLocalFilePath(`file://${offlinePagePath}`);  // Prefix with 'file://' to indicate a local file
        } else {
          console.log('Offline page not found');
        }
      });
    }
  }, [offlineSlug]);

  return (
    <WebView
      source={{ uri: localFilePath || 'https://delirium.hock.hu/some-page' }}  // Load local file or fallback to online URL
      style={{ flex: 1 }}
    />
  );
};

export default WebPage;
