import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet } from 'react-native';
import Bg from '../../../../assets/Screens/Background.png';
import setaVerde from '../../../../assets/Icons/SetaVerde.png';
import botanica from '../../../../assets/images/Botanica.png';
import planet from '../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../assets/Icons/DrawerButton.png';
import ArrowL from '../../../../assets/Screens/ArrowL.png'
import { DrawerActions } from '@react-navigation/native';


const Trilhas = ({ navigation, props }) => {
    return (<>
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <TouchableOpacity style={estilos.containerTitulo}
                onPress={() => navigation.navigate('Temp')}
            >
                <Image source={ArrowL} style={estilos.arrowLeft} />
                <Text style={estilos.textoBotao}>Explorar</Text>
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

            <View style={estilos.containerBotao}>
                <TouchableOpacity style={estilos.botao}
                    onPress={() => navigation.navigate('JardimBotanico')}
                >
                    <View style={estilos.row}>
                        <Image source={setaVerde} style={estilos.seta} />
                        <Text style={estilos.textoBotao}>Jardim botânico</Text>
                    </View>
                    <Image source={botanica} style={estilos.imageStyle} />
                </TouchableOpacity>
            </View >

            <View style={estilos.containerEmbreve}>

                <TouchableOpacity style={estilos.botaoEmbreve}>
                    <Text style={estilos.textoBotaoEmbreve}>Em breve</Text>
                    <View style={estilos.botaoFake}>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoEmbreve}>
                    <Text style={estilos.textoBotaoEmbreve}>Em breve...</Text>
                    <View style={estilos.botaoFake}>

                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    </>

    );
}

export default Trilhas;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerBotao: {
        zIndex: 1,
        alignItems: 'center',
        marginTop: 100,
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
    },
    containerDrawer: {
        position: 'absolute',
        zIndex: 1,
        right: 20,
    },
    containerEmbreve: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 50,
    },
    containerPlaneta: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: -80,
        right: -80,
    },
    botao: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    botaoEmbreve: {
        backgroundColor: '#073B4C',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    botaoFake: {
        backgroundColor: '#577590',
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 60,
    },
    textoBotao: {
        color: '#FFFFFF',
        textAlign: 'justify',
        lineHeight: 22,
        fontSize: 17,
        marginLeft: 10,
    },
    textoBotaoEmbreve: {
        color: '#577590',
        textAlign: 'justify',
        lineHeight: 22,
        fontSize: 17,
    },
    setaStyle: {
        width: 20,
        height: 10,
        margin: 10,
    },
    drawerStyle: {
        width: 40,
        height: 30,
    },
    arrowLeft: {
        width: '13%',
        height: '45%',
        marginLeft: 50,
    },
    seta: {
        width: 20,
        height: 20,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
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
    containerBotaoDrawer: {
        marginTop: 30,
        marginLeft: 20,
    }
})