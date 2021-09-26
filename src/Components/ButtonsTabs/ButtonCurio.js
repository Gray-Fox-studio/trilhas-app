import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from '../../../assets/Icons/Interroga.png';

export default function ButtonCurio() {
    return (
        <View style={estilos.container}>
            <Image source={Icon} style={estilos.iconStyle} />
            <Text style={estilos.textoStyle}> Curiosidade </Text>
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginBottom: 5,
    },
    textoStyle: {
        color: '#FFFFFF',
        fontSize: 12,
    }
})