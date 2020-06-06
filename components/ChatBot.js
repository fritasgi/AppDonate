import React, { Component } from 'react';
import { Image, Text, StyleSheet, View, TextInput, TouchableHighlight} from 'react-native';

export default class ChatBot extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props);
  }

  //renderização do componente
  render() {
    return (
      <View style={estilo.display}>
        <View style={estilo.viewTitulo}>
          <TouchableHighlight
            underlayColor='white'
            onPress={() => this.props.navigation.openDrawer()}>
            <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
          </TouchableHighlight>
          <Text style={estilo.titulo}>ASSISTENTE VIRTUAL DA DONATE</Text>
        </View>
        <Image style={estilo.imagem}
          source={require('../assets/images/imagem-chatbot.png')} />
        <View style={estilo.mensagem}>
          <TextInput
            style={estilo.input} />
          <Image style={estilo.enviar} source={require('../assets/images/botaoEnviar.png')} />
        </View>
      </View>
    );
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

  },
  display: {
    backgroundColor: '#F5F5F5'
  },
  imagem: {
    width: 300,
    height: 150,
    resizeMode: 'stretch'
  },
  mensagem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 100

  },
  enviar: {
    margin: 5,
    width: 40,
    height: 40,
    resizeMode: 'stretch',

  },
  input: {
    margin: 10,
    width: 300,
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  }
})