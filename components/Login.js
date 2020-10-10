import React, { Component } from 'react';
import Feed from './Depoimentos';
import axios from '../lib/axios'
import { Text, TextInput, ScrollView, StyleSheet, View, Image, Alert, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../redux/actions';

class Login extends React.Component {

    //construtor para uso do props
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        senha: '',
    }
    login = () => {
        const {
            email,
            senha,
        } = this.state
        axios.post('/login', {
            email,
            senha,
        })
            .then(async res => {
                if(res.status === 200) {
                    await this.props.auth(res.data)
                    this.props.navigation.navigate('Feed')
                }
            })
            .catch(error => {
                // APRENSENTAR UM POP UP DE ERRO PARA O USUARIO
                console.error('ERRO NO LOGIN >', error)
            })
            this.props.navigation.navigate('Feed')

    }
    //renderização do componente
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>

                {/* tentei utilizar um componente externo para o header mas nao funcionou */}
                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                    underlayColor='white'
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={estilo.menu} source={require('../assets/images/menu.png')}/>
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>LOGIN</Text>
                </View>

                <View style={estilo.display}>
                    <Text style={estilo.dados}>E-MAIL:</Text>
                    <TextInput 
                        style={estilo.input}
                        autoCompleteType="email"
                        placeholder="Digite seu E-mail"
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                    <Text style={estilo.dados}>SENHA:</Text>
                    <TextInput
                        style={estilo.input}
                        secureTextEntry={true}
                        placeholder="Digite sua senha"
                        onChangeText={(value) => this.setState({ senha: value })}
                    />
                </View>
                <View >
                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        style={estilo.botao}
                    >
                        <Text style={estilo.enviar}
                            onPress={() => this.login()}>ENTRAR</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                    >
                        <Text style={estilo.botoes}>CADASTRE-SE</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        onPress={() => Alert.alert('Fique tranquilo! Um link de redefinição já foi enviado para o e-mail cadastrado.')}>
                        <Text style={estilo.botoes}> ESQUECI MINHA SENHA</Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>
        )
    }
}

//CONSOME O DADO
// const mapStateToProps = store => ({
//     user: store.auth.user
// })

const mapDispatchToProps = dispatch => bindActionCreators({ auth }, dispatch)

export default connect(null, mapDispatchToProps)(Login);

//#3693BA
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
    enviar: {
        textAlign: 'center',
        fontSize: 18
    },
    botao: {
        backgroundColor: '#3693BA',
        padding: 10,
        marginBottom: 10,
        marginTop: 40,
        marginHorizontal: 120,
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
        marginTop: 25,
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
        marginTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center'
    }
})
