//Falta Ajustar
import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet } from 'react-native';
import Bg from '../../../assets/Screens/homeBg.png';
import botanica from '../../../assets/images/Botanica.png';
import setaVerde from '../../../assets/Icons/SetaVerde.png';
import polygon from '../../../assets/Icons/Polygon.png';
import info from '../../../assets/Icons/info.png';
import inst from '../../../assets/Icons/Inst.png';
import polygon2 from '../../../assets/Icons/Polygon2.png';
import game from '../../../assets/Icons/Game.png';
import polygon3 from '../../../assets/Icons/Polygon3.png';

const StartScreen = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <View style={estilos.containerBotao}>
                <TouchableOpacity style={estilos.botao}>
                    <View style={estilos.row}>
                        <Image source={setaVerde} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>Trilhas</Text>
                    </View>
                    <Image source={botanica} style={estilos.imageStyle} />
                </TouchableOpacity>
            </View >
            <View style={estilos.containerImage}>
                <Image source={polygon} style={estilos.polygon} />
            </View>

            <View style={estilos.containerBotaoP}>
                <TouchableOpacity style={estilos.botaoP}>
                    <View style={estilos.row}>
                        <Image source={info} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>Sobre</Text>
                    </View>
                </TouchableOpacity>
            </View >
            <View style={estilos.containerImage1}>
                <Image source={polygon} style={estilos.polygon1} />
            </View>

            <View style={estilos.containerInst}>
                <TouchableOpacity style={estilos.botaoInst}>
                    <View style={estilos.row}>
                        <Image source={inst} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>instituição</Text>
                    </View>
                </TouchableOpacity>
            </View >
            <View style={estilos.containerImageInst}>
                <Image source={polygon2} style={estilos.polygon2} />
            </View>

            <View style={estilos.containerGame}>
                <TouchableOpacity style={estilos.botaoGame}>
                    <View style={estilos.row}>
                        <Image source={game} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>instituição</Text>
                    </View>
                    <Image source={botanica} style={estilos.imageStyleGame} />
                </TouchableOpacity>
            </View >
            <View style={estilos.containerImageGame}>
                <Image source={polygon3} style={estilos.polygon3} />
            </View>

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
    containerBotaoP: {
        zIndex: 1,
        alignItems: 'flex-end'
    },
    containerInst: {
        zIndex: 1,
        alignItems: 'flex-start'
    },
    containerGame: {
        zIndex: 1,
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 30,
    },
    botaoP: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginTop: 140,
        marginRight: 10,
    },
    botaoInst: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginTop: 25,
        marginLeft: 20,
    },
    botaoGame: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 55,
    },
    textoBotao: {
        color: '#FFFFFF',
        textAlign: 'justify',
        lineHeight: 26,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 17,
    },
    imageStyle: {
        width: 270,
        height: 100,
        borderRadius: 10,
    },
    imageStyleGame: {
        width: 230,
        height: 60,
        borderRadius: 10,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    seta: {
        width: 25,
        height: 25,
    },
    polygon: {
        width: 70,
        height: 70,
        marginLeft: 210,
    },
    polygon1: {
        width: 35,
        height: 35,
        marginLeft: 285,
    },
    polygon2: {
        width: 35,
        height: 35,
        marginLeft: 130,
    },
    polygon3: {
        width: 100,
        height: 100,
        marginLeft: 215,
    },
    containerImage: {
        marginTop: -30,
    },
    containerImage1: {
        marginTop: -55,
    },
    containerImageInst: {
        marginTop: -60,
    },
    containerImageGame: {
        marginTop: -190,
    },
})