import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet } from 'react-native';
import seta from '../../../assets/Screens/Arrow.png';
import Bg from '../../../assets/Screens/Start-Screen.png';


const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />
            <View style={estilos.containerBotao}>
                <TouchableOpacity style={estilos.botao}
                    onPress={() =>  navigation.navigate('Temp')}
                >
                    <Text style={estilos.textoBotao}>Continuar</Text>
                    <Image source={seta} style={estilos.setaStyle} />
                </TouchableOpacity>
            </View >
        </SafeAreaView>

    );
}

export default StartScreen;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerBotao: {
        zIndex: 1,
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#073B4C',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginTop: 500,
    },
    textoBotao: {
        color: '#90BE6D',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 20,
    },
    setaStyle: {
        width: 20,
        height: 10,
        margin: 10,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
})