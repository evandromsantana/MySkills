import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#131921',
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',        
        fontSize: 20,
        fontWeight: 'bold',
       
    }
});