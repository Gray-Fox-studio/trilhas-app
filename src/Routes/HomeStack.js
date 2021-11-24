import React from 'react';
import Home from '../pages/Home/Home';
import StartScreen from '../pages/Home/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Temp from '../pages/Home/Temp';
import DrawerStack from '../pages/DrawerStack/Drawers/DrawerTrilhas';
import DrawerSobre from '../pages/DrawerStack/Drawers/DrawerSobre';
import Sobre from '../pages/DrawerStack/HomePages/Sobre';
import Instituicao from '../pages/DrawerStack/HomePages/Instituicao';
import Quiz from '../pages/DrawerStack/HomePages/Quiz';
import JardimBotanico from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/JardimBotanico';
import Trilhas from '../pages/DrawerStack/HomePages/Trilhas';
import DrawerQuiz from '../pages/DrawerStack/Drawers/DrawerQuiz';
import DrawerInst from '../pages/DrawerStack/Drawers/DrawerInst';
import TabStackJardim from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/TabBar/TabStackJardim';
import TabStackCuriosidade from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/TabBar/TabStackCuriosidade';
import TabStackGame from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/TabBar/TabStackGame';
import TabStackTrilha from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/TabBar/TabStackTrilha';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" >
        <Stack.Screen name="StartScreen" component={StartScreen} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Temp" component={Temp} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Trilhas" component={Trilhas} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Instituição" component={Instituicao} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Quiz" component={Quiz} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="JardimBotanico" component={JardimBotanico} options={{
          headerShown: false
        }} 
        />
        <Stack.Screen name="Drawer" component={DrawerStack} options={{
          headerShown: false
        }} 
        />
        <Stack.Screen name="DrawerSobre" component={DrawerSobre} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="DrawerInst" component={DrawerInst} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="DrawerQuiz" component={DrawerQuiz} options={{
          headerShown: false
        }}
        />        
        <Stack.Screen name="TabStackJardim" component={TabStackJardim} options={{
          headerShown: false
        }} 
        />
        <Stack.Screen name="TabStackCuriosidade" component={TabStackCuriosidade} options={{
          headerShown: false
        }} 
        />
        <Stack.Screen name="TabStackGame" component={TabStackGame} options={{
          headerShown: false
        }} 
        />
        <Stack.Screen name="TabStackTrilha" component={TabStackTrilha} options={{
          headerShown: false
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

