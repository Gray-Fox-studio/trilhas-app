import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../assets/Screens/Background.png';
import planet from '../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../assets/Icons/DrawerButton.png';
import logo from '../../../../assets/Icons/conserva-bio.png';
import ArrowL from '../../../../assets/Screens/ArrowL.png';
import { DrawerActions } from '@react-navigation/native';

const Sobre = ({ navigation, props }) => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <TouchableOpacity style={estilos.containerTitulo}
                onPress={() => navigation.navigate('Temp')}
            >
                <Image source={ArrowL} style={estilos.arrowLeft} />
                <Text style={estilos.textoBotao}>Sobre</Text>
            </TouchableOpacity>

            <View style={estilos.containerDrawer}>
                <TouchableOpacity style={estilos.containerBotaoDrawer}
                    onPress={(props) => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Image source={drawerButton} style={estilos.drawerStyle} />
                </TouchableOpacity>
            </View>

            <View style={estilos.containerPlaneta}>
                <Image source={planet} style={estilos.planetaStyle} />
            </View>

            <ScrollView>
                <View style={estilos.containerLogo} >
                    <Image source={logo} style={estilos.logoStyle} />
                </View>

                <View style={estilos.containerH1}>
                    <Text style={estilos.h1}>Quem somos</Text>
                </View>

                <View style={estilos.containerH2}>
                    <Text style={estilos.h2}>
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </Text>
                </View>

                <View style={estilos.containerH1}>
                    <Text style={estilos.h1}>Nossa equipe</Text>
                </View>

                <View style={estilos.containerH2}>
                    <Text style={estilos.h2}>
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </Text>
                </View>
            </ScrollView>
            <View style={estilos.br}></View>
        </SafeAreaView>

    );
}

export default Sobre;

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
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: -80,
        right: -80,
        zIndex: 2,
    },
    containerLogo: {
        alignItems: 'center',
        marginTop: 60,
    },
    containerH1: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center'
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
    containerH2: {
        marginLeft: 30,
        marginRight: 30,
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
    imageStyle: {
        width: 270,
        height: 100,
        borderRadius: 10,
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
    containerBotaoDrawer: {
        marginTop: 30,
        marginLeft: 20,
    },
    logoStyle: {
        width: 250,
        height: 204,
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
    }
})