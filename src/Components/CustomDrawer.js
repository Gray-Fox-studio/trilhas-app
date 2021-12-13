import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import planet from '../../assets/Icons/Planet.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from '../../assets/Icons/Quitbranco.png'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView style={estilos.buttons} {...props}>
                <Image source={planet} style={estilos.planetS} />
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>
            <View style={{ padding: 20,}}>
                <TouchableOpacity style={estilos.buttonStyles}
                >
                    <Image source={Icon} style={estilos.IconQuit} />
                    <Text style={estilos.textStyle}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;

const estilos = StyleSheet.create({
    buttons: {
        marginHorizontal: 10,
        marginTop: 30,
    },
    planetS: {
        height: 200,
        width: 200,
        top: -70,
        right: -120,

    },
    buttonStyles: {
        backgroundColor: '#577590',
        borderRadius: 5,
        width: 240,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconQuit: {
        width: 30,
        height: 25,
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 17,
    }
});

