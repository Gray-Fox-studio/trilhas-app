import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90BE6D',
    },
    containerBotao: {
        zIndex: 1,
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#073B4C',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginTop: 500,
    },
    textoBotao: {
        color: '#90BE6D',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 20,
    },
    setaStyle: {
        width: 20,
        height: 10,
        margin: 10,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});

export const cores = {
    verde: '#90BE6D'
};