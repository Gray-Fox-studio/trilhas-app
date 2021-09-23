import React from 'react';
import Home from '../pages/Home/Home';
import StartScreen from '../pages/Home/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Temp  from '../pages/Home/Temp';
import DrawerStack from '../pages/DrawerStack/DrawerStack';

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
        <Stack.Screen name="Trilhas" component={DrawerStack} options={{
          headerShown: false
        }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

