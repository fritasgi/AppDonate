import React, { Component } from 'react';
import { Text, TouchableHighlight, Image, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Escrever from './Escrever'
import { connect } from 'react-redux';
import axios from '../lib/axios'


 class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.getPosts()
  }

  state = {
    posts: []
  }

  getPosts = () => {
    axios.get('/post')
      .then(res => {
        this.setState({ posts: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
  //renderização do componente
  render() {
    const listPost = () => {
      let posts = []
      posts = this.state.posts.map(post => {
        return (
          <View style={estilo.item}>

            <View style={estilo.perfilDep}>
              <Image style={estilo.imagemDep} source={{ uri: 'https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png' }} />
              <Text style={estilo.nomeDep}>{post.usuario.nome}</Text>
            </View>
            <Text style={estilo.depoimento}>{post.texto}</Text>



          </View>
        )
      })
      return posts
    }

    return (
      <ScrollView style={{ backgroundColor: 'white' }} >

        <View style={estilo.viewTitulo}>
          <TouchableHighlight
            underlayColor='white'
            onPress={() => this.props.navigation.openDrawer()}>
            <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
          </TouchableHighlight>
          <Text style={estilo.titulo}>DEPOIMENTOS</Text>
        </View>


        <TouchableHighlight
          underlayColor='white'
          style={estilo.botaoEscrever}
          onPress={() => {
            this.props.navigation.navigate('Escrever')
          }}>
          <Text style={{ textAlign: 'center' }}>ESCREVA SEU DEPOIMENTO</Text>
        </TouchableHighlight>


        {listPost()}
      </ScrollView>
    )
  }
}

const mapStateToProps = store => ({
  auth: store.auth
})

export default connect(mapStateToProps)(Feed);

const estilo = StyleSheet.create({
  perfilDep: {
    flexDirection: 'row',
    marginBottom: 10
  },
  imagemDep: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    borderRadius: 20
  },
  nomeDep: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: 10
  },
  botaoEscrever: {
    backgroundColor: '#3693BA',
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    elevation: 3,
    marginVertical: 10

  },
  item: {
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
