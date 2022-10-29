import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Bg from '../../../../../../assets/Screens/Background.png';
import planet from '../../../../../../assets/Icons/Planet.png';
import drawerButton from '../../../../../../assets/Icons/DrawerButton.png';
import Botanica from '../../../../../../assets/images/Botanica.png';
import Imagem_35 from '../../../../../../assets/images/Imagem_35.jpg';
import Imagem_36 from '../../../../../../assets/images/Imagem_36.jpg';
import Imagem_37 from '../../../../../../assets/images/Imagem_37.jpg';
import Imagem_38 from '../../../../../../assets/images/Imagem_38.jpg';
import Imagem_39 from '../../../../../../assets/images/imagem_39.jpg';
import Imagem_40 from '../../../../../../assets/images/Imagem_40.jpg';
import Imagem_41 from '../../../../../../assets/images/Imagem_41.jpg';
import Imagem_42 from '../../../../../../assets/images/Imagem_42.jpg';
import Imagem_43 from '../../../../../../assets/images/Imagem_43.jpg';
import Imagem_44 from '../../../../../../assets/images/Imagem_44.jpg';
import Imagem_45 from '../../../../../../assets/images/Imagem_45.jpg';
import Imagem_46 from '../../../../../../assets/images/Imagem_46.jpg';
import Imagem_47 from '../../../../../../assets/images/Imagem_47.jpg';
import Imagem_48 from '../../../../../../assets/images/Imagem_48.jpg';
import Imagem_49 from '../../../../../../assets/images/Imagem_49.jpg';
import ArrowL from '../../../../../../assets/Screens/ArrowL.png';

const Curiosidades = ({ navigation }) => {
    return (

        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={'#90BE6D'} />
            <Image source={Bg} style={estilos.backgroundStyle} />

            <TouchableOpacity style={estilos.containerTitulo}
                onPress={() => navigation.navigate('JardimBotanico')}>
                <View style={estilos.place}></View>
                <Image source={ArrowL} style={estilos.arrowLeft} />
                <Text style={estilos.textoBotao}>Curiosidades</Text>
            </TouchableOpacity>

            <View style={estilos.containerDrawer}>
                <TouchableOpacity style={estilos.containerBotaoDrawer}>
                    <Image source={drawerButton} style={estilos.drawerStyle} />
                </TouchableOpacity>
            </View>

            <View style={estilos.containerPlaneta}>
                <Image source={planet} style={estilos.planetaStyle} />
            </View>

            <ScrollView style={estilos.Separando}>
                <View style={estilos.containerH1}>
                    <Text style={estilos.h1}>Curiosidades?</Text>
                </View>

                <View style={estilos.containerH2}>
                    <Text style={estilos.h2}>
                    -  A área que hoje abriga o jardim Botânico Benjamim Maranhão foi de extrema importância para o início do abastecimento de água da cidade de João Pessoa. Como resultado desse grande projeto, ainda encontramos os chamados “Poços Amazonas”, importantes construções do sistema hídrico da capital, datados do ano de 1912.                     </Text>
                </View>

                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_35} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_36} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_37} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_38} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_39} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_40} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_41} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_42} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_43} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_44} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_45} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_46} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_47} style={estilos.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_48} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.ImageBorder}>
                        <Image source={Imagem_49} style={estilos.imageStyle} />
                    </TouchableOpacity>
                </View>

                <View style={estilos.containerH1}>
                </View>
                <View style={estilos.containerH2}>
                    <Text style={estilos.h2}>
                    - O Jardim Botânico Benjamim Maranhão, resguarda no seu interior aproximadamente 15 trilhas educativas e um complexo arquitetônico histórico e funcional da mais alta expressão. São edificações da década de 20, que faziam parte do projeto de saneamento projetado por Saturnino de Brito, importante engenheiro sanitarista brasileiro.
                    </Text>
                </View>

            </ScrollView>
            <View style={estilos.br}></View>
        </SafeAreaView>

    );
}

export default Curiosidades;

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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginHorizontal: 30,
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
    Separando: {
        marginTop: 60,
    },
    place: {
        backgroundColor: '#577590',
        width: '30%',
        padding: 28,
        borderRadius: 30,
        position: 'absolute',
        left: 5,
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
        width: 140,
        height: 110,
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