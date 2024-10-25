// kommunikationMedDelirose.tsx
import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import useApiData, { API_URLS, STORAGE_KEYS } from '../../hooks/useApiData'; // Adjust the import path

export default function App({ navigation }) {
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified.
        // Now the button includes an `onPress` handler to update go back to the home sceen.
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.goBack()} title="Home" />
          ),
        });
      }, [navigation]);

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Kommunikation!</Text>
        </View>
    );
}
