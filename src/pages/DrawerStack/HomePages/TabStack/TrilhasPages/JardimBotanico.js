import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../../../assets/Screens/Background.png';
import planet from '../../../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../../../assets/Icons/DrawerButton.png';
import Botanica from '../../../../../../assets/images/Botanica.png';
import MapInfo from '../../../../../../assets/Icons/Map.png';
import SetaVerde from '../../../../../../assets/Icons/SetaVerde.png';
import Game from '../../../../../../assets/Icons/Game.png';
import Info from '../../../../../../assets/Icons/Interroga.png';

const Quiz = ({ navigation }) => {
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
                <Text style={estilos.textTitulo}>Jardim Botânico</Text>
            </View>

            <View style={estilos.containerImage}>
                <View style={estilos.ImageBorder}>
                    <Image source={Botanica} style={estilos.imageStyle} />
                </View>
            </View>

            <View style={estilos.containerBotao}>

                <TouchableOpacity style={estilos.botao}>

                    <Image source={MapInfo} style={estilos.iconStyle} />
                    <Text style={estilos.textbotao}>{`Sobre o 
jardin`}
                    </Text> 
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>
                    <Image source={SetaVerde} style={estilos.iconStyle} />
                    <Text style={estilos.textbotao}>{`Trilha
Virtual`}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.containerBotao}>

                <TouchableOpacity style={estilos.botao}>

                    <Image source={Info} style={estilos.iconStyle} />
                    <Text style={estilos.textbotao}>{`Encontra 
mos aqui!`}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>
                    <Image source={Game} style={estilos.iconStyleFixed} />
                    <Text style={estilos.textbotao}>{`Jogo
`}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}

export default Quiz;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerDrawer: {
        position: 'absolute',
        zIndex: 2,
    },
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        zIndex: 1,
        top: -80,
        left: -80,
    },
    containerTitulo: {
        zIndex: 0,
        backgroundColor: '#073B4C',
        padding: 20,
        marginRight: 120,
        marginLeft: -20,
        borderRadius: 30,
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
    containerBotao: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
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
    iconStyle: {
        width: 30,
        height: 30,
        marginTop: 2,
        marginBottom: 15,
    },
    iconStyleFixed: {
        width: 40,
        height: 30,
        marginTop: 2,
        marginBottom: 15,
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
        marginLeft: 110,
    },
    textbotao: {
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    botao: {
        marginHorizontal: 5,
        backgroundColor: '#073B4C',
        width: '37%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 15,
    },
})