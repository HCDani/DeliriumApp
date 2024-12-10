import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import {Colors} from '@/constants/Colors';
type ButtonProps = {
    label: string;
    color: string;
    onPress: () => void;
    theme?: 'light' | 'dark'; // Optional prop with a default value
};
export default function Button({ label, color, onPress, theme = 'light' }: ButtonProps) {
    const themeColors = theme === 'dark' ? Colors.dark : Colors.light;
    return (
        <View style={[styles.buttonContainer]}>
            <Pressable
                style={[styles.button, { backgroundColor: color }]}
                onPress={onPress || (() => alert('You pressed a button.'))}
            >
                <Text style={[styles.buttonLabel]}>{label}</Text>
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
        fontWeight: 'bold',
    },
});
