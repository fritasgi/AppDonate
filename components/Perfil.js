import React, { Component } from 'react';
import { Text, TouchableHighlight, Image, StyleSheet, View, FlatList } from 'react-native';
import DadosPerfil from './DadosPerfil'
import Informacoes from './Informacoes'
import { connect } from 'react-redux';




const DATA = require('../data/perfil.json')

function Item({ nome, email, imagem, depoimento, comentario, usuario, reacoes }) {
    return (
        <View><Informacoes
        nome={nome}
        email={email}
        imagem={imagem}/>
            <View style={estilo.item}>
                
                <DadosPerfil nome={nome}
                    depoimento={depoimento}
                    imagem={imagem}
                    comentario={comentario}
                    usuario={usuario}
                    reacoes={reacoes} />
            </View>
            </View>
      
    );
}

class Perfil extends React.Component {
    //construtor para uso do props
    constructor(props) {
        super(props)
    }
    
    
    
    //renderização do componente
    render() {
        const prop = this.prop
        return (
            <View style={{backgroundColor: 'white'}}>

                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                        underlayColor='white'
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
                    </TouchableHighlight>
                    <Text style={estilo.titulo}></Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => <Item nome={item.nome}
                            email={item.email}
                            depoimento={item.depoimento}
                            imagem={item.imagem}
                            comentario={item.comentario}
                            usuario={item.usuario}
                            reacoes={item.reacoes} />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = store => ({
    auth: store.auth
})

export default connect(mapStateToProps)(Perfil);

const estilo = StyleSheet.create({
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
