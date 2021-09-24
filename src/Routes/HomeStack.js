import React from 'react';
import Home from '../pages/Home/Home';
import StartScreen from '../pages/Home/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Temp  from '../pages/Home/Temp';
import DrawerStack from '../pages/DrawerStack/DrawerStack';
import Sobre from '../pages/DrawerStack/HomePages/Sobre';
import Instituicao from '../pages/DrawerStack/HomePages/Instituicao';
import Quiz from '../pages/DrawerStack/HomePages/Quiz';
import JardimBotanico from '../pages/DrawerStack/HomePages/TabStack/TrilhasPages/JardimBotanico'

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" >
        <Stack.Screen name="StartScreen" component={StartScreen} options={{
          headerShown: false
        }
        }
        />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="Temp" component={Temp} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="Sobre" component={Sobre} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="Instituição" component={Instituicao} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="Quiz" component={Quiz} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="JardimBotanico" component={JardimBotanico} options={{
          headerShown: false
        }
        } />
        <Stack.Screen name="Drawer" component={DrawerStack} options={{
          headerShown: false
        }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

