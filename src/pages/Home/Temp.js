import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import Bg from '../../../assets/Screens/Background.png';
import botanica from '../../../assets/images/Botanica.png';
import setaVerde from '../../../assets/Icons/SetaVerde.png';
import info from '../../../assets/Icons/info.png';
import inst from '../../../assets/Icons/Inst.png';
import game from '../../../assets/Icons/Game.png';
import logo from '../../../assets/Icons/Logo.png';
import quit from '../../../assets/Icons/Quit.png';
/*Setas do balão
import polygon from '../../../assets/Icons/Polygon.png';
import polygon2 from '../../../assets/Icons/Polygon2.png';
import polygon3 from '../../../assets/Icons/Polygon3.png';
*/

const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <ImageBackground source={Bg} resizeMode='stretch' style={estilos.backgroundStyle} />

            <View style={estilos.containerBotao}>
                <TouchableOpacity style={estilos.botao}
                    onPress={() => navigation.navigate('Drawer')}
                >
                    <View style={estilos.row}>
                        <Image source={setaVerde} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>Trilhas</Text>
                    </View>
                    <Image source={botanica} style={estilos.imageStyle} />
                </TouchableOpacity>
            </View >

            <View style={estilos.containerLogo}>
                <ImageBackground source={logo} resizeMode='center' style={estilos.logoStyle} />
            </View>

            <View style={estilos.containerBotaoSobre}>
                <TouchableOpacity style={estilos.botaoSobre}
                    onPress={() => navigation.navigate('Sobre')}
                >
                    <View style={estilos.row}>
                        <Image source={info} style={estilos.seta} />
                        <Text style={estilos.textoBotao1}>Sobre</Text>
                    </View>
                </TouchableOpacity>
            </View >


            <View style={estilos.containerBotaoInst}>
                <TouchableOpacity style={estilos.botaoInst}
                    onPress={() => navigation.navigate('Instituição')}
                >
                    <View style={estilos.row}>
                        <Image source={inst} style={estilos.setaInst} />
                        <Text style={estilos.textoBotao1}>instituição</Text>
                    </View>
                </TouchableOpacity>
            </View >

            <View style={estilos.containerBotaoQuiz}>
                <TouchableOpacity style={estilos.botaoQuiz}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <View style={estilos.row}>
                        <Image source={game} style={estilos.gameSeta} />
                        <Text style={estilos.textoBotao}>Quis</Text>
                    </View>
                    <Image source={botanica} style={estilos.imageStyleQuiz} />
                </TouchableOpacity>
            </View >
            <View style={estilos.containerQuit}>
                <TouchableOpacity style={estilos.quitBorder}
                    onPress={() => navigation.navigate('StartScreen')}
                >
                    <Image source={quit} style={estilos.quitStyle} />
                </TouchableOpacity>
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
        alignItems: 'center',
        marginTop: 30,
    },
    containerLogo: {
        alignItems: 'center',
        marginBottom: 30,
    },
    containerQuit: {
        alignItems: 'flex-end',
        right: -20,
        bottom: -20,
        position: 'absolute'
    },
    containerBotaoQuiz: {
        alignItems: 'center',
    },
    containerBotaoSobre: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 170,
    },
    containerBotaoInst: {
        alignItems: 'flex-start',
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 30,
    },
    logoStyle: {
        width: 350,
        height: 350,
        position: 'absolute',
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    botao: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    botaoQuiz: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    botaoSobre: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 9,
    },
    botaoInst: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 9,
    },
    quitBorder: {
        backgroundColor: '#073B4C',
        padding: 30,
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },
    textoBotao: {
        color: '#FFFFFF',
        textAlign: 'justify',
        lineHeight: 17,
        marginLeft: 10,
        fontSize: 17,
    },
    textoBotao1: {
        color: '#FFFFFF',
        textAlign: 'justify',
        lineHeight: 19,
        marginLeft: 10,
        fontSize: 17,
    },
    seta: {
        width: 20,
        height: 20,
    },
    gameSeta: {
        width: 19,
        height: 14,
    },
    setaInst: {
        width: 25,
        height: 20,
    },
    quitStyle: {
        width: 30,
        height: 20,
        marginBottom: 10,
    },
    imageStyle: {
        width: 270,
        height: 100,
        borderRadius: 10,
    },
    imageStyleQuiz: {
        width: 210,
        height: 80,
        borderRadius: 10,
    },
    containerImage: {
        marginTop: -30,
    },
    polygon: {
        width: 70,
        height: 70,
        marginLeft: 210,
    },
})