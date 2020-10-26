import React, { Component } from 'react';
import axios from '../lib/axios'
import { Text, TextInput, ScrollView, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../redux/actions';


async function editarPerfil(pCodigo, pNome, pEmail, pSenha) {
    const user = await axios.put(`/user/${pCodigo}`, { nome: pNome, email: pEmail, senha: pSenha })
};

class Editar extends React.Component {

    state = {
        codigo: this.props.auth.user.codigo,
        nome: this.props.auth.user.nome ,
        email: this.props.auth.user.email,
        senha: this.props.auth.user.senha,
    }


    //renderização do componente
    render() {
        const { auth: { user } } = this.props
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>

                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('Perfil')}>
                        <Image style={estilo.menu} source={require('../assets/images/seta.png')} />
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>EDITAR PERFIL</Text>
                </View>

                <View style={estilo.display}>
                    <Text style={estilo.dados}>NOME:</Text>
                    <TextInput style={estilo.input}
                        autoCompleteType="name"
                        value={this.state.nome}
                        onChangeText={(value) => this.setState({ nome: value })}
                         />


                    <Text style={estilo.dados}>E-MAIL:</Text>
                    <TextInput style={estilo.input}
                        autoCompleteType="email"
                        value={this.state.email}
                        onChangeText={(value) => this.setState({ email: value })} />
                    <Text style={estilo.dados}>SENHA:</Text>

                    <TextInput style={estilo.input}
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={(value) => this.setState({ senha: value })}
                    />
                    <Text style={estilo.dados}>CONFIRME SUA SENHA:</Text>
                    <TextInput style={estilo.input} secureTextEntry={true} placeholder="Digite sua senha novamente" />
                </View>

                <View >
                    <TouchableHighlight
                        underlayColor='#E6E6E6'
                        onPress={() => {
                            editarPerfil(this.state.codigo, this.state.nome, this.state.email, this.state.senha),
                                this.props.navigation.navigate('Perfil')
                        }}
                        style={estilo.botao}>
                        <Text style={estilo.enviar}>EDITAR</Text>
                    </TouchableHighlight>

                    
                </View>

            </ScrollView>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ auth }, dispatch)

const mapStateToProps = store => ({
    auth: store.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Editar);

//#3693BA
const estilo = StyleSheet.create({
    menu: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',

    },
    viewTitulo: {
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
