import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    titre: string
}

export function Button({ titre,...rest } : ButtonProps){
    return (
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={.7}           
            {...rest}
        >
            <Text style={styles.buttonText}>
                { titre }
            </Text>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff9900',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }    
});
