import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Image, TouchableHighlight } from 'react-native';

export default class ComoDoar extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props);
  }

  //renderização do componente
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
         <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                    underlayColor='white'
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={estilo.menu} source={require('../assets/images/menu.png')}/>
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>COMO DOAR</Text>
                </View>
        <View style={estilo.display}>

          <Text style={estilo.texto}>Em caso de morte, no Brasil, para ser doador de órgãos e tecidos, não é necessário deixar nada por escrito. Basta avisar sua família, dizendo: “Quero ser doador de órgãos”. </Text>
          <Text style={estilo.texto}>A doação de órgãos e tecidos só acontece após a autorização familiar documentada. Quando a pessoa não avisa, a família fica em dúvida.</Text>
          <Text style={estilo.texto}>Já em caso de doador vivo, você precisa:</Text>
          <Text style={[estilo.texto, estilo.lista]} >1 - Ser um cidadão juridicamente capaz; </Text>
          <Text style={[estilo.texto, estilo.lista]}>2 - Estar em condições de doar o órgão ou tecido sem comprometer a saúde e aptidões vitais do doador; </Text>
          <Text style={[estilo.texto, estilo.lista]}>3 - Avaliação de um médico afastando a possibilidade de existir doenças que comprometam a saúde do receptor durante e após a doação; </Text>
          <Text style={[estilo.texto, estilo.lista]}>4 – Doar um dos órgãos ou tecido que sejam duplos e não impeçam o organismo do doador de continuar funcionando; </Text>
          <Text style={[estilo.texto, estilo.lista]}>5 - Ter um receptor com indicação médica indispensável de transplante; </Text>
          <Text style={[estilo.texto, estilo.lista]}>6 – Ser parente de até quarto grau. Caso seja cônjuge ou não parente, a doação só poderá ser feita com autorização judicial.</Text>

        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  menu:{
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  
  },
viewTitulo:{
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
   
},
  texto: {
    fontSize: 16,
    textAlign: 'left',
  },
  lista: {
    fontWeight: "bold",
    paddingTop: 15,

  },
  display: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center'
  }
})
