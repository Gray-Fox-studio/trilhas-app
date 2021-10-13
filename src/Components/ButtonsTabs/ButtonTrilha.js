import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from '../../../assets/Icons/SetaBranca.png';
import Icon2 from '../../../assets/Icons/SetaVerde.png';

export default function ButtonTrilhas({ focused }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.bordaicon, { backgroundColor: focused ? '#90BE6D' : '#FFFFFF', padding: 20, borderRadius: 50, marginBottom: 15 }}>
                <Image source={focused ? Icon : Icon2} style={estilos.iconStyle} />
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
        borderRadius: 50,
        marginBottom: 15,
    }
})