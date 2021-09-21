import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, ImageBackground } from 'react-native';
import seta from '../../../assets/Screens/Arrow.png';
import Bg from '../../../assets/Screens/Start-Screen.png';
import estilos, { cores } from './estilos';

const StartScreen = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={cores.verde} />
            <Image source={Bg} style={estilos.backgroundStyle}/>
            <View style={estilos.containerBotao}>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Continuar</Text>
                    <Image source={seta} style={estilos.setaStyle} />
                </TouchableOpacity>
            </View >
        </SafeAreaView>

    );
}

export default StartScreen;