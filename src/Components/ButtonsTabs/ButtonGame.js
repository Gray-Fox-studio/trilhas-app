import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from '../../../assets/Icons/GameBranco.png';
import Icon2 from '../../../assets/Icons/Game.png';

export default function ButtonGame({ focused }) {
    return (
        <View style={estilos.container}>
            <Image source={focused ? Icon : Icon2} style={estilos.iconStyle} />
            <Text style={estilos.textoStyle}> Game </Text>
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconStyle: {
        width: 32,
        height: 25,
        marginBottom: 5,
    },
    textoStyle: {
        color: '#FFFFFF',
        fontSize: 12,
    }
})