import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from '../../../assets/Icons/SetaVerde.png';

export default function ButtonTrilhas() {
    return (
        <View style={estilos.container}>
            <View style={estilos.bordaicon}>
                <Image source={Icon} style={estilos.iconStyle} />
            </View>
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute'
    },
    iconStyle: {
        width: 40,
        height: 40,
    },
    textoStyle: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    bordaicon: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 50,
        marginBottom: 15,
    }
})