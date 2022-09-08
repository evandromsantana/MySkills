import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList 
} from 'react-native';

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
    id: string;
    name: string;
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill(){
        showLog();
        
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }


        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id ! == id
        ));
    }
    
    function showLog(){
        console.log("Passou por aqui");
    }
    

    useEffect(() => {
        const currentHour = new Date().getHours();
        
        if(currentHour <12){
            setGretting('Good morning');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon');
        }
        else{
            setGretting('Good night');
        }
    }, [])

    return (
        <View style={styles.container}>
            

            <Text style={styles.title}>
                Welcome, Evandro
            </Text>

            <Text style={styles.grettings} >
                { gretting}
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            
            <Button 
                titre="Add" 
                onPress={handleAddNewSkill}                               
            />
            

            <Text style={[ styles.title, { marginVertical: 40 }]}>
                MySkills
            </Text>

            
            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />
    
        </View>  
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,         
        backgroundColor: '#232F3E',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#EAEDED',
        color: '#131921',
        fontSize: 17,
        padding: Platform.OS === 'ios' ? 15 : 10, 
        marginTop: 30,
        borderRadius: 15
        
    },      
    grettings: {
        color: '#FFF'
    }
});