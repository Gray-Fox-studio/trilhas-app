import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../../../assets/Screens/gameScreen.png';
import planet from '../../../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../../../assets/Icons/DrawerButton.png';
import Botanica from '../../../../../../assets/images/Botanica.png';
import ArrowL from '../../../../../../assets/Screens/ArrowL.png';

const Game = ({ navigation }) => {
    return (

        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <View style={estilos.place}></View>
            <TouchableOpacity style={estilos.containerTitulo}
                onPress={() => navigation.navigate('JardimBotanico')}>
                <Image source={ArrowL} style={estilos.arrowLeft} />
                <Text style={estilos.textoBotao}>Game</Text>
            </TouchableOpacity>

            <View style={estilos.containerDrawer}>
                <TouchableOpacity style={estilos.containerBotaoDrawer}>
                    <Image source={drawerButton} style={estilos.drawerStyle} />
                </TouchableOpacity>
            </View>

            <View style={estilos.containerPlaneta}>
                <Image source={planet} style={estilos.planetaStyle} />
            </View>

            <ScrollView>

            </ScrollView>
            <View style={estilos.br}></View>
        </SafeAreaView>

    );
}

export default Game;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerDrawer: {
        position: 'absolute',
        zIndex: 3,
        right: 20,
    },
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: -80,
        right: -80,
        zIndex: 2,
    },
    containerTitulo: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#073B4C',
        position: 'absolute',
        width: '70%',
        left: -25,
        borderRadius: 30,
        paddingVertical: 15,
        zIndex: 4,
    },
    place: {
        backgroundColor: '#577590',
        width: '21%',
        padding: 28,
        borderRadius: 30,
        position: 'absolute',
        zIndex: 5,
        left: -20,
        opacity: 0.7,
    },
    arrowLeft: {
        width: '13%',
        height: '45%',
        marginLeft: 50,
    },
    textoBotao: {
        color: '#FFFFFF',
        textAlign: 'justify',
        lineHeight: 22,
        fontSize: 17,
        marginLeft: 10,
    },
    containerBotaoDrawer: {
        marginTop: 30,
        marginLeft: 20,
    },
    containerImageC: {
        alignItems: 'center',
        marginTop: 120,
        marginHorizontal: 48,
    },
    containerImageB: {
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 48,
    },
    containerH1: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'flex-start',
        marginLeft: 48,
    },
    containerH2: {
        marginHorizontal: 48,
    },
    h1: {
        fontSize: 22,
        color: '#073B4C',
        fontWeight: 'bold',
    },
    h2: {
        color: '#FFFFFF',
        textAlign: 'justify'
    },
    br: {
        marginTop: 30,
    },
    ImageBorder: {
        backgroundColor: '#073B4C',
        paddingVertical: 10,
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    drawerStyle: {
        width: 40,
        height: 30,
    },
    imageStyle: {
        width: 300,
        height: 150,
        borderRadius: 10,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position:'absolute',
    },
    planetaStyle: {
        width: 200,
        height: 200,
    },
    textTitulo: {
        fontSize: 17,
        color: '#FFFFFF',
        marginLeft: 160,
    },
})