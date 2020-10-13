import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Modal, TouchableHighlight, Image, ScrollView } from 'react-native';

import axios from '../lib/axios'
import { connect } from 'react-redux';




async function cadastrarPostagem(pUsuario, pTexto, pFoto) {
    const user = await axios.post('/post', { usuario: pUsuario, texto: pTexto, foto: pFoto })
};



class Escrever extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        usuario: {
            codigo: this.props.auth.user.codigo
        },
        texto: '',
        foto: null,
    }

    render() {
        return (

            <View>
                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('Feed')}>
                        <Image style={estilo.menu} source={require('../assets/images/seta.png')} />
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>SEU DEPOIMENTO</Text>
                </View>


                <ScrollView style={estilo.container}>
                    <View style={estilo.textAreaContainer} >
                        <TextInput
                            style={estilo.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Escreva seu depoimento..."
                            placeholderTextColor="grey"
                            numberOfLines={250}
                            multiline={true}
                            onChangeText={(value) => this.setState({ texto: value })}
                        />
                    </View>

                    <View style={estilo.botoes}>
                        <TouchableHighlight
                            style={estilo.botao}
                            onPress={() => {
                                cadastrarPostagem(this.state.usuario, this.state.texto, this.state.foto),
                                    this.props.navigation.navigate('Feed')
                            }}>
                            <Text style={{ textAlign: 'center' }}>ENVIAR</Text>

                        </TouchableHighlight>
                    </View>
                </ScrollView>



            </View>
        );


    }
}

const mapStateToProps = store => ({
    auth: store.auth
})

export default connect(mapStateToProps)(Escrever);

const estilo = StyleSheet.create({

    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    textArea: {
        height: 250,
        justifyContent: "flex-start",

    },
    escreva: {
        width: 250,
        height: 35,
        marginHorizontal: 60,
        marginVertical: 8,
        resizeMode: 'stretch',
    },
    container: {
        padding: 20,
    },
    botao: {
        backgroundColor: '#3693BA',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,
        width: 150,

    },
    botoes: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },

    menu: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    viewTitulo: {
        flexDirection: 'row',
        paddingTop: 20,
        padding: 10,
        marginBottom: 10,
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

    },
});
