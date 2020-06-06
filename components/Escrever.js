import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Modal, TouchableHighlight, Image, ScrollView } from 'react-native';




export default class Escrever extends React.Component {
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
                            <Text style={estilo.titulo}>SEU DEPOIMENTO</Text>
                        </View>
                        <ScrollView style={estilo.container}>
                        <View style={estilo.textAreaContainer} >
                            <TextInput
                                style={estilo.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Escreva seu depoimento..."
                                placeholderTextColor="grey"
                                numberOfLines={100}
                                multiline={true}
                            />
                        </View>
                        <View style={estilo.botoes}>
                            <TouchableHighlight>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Escolha uma imagem</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                            style={estilo.botao}>
                                <Text style={{textAlign: 'center'}}>ENVIAR</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                </Modal>

                <TouchableHighlight
                    underlayColor='white'
                    onPress={
                        () => {
                            this.alteraModal(!this.state.modalVisible)
                        }}
                        style={estilo.botaoModal}>
                   <Text style={{textAlign: 'center'}}>ESCREVA SEU DEPOIMENTO</Text>
                </TouchableHighlight>

            </View>
        );


    }
}

const estilo = StyleSheet.create({
    botaoModal:{
        backgroundColor: '#3693BA',
        padding: 10,
        paddingHorizontal: 20,
        marginHorizontal:50,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,
        
    },
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
        flex: 1,
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
        marginLeft: '32%',
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,
        
    },
    botoes: {
        flexDirection: 'row',
        margin: 10
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
});
