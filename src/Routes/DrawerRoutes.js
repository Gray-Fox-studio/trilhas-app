import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Trilhas from '../pages/DrawerStack/HomePages/Trilhas';
import Sobre from '../pages/DrawerStack/HomePages/Sobre';
import Quiz from "../pages/DrawerStack/HomePages/Quiz";
import Instituicao from "../pages/DrawerStack/HomePages/Instituicao";
import planet from '../../assets/Icons/Planet.png';
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={estilos.container}>
                <Image source={planet} style={estilos.ImageStyle} />
            </View>
            <DrawerItemList {...props} />
            <View style={estilos.containerButton}>
                <TouchableOpacity style={estilos.buttonStyles}>
                    <Text style={estilos.textStyle}>Log Out</Text>
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
                    backgroundColor: '#073B4C',
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Trilhas" component={Trilhas} options={{
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
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#577590',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
    },
    ImageStyle: {
        height: 200,
        width: 200,
        top: -50,
        left: -50,
    },
    textStyle: {
        color: '#FFFFFF',
    }
});