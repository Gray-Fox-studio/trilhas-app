import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/pages/Home/Home';
import StartScreen from './src/pages/Home/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

