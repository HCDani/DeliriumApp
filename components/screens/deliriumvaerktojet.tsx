import React from 'react';
import { View, Text, Button } from 'react-native';

const URL_BASE = "https://delirium.hock.hu/";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Symptomer"
        onPress={() => navigation.navigate('WebView', { offlineSlug: 'symptomer' })}
      />
      <Button
        title="Screeningsværktøjer"
        onPress={() => navigation.navigate('WebView', { offlineSlug: 'screeningsvaerktojer' })}
      />
      <Button
        title="Årsagen"
        onPress={() => navigation.navigate('WebView', { offlineSlug: 'arsagen' })}
      />
      <Button
        title="Kommunikation"
        onPress={() => navigation.navigate('WebView', { offlineSlug: 'kommunikation' })}
      />
      {/* Add more buttons for each page */}
    </View>
  );
}
