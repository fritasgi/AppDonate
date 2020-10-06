import React, { Component } from 'react';
import axios from '../lib/axios'
import { Text, TextInput, ScrollView, StyleSheet, View, TouchableHighlight, Image } from 'react-native';

async function cadastrarUsuarios(pNome, pEmail, pSenha){
        const user = await axio.post('/user', {nome: pNome, email: pEmail , senha: pSenha})
};

export default class Cadastro extends React.Component {
    
    state = {
        nome: '',
        email: '',
        senha: '',
      }


    //renderização do componente
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>

                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                        underlayColor='white'
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>CADASTRO</Text>
                </View>

                <View style={estilo.display}>
                    <Text style={estilo.dados}>NOME:</Text>
                    <TextInput style={estilo.input} 
                                autoCompleteType="name" 
                                placeholder="Digite seu nome" 
                               
                                onChangeText={(value) => this.setState({ nome: value })}/>


                    <Text style={estilo.dados}>E-MAIL:</Text>
                    <TextInput style={estilo.input} 
                                autoCompleteType="email" 
                                placeholder="Digite seu E-mail" 
                            
                                onChangeText={(value) => this.setState({ email: value })}/>
                    <Text style={estilo.dados}>SENHA:</Text>

                    <TextInput style={estilo.input} 
                                secureTextEntry={true} 
                                placeholder="Digite sua senha"
                            
                                onChangeText={(value) => this.setState({ senha: value })}
                     />
                    <Text style={estilo.dados}>CONFIRME SUA SENHA:</Text>
                    <TextInput style={estilo.input} secureTextEntry={true} placeholder="Digite sua senha novamente" />
                </View>

                <View >
                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        onPress={()=>{
                            cadastrarUsuarios(this.state.nome, this.state.email, this.state.senha),
                            this.props.navigation.navigate('Login')
                          }}
                        style={estilo.botao}>
                        <Text style={estilo.enviar}>CADASTRAR</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={estilo.botoes}>VOLTAR</Text>
                    </TouchableHighlight>
                </View>

            </ScrollView>
        )
    }
}

//#3693BA
const estilo = StyleSheet.create({
    menu:{
        width: 30,
        height: 30,
        resizeMode: 'stretch',
      
      },
    viewTitulo:{
        flexDirection: 'row',
        marginBottom: 20,
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
    enviar: {
        textAlign: 'center',
        fontSize: 18
    },
    botao: {
        backgroundColor: '#3693BA',
        padding: 10,
        marginBottom: 10,
        marginTop: 40,
        marginHorizontal: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,
        borderRadius: 20
    },
    botoes: {
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
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
    dados: {
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5,
        fontSize: 15

    },
    display: {
        paddingHorizontal: 30,
        justifyContent: 'center'
    }
})
