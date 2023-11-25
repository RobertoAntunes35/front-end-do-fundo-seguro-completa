import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {AntDesign} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Actions () {

    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('AddDebitScreen')
        
        // Configuração de autenticação
    }

    return (
       <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.actionButton}
                onPress={handleSubmit}
                
                >
                    <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={35} color="#000"/>
                    </View>
                    <Text>Adicionar Titulos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.actionButton}
                >
                    <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={35} color="#000"/>
                    </View>
                    <Text>Compras</Text>
                </TouchableOpacity>



       </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 25
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

