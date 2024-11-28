import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
/*import { Colors } from '../constants/Colors'; */



type ButtonProps = {
    label: string;
    color: string;
    onPress: () => void;
};
export default function CustomButton({ label, color,onPress }: ButtonProps) { // Accept 'color' as a new prop
    return (
       
            <Pressable
                style={[styles.button, { backgroundColor: color }]} // Apply the dynamic color
                onPress={onPress}>
            
                <Text style={styles.label}>{label}</Text>
            </Pressable>
    
    );
}

const styles = StyleSheet.create({
   
    button: {
        borderRadius: 10,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


/*export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});*/