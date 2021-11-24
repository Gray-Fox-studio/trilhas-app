import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Trilhas from '../../pages/DrawerStack/HomePages/Trilhas';
import Sobre from '../../pages/DrawerStack/HomePages/Sobre';
import Quiz from "../../pages/DrawerStack/HomePages/Quiz";
import Instituicao from "../../pages/DrawerStack/HomePages/Instituicao";
import planet from '../../../assets/Icons/Planet.png';
import Icon from '../../../assets/Icons/Quitbranco.png';
import ButtonSobre from "../../Components/ButtonsDrawer/ButtonSobre";
import { DrawerActions } from "@react-navigation/native";

import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();


const CustomDrawer = (props, focused) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={estilos.container}>
                <Image source={planet} style={estilos.ImageStyle} />
            </View>
            <DrawerItemList {...props} />
            <View style={estilos.containerButton}>
                <TouchableOpacity style={estilos.buttonStyles}
                    onPress={()=> props.navigation.dispatch(DrawerActions.closeDrawer)}  
                >
                    <Image source={Icon} style={estilos.IconQuit} />
                    <Text style={estilos.textStyle}>Sair</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#04252f',
                },
                drawerPosition: "right",
            }}
            initialRouteName="Instituição"
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Trilhas" component={Trilhas}
                options={{
                 
                }}

            />
            <Drawer.Screen name="Sobre" component={Sobre}
            />
            <Drawer.Screen name="Quiz" component={Quiz}
            />
            <Drawer.Screen name="Instituição" component={Instituicao}
            />
        </Drawer.Navigator>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButton: {
        alignItems: 'center',
    },
    buttonStyles: {
        backgroundColor: '#577590',
        borderRadius: 10,
        width: 230,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ImageStyle: {
        height: 200,
        width: 200,
        top: -50,
        right: -130,
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