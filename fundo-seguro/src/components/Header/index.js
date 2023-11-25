import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';


import {Feather} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const statusBarHeigh = StatusBar.currentHeight ? StatusBar.currentHeight + 22 :  50

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#38a69d',
        paddingTop: statusBarHeigh,
        flexDirection: 'row',
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingBottom: '25%'
    },
    content: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    username: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.6)',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 44 / 2
    }
})