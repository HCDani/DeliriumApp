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

