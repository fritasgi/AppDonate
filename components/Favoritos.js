import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Modal, TouchableHighlight, Image, ScrollView } from 'react-native';




export default class Favoritos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        }
    }

    alteraModal(visibilidade) {
        this.setState({ modalVisible: visibilidade });
    }

    render() {
        return (

            <View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => console.log('Modal fechado')}>


                    <View style={estilo.viewTitulo}>
                        <TouchableHighlight
                            underlayColor='white'
                            onPress={
                                () => {
                                    this.alteraModal(!this.state.modalVisible)
                                }}>
                            <Image style={estilo.menu} source={require('../assets/images/seta.png')} />
                        </TouchableHighlight>
                        <Text style={estilo.titulo}>EDITAR PERFIL</Text>
                    </View>


                    <View style={estilo.display}>
                            
                        <Text style={estilo.dados}>FOTO ATUAL:</Text>
                        <View style={{flexDirection: 'row'}}>
                        <Image style={estilo.imagem} source={{ uri: this.props.imagem }} />
                        <Text style={estilo.editar}> MUDAR FOTO DE PERFIL</Text>
                        </View>
                        <Text style={estilo.dados}>NOME ATUAL: {this.props.nome}</Text>
                        <TextInput style={estilo.input} autoCompleteType="name" placeholder="Digite seu novo nome" />


                    </View>
                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        style={estilo.botaoSalvar}
                        underlayColor='white'
                        onPress={
                            () => {
                                this.alteraModal(!this.state.modalVisible)
                            }}>
                    
                        <Text style={{textAlign: 'center'}}>SALVAR ALTERAÇÕES</Text>
                    </TouchableHighlight>



                </Modal>

                <TouchableHighlight
                    underlayColor='white'
                    onPress={
                        () => {
                            this.alteraModal(!this.state.modalVisible)
                        }}
                    style={estilo.botao}>
                    <Text style={{ textAlign: 'center', padding: 2 }}>EDITAR PERFIL</Text>
                </TouchableHighlight>

            </View>
        );


    }
}

const estilo = StyleSheet.create({
    botao: {
        backgroundColor: '#3693BA',
        borderRadius: 30,
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
    botaoSalvar:{
        backgroundColor: '#3693BA',
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 100,
        marginVertical: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,
    },
    modal: {
        fontSize: 20,
        padding: 20,
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        elevation: 5,
        margin: 10
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
    input: {
        width: 310,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.49,
        elevation: 3,
    },
    editar:{
        color: '#3693BA',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 15
    },
    dados: {
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5,
        fontSize: 15

    },
    display: {
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    imagem: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
        borderRadius: 30
    },
});
