
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Favoritos from './Favoritos'

export default class Informacoes extends React.Component {

    //construtor para uso do props
    constructor(props) {
        super(props);
    }

    //renderização do componente
    render() {
        return (
            <View style={estilo.display}>
                <View style={estilo.perfil}>
                    <Image style={estilo.imagem} source={{ uri: this.props.imagem }} />
                    <View style={estilo.nomes}>
                        <Text style={estilo.informacao}>{this.props.nome}</Text>
                        <Text style={estilo.informacao}>{this.props.email}</Text>
                    </View>
                    <View> 
                    <Favoritos imagem={this.props.imagem}
                                nome={this.props.nome}/>
                    <Text style={estilo.favorito}>FAVORITOS</Text>
                    </View>
                    

                </View>
                <Text style={estilo.meus}>MEUS DEPOIMENTOS:</Text>

            </View>
        );


    }
}

const estilo = StyleSheet.create({
    favorito:{color: '#3693BA',
     fontWeight: 'bold', 
     marginTop: 10, 
     marginLeft: 20
    },
    informacao: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 3
    },
    imagem: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
        borderRadius: 30
    },
    perfil: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: 'grey',

    },
    meus: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3693BA'
    },
    nomes:{
        flexDirection: 'column',
        margin: 5
    }
})


Informacoes.propTypes = { nome: PropTypes.string.isRequired },
    { email: PropTypes.string.isRequired },
    { imagem: PropTypes.string.isRequired }

