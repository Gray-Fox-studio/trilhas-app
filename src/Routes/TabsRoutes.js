import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SobreJardim from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/SobreJardim';
import Curiosidade from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/Curiosidade';
import Game from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/Game';
import TrilhaVirtual from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/TrilhasVirtual';
import ButtonSobre from '../Components/ButtonsTabs/ButtonSobre';
import ButtonCurio from '../Components/ButtonsTabs/ButtonCurio';
import ButtonGame from '../Components/ButtonsTabs/ButtonGame';
import ButtonTrilhas from '../Components/ButtonsTabs/ButtonTrilha';


const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#073B4C',
                    borderTopColor: 'transparent',
                    paddingBottom: 10,
                    paddingTop: 5,
                    height: 65,
                },
            }
            }>
            <Tab.Screen name="Sobre" component={SobreJardim}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <ButtonSobre />
                    ),
                }}
            />
            <Tab.Screen name="Curiosidade" component={Curiosidade}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <ButtonCurio />
                    ),
                }}
            />
            <Tab.Screen name="Game" component={Game}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <ButtonGame />
                    ),
                }}
            />
            <Tab.Screen name="Trilha" component={TrilhaVirtual}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <ButtonTrilhas />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};