import React from "react";

import CustomDrawer from "../../Components/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Trilhas from '../../pages/DrawerStack/HomePages/Trilhas';
import Sobre from '../../pages/DrawerStack/HomePages/Sobre';
import Quiz from "../../pages/DrawerStack/HomePages/Quiz";
import Instituicao from "../../pages/DrawerStack/HomePages/Instituicao";

const Drawer = createDrawerNavigator();

const DrawerRoutesQuis = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: '#04252f',
                },
                drawerActiveBackgroundColor: '#90BE6D',
                drawerInactiveBackgroundColor: '#577590',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
            }}
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Quiz"
        >
            <Drawer.Screen name="Trilhas" component={Trilhas} />
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Quiz" component={Quiz} />
            <Drawer.Screen name="Instituição" component={Instituicao} />
        </Drawer.Navigator>
    );
}
export default DrawerRoutesQuis;