import React, { Component } from 'react';
import { Text, TouchableHighlight, Image, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import DadosDepoimento from './DadosJson'
import Escrever from './Escrever'

const DATA = require('../data/posts.json')

function Item({ nome, depoimento, img, comentario1, usuario1, comentario2, usuario2, reacoes }) {
  return (
    <View style={estilo.item}>
      <DadosDepoimento nome={nome}
        depoimento={depoimento}
        img={img}
        comentario1={comentario1}
        usuario1={usuario1}
        comentario2={comentario2}
        usuario2={usuario2}
        reacoes={reacoes} />
    </View>
  );
}

export default class Feed extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props)
  }



  //renderização do componente
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}} >

        <View style={estilo.viewTitulo}>
          <TouchableHighlight
            underlayColor='white'
            onPress={() => this.props.navigation.openDrawer()}>
            <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
          </TouchableHighlight>
          <Text style={estilo.titulo}>DEPOIMENTOS</Text>
        </View>

        <Escrever/>
        <FlatList
          data={DATA}
          renderItem={
            ({ item }) => <Item nome={item.nome}
              depoimento={item.depoimento}
              img={item.img}
              comentario1={item.comentario1}
              usuario1={item.usuario1}
              comentario2={item.comentario2}
              usuario2={item.usuario2} 
              reacoes={item.reacoes} />
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  item:{
    marginHorizontal: 10,
    margin: 8,
    padding: 10,
    borderWidth: 0.3,
    borderColor: '#D6CBD6',
    borderRadius: 5
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
})
