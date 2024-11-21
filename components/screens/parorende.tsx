import * as React from 'react';
import { Button, Text, View } from 'react-native';

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
        <View>
            <Text> Pårørende  page! </Text>
        </View>
    );
}