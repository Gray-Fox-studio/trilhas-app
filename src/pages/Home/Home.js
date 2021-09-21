import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView  style={estilos.container}>
            
            <View>
                <Text>ola</Text>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#90BE6D',
        flex: 1,
    }
})
