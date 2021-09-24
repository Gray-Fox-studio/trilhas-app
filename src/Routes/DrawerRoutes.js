import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Trilhas from '../pages/DrawerStack/HomePages/Trilhas';
import Sobre from '../pages/DrawerStack/HomePages/Sobre';
import Quiz from "../pages/DrawerStack/HomePages/Quiz";
import Instituicao from "../pages/DrawerStack/HomePages/Instituicao";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Trilhas" component={Trilhas} options={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#073B4C',
                }
            }}
            />
            <Drawer.Screen name="Sobre" component={Sobre} options={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#073B4C',
                }
            }}
            />
            <Drawer.Screen name="Quiz" component={Quiz} options={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#073B4C',
                }
            }}
            />
            <Drawer.Screen name="Instituição" component={Instituicao} options={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#073B4C',
                }
            }}
            />
        </Drawer.Navigator>
    );
}