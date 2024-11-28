import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function Parorende ({ navigation }) {
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
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Pårørende  page! </Text>
        </View>
    );
}