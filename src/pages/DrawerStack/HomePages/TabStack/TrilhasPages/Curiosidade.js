import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../../../assets/Screens/Background.png';
import planet from '../../../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../../../assets/Icons/DrawerButton.png';

const Curiosidade = ({ navigation }) => {
    return (

        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <View style={estilos.containerDrawer}>
                <TouchableOpacity style={estilos.containerBotaoDrawer}>
                    <Image source={drawerButton} style={estilos.drawerStyle} />
                </TouchableOpacity>
            </View>

            <View style={estilos.containerPlaneta}>
                <Image source={planet} style={estilos.planetaStyle} />
            </View>

            <View style={estilos.containerTitulo}>
                <Text style={estilos.textTitulo}>Curiosidade</Text>
            </View>

            <View style={estilos.containerPlace}></View>

            <ScrollView>

                <View style={estilos.containerH1}>
                    <Text style={estilos.h1}>Curiosidade</Text>
                </View>

            </ScrollView>
            <View style={estilos.br}></View>
        </SafeAreaView>
    );
}

export default Curiosidade;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerDrawer: {
        position: 'absolute',
        zIndex: 3,
    },
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        zIndex: 2,
        top: -80,
        left: -80,
    },
    containerTitulo: {
        zIndex: 0,
        backgroundColor: '#4D908E',
        padding: 20,
        marginRight: 70,
        marginLeft: -20,
        borderRadius: 30,
    },
    containerPlace: {
        zIndex: 1,
        paddingVertical: 32,
        paddingHorizontal: 70,
        backgroundColor: '#073B4C',
        borderRadius: 30,
        position: 'absolute'
    },
    containerBotaoDrawer: {
        marginTop: 30,
        marginLeft: 20,
    },
    containerImage: {
        alignItems: 'center',
        marginTop: 30,
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
        marginTop: 40,
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
        position: 'absolute',
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