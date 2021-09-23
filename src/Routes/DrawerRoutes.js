import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Trilhas from '../pages/DrawerStack/HomePages/Trilhas';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Trilhas" component={Trilhas} options={{    
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#073B4C',
                }
            }} 
            />
        </Drawer.Navigator>
    );
}