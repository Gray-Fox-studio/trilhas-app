import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../assets/Screens/Background.png';
import planet from '../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../assets/Icons/DrawerButton.png';
import logo from '../../../../assets/Icons/IFPB.png';

const Instituicao = ({ navigation }) => {
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
                <Text style={estilos.textTitulo}>Instituição</Text>
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

export default Instituicao;

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
    containerLogo: {
        alignItems: 'center',
        marginTop: 30,
    },
    containerH1: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center'
    },
    containerTitulo: {
        zIndex: 0,
        backgroundColor: '#073B4C',
        padding: 20,
        marginRight: 120,
        marginLeft: -20,
        borderRadius: 30,
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
        width: 150,
        height: 150,
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