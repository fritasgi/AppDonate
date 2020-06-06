
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight,TextInput } from 'react-native';
import PropTypes from 'prop-types';
import LikeCounter from './LikeCounter'

export default class DadosPerfil extends React.Component {

    //construtor para uso do props
    constructor(props) {
        super(props);
    }

    //renderização do componente
    render() {
        return (
            <View >

                <View style={estilo.perfil}>
                    <Image style={estilo.imagem} source={{ uri: this.props.imagem }} />
                    <Text style={estilo.nome}>{this.props.nome}</Text>
                </View>
                <Text style={estilo.depoimento}>{this.props.depoimento}</Text>

                <LikeCounter reacoes={this.props.reacoes} />
                <Text style={estilo.reacao}>COMENTÁRIOS:</Text>

                <View style={estilo.coment}>
                    <Text style={estilo.user}>{this.props.usuario}</Text>
                    <Text style={estilo.comentario}>{this.props.comentario}</Text>
                </View>
                <View style={estilo.mensagem}>
                    <TextInput
                        style={estilo.input}
                        placeholder="Deixe seu comentário" />
                    <TouchableHighlight
                        style={estilo.botao}>
                        <Text style={{ textAlign: 'center', padding: 2 }}>COMENTAR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );


    }
}

const estilo = StyleSheet.create({
    salvar: {
        color: '#3693BA',
        marginLeft: 250
    },
    comentario: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 5
    },
    user: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 8
    },
    imagem: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        borderRadius: 20
    },
    perfil: {
        flexDirection: 'row',
        marginBottom: 10
    },
    depoimento: {
        textAlign: 'justify',
        fontSize: 16,
    },
    coment: {
        marginTop: 5,
        borderWidth: 0.3,
        borderColor: '#D6CBD6',
        backgroundColor: '#F8F8F8'

    },
    reacao: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#3693BA'
    },
    botao: {
        backgroundColor: '#3693BA',
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,

    },
    mensagem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 10,
    },
    input: {
        width: 240,
        height: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    }
})


DadosPerfil.propTypes = { nome: PropTypes.string.isRequired },
    { depoimento: PropTypes.string.isRequired },
    { email: PropTypes.string.isRequired },
    { imagem: PropTypes.string.isRequired },
    { comentario: PropTypes.string.isRequired },
    { usuario: PropTypes.string.isRequired },
    { reacoes: PropTypes.number.isRequired };

