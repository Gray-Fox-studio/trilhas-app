import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../assets/Screens/Background.png';
import planet from '../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../assets/Icons/DrawerButton.png';
import ArrowL from '../../../../assets/Screens/ArrowL.png';
import GameImage from '../../../../assets/images/GameImage.png';
import Play from '../../../../assets/Icons/Play.png';

const Quiz = ({ navigation }) => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <TouchableOpacity style={estilos.containerTitulo}
                onPress={() => navigation.navigate('Temp')}
            >
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
                <View style={estilos.containerBotao}>
                    <Image source={GameImage} style={estilos.imageStyle} />
                    <TouchableOpacity style={estilos.botaoJogar}>
                        <Text style={estilos.textoJogar}>Jardim Botanico</Text>
                        <Image source={Play} style={estilos.iconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <View style={estilos.containerBotaoMini}>
                        <Image source={GameImage} style={estilos.miniImageStyle} />
                        <TouchableOpacity style={estilos.botaoEmbreve}>
                            <Text style={estilos.textoBotao}>Em breve...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilos.containerBotaoMini}>
                        <Image source={GameImage} style={estilos.miniImageStyle} />
                        <TouchableOpacity style={estilos.botaoEmbreve}>
                            <Text style={estilos.textoBotao}>Em breve...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estilos.row}>
                    <View style={estilos.containerBotaoMini}>
                        <Image source={GameImage} style={estilos.miniImageStyle} />
                        <TouchableOpacity style={estilos.botaoEmbreve}>
                            <Text style={estilos.textoBotao}>Em breve...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilos.containerBotaoMini}>
                        <Image source={GameImage} style={estilos.miniImageStyle} />
                        <TouchableOpacity style={estilos.botaoEmbreve}>
                            <Text style={estilos.textoBotao}>Em breve...</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
            <View style={estilos.br}></View>
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
        zIndex: 3,
        right: 20,
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
    containerBotao: {
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: '#073B4C',
        paddingVertical: 10,
        marginHorizontal: 45,
        borderRadius: 20,
    },
    containerBotaoMini: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#073B4C',
        padding: 8,
        borderRadius: 15,
    },
    imageStyle: {
        width: 300,
        height: 100,
        borderRadius: 10,
    },
    miniImageStyle: {
        width: 130,
        height: 80,
        borderRadius: 10,
    },
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: -80,
        right: -80,
        zIndex: 2,
    },
    botaoJogar: {
        marginTop: 10,
        backgroundColor: '#7CB077',
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 40,
        opacity: 0.5,
    },
    botaoEmbreve: {
        backgroundColor: '#577590',
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
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
    textoJogar: {
        color: '#FFFFFF',
        lineHeight: 22,
        fontSize: 17,
        marginRight: 100,
        marginLeft: 20,
    },
    drawerStyle: {
        width: 40,
        height: 30,
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
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    containerBotaoDrawer: {
        marginTop: 30,
        marginLeft: 20,
    },
    br: {
        marginTop: 40,
    }
})