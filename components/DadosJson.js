
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableHighlight, Alert, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class DadosDepoimento extends React.Component {

    //construtor para uso do props
    constructor(props) {
        super(props);
    }

    //renderização do componente
    render() {
        return (
            <View>
                <TouchableHighlight
                    underlayColor='#E6E6E6'
                    onPress={() => Alert.alert('Depoimento salvo! Você pode vê-lo no seu perfil.')}>
                    <Text style={estilo.salvar}> FAVORITAR</Text>
                </TouchableHighlight>
                <View style={estilo.perfil}>

                    <Image style={estilo.imagem} source={{ uri: this.props.img }} />
                    <Text style={estilo.nome}>{this.props.nome}</Text>
                </View>
                <Text style={estilo.depoimento}>{this.props.depoimento}</Text>

                <Text style={estilo.reacao}>COMENTÁRIOS:</Text>

                <View style={estilo.coment}>
                    <Text style={estilo.user}>{this.props.usuario1}</Text>
                    <Text style={estilo.comentario}>{this.props.comentario1}</Text>
                </View>
                <View style={estilo.coment}>
                    <Text style={estilo.user}>{this.props.usuario2}</Text>
                    <Text style={estilo.comentario}>{this.props.comentario2}</Text>

                </View>

                <View style={estilo.mensagem}>
                    <TextInput
                        style={estilo.input}
                        placeholder="Deixe seu comentário" />
                    <TouchableHighlight
                            style={estilo.botao}>
                                <Text style={{textAlign: 'center', padding: 2}}>COMENTAR</Text>
                            </TouchableHighlight>
                </View>
            </View>
        );


    }
}

const estilo = StyleSheet.create({
    salvar: {
        color: '#3693BA',
        marginBottom: 10
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
        fontSize: 18,
        margin: 10
    },
    imagem: {
        width: 40,
        height: 40,
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
        marginBottom: 10,
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
        borderRadius: 25,
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


DadosDepoimento.propTypes = { nome: PropTypes.string.isRequired },
    { depoimento: PropTypes.string.isRequired },
    { img: PropTypes.string.isRequired },
    { comentario1: PropTypes.string.isRequired },
    { usuario1: PropTypes.string.isRequired },
    { comentario2: PropTypes.string.isRequired },
    { usuario2: PropTypes.string.isRequired },
    { reacoes: PropTypes.number.isRequired };

