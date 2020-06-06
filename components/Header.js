import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    //construtor para uso do props
    constructor(props) {
        super(props);
    }

    //renderização do componente
    render() {
        return (
            <View style={estilo.viewTitulo}>
                <TouchableHighlight
                    underlayColor='white'
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
                </TouchableHighlight>
                <Text style={estilo.titulo}>{this.props.nomeTitulo}</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    menu: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',

    },
    viewTitulo: {
        flexDirection: 'row',
        marginBottom: 40,
        paddingTop: 20,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.49,
        elevation: 5,
    },
    titulo: {
        color: '#3693BA',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        marginLeft: 10

    }
})